#!/usr/bin/env python3
"""
Prototype: finner automatisk denne ukens "Program for tjenestemøtet" på jw.org
(uten å gjette en dato-URL) og trekker ut Skatter fra Guds Ord, Bibellesning
og Menighetsbibelstudiet.

Fremgangsmåte (3 steg), alt basert på sider som alltid finnes på jw.org:
  1. Hent oversikten over toårs-hefter -> finn heftet som inneholder dagens dato.
  2. Hent det heftets ukeliste -> finn uken som inneholder dagens dato.
  3. Hent ukesiden og parse ut de tre seksjonene.
"""

import calendar
import json
import re
import sys
from datetime import date
from urllib.request import Request, urlopen

from bs4 import BeautifulSoup

BASE = "https://www.jw.org"
OVERVIEW_URL = f"{BASE}/no/bibliotek/jehovas-vitner-arbeidshefte/"
HEADERS = {"User-Agent": "Mozilla/5.0 (compatible; mwb-forberedelse-prototype/0.1)"}

MAANEDER = [
    "januar", "februar", "mars", "april", "mai", "juni",
    "juli", "august", "september", "oktober", "november", "desember",
]


def hent_html(url: str) -> BeautifulSoup:
    req = Request(url, headers=HEADERS)
    with urlopen(req) as resp:
        return BeautifulSoup(resp.read(), "html.parser")


def maaned_index(navn: str) -> int:
    navn = navn.strip().lower().rstrip(".")
    return MAANEDER.index(navn) + 1


def parse_maaned_par(tekst: str):
    """'Juli–august 2026' -> (start_dato, slutt_dato)."""
    m = re.match(r"^([A-Za-zæøåÆØÅ]+)[–-]([A-Za-zæøåÆØÅ]+)\s+(\d{4})$", tekst.strip())
    if not m:
        return None
    m1, m2, aar = m.group(1), m.group(2), int(m.group(3))
    i1, i2 = maaned_index(m1), maaned_index(m2)
    siste_dag = calendar.monthrange(aar, i2)[1]
    return date(aar, i1, 1), date(aar, i2, siste_dag)


def parse_uke_periode(tekst: str, aar: int):
    """'3.–9. august' eller '27. juli–2. august' -> (start_dato, slutt_dato)."""
    m = re.match(
        r"^(\d{1,2})\.\s*(?:([A-Za-zæøåÆØÅ]+)\.?\s*)?[–-]\s*(\d{1,2})\.\s*([A-Za-zæøåÆØÅ]+)$",
        tekst.strip(),
    )
    if not m:
        return None
    dag1, maaned1, dag2, maaned2 = m.groups()
    maaned1 = maaned1 or maaned2
    i1, i2 = maaned_index(maaned1), maaned_index(maaned2)
    aar2 = aar + 1 if i2 < i1 else aar
    return date(aar, i1, int(dag1)), date(aar2, i2, int(dag2))


def finn_denne_ukens_url(i_dag: date):
    """Returnerer (url, start_dato, slutt_dato) for uken som inneholder i_dag."""
    # Steg 1: finn riktig toårs-hefte
    soup = hent_html(OVERVIEW_URL)
    hefte_url = None
    for a in soup.find_all("a", href=True):
        if "jehovas-vitner-arbeidshefte/" not in a["href"]:
            continue
        periode = parse_maaned_par(a.get_text())
        if not periode:
            continue
        start, slutt = periode
        if start <= i_dag <= slutt:
            hefte_url = BASE + a["href"] if a["href"].startswith("/") else a["href"]
            break
    if not hefte_url:
        raise RuntimeError("Fant ikke riktig toårs-hefte for dagens dato.")

    # Steg 2: finn riktig uke i heftet
    soup = hent_html(hefte_url)
    aar_i_hefte = i_dag.year
    for a in soup.find_all("a", href=True):
        if "Program-for-tjenestem" not in a["href"]:
            continue
        periode = parse_uke_periode(a.get_text(), aar_i_hefte)
        if not periode:
            continue
        start, slutt = periode
        if start <= i_dag <= slutt:
            url = BASE + a["href"] if a["href"].startswith("/") else a["href"]
            return url, start, slutt

    raise RuntimeError("Fant ikke riktig uke i heftet for dagens dato.")


def full_url(href: str) -> str:
    return BASE + href if href.startswith("/") else href


def hent_skriftsteder(node) -> list:
    steder = []
    for a in node.find_all("a", class_="jsBibleLink"):
        steder.append({"tekst": a.get_text(strip=True), "lenke": full_url(a["href"])})
    return steder


def parse_uke(url: str) -> dict:
    soup = hent_html(url)
    artikkel = soup.find("article", id="article")

    dato_header = artikkel.find("h1")
    dato_range = dato_header.get_text(strip=True)

    # Bibellesning for uken (H2 rett under H1)
    bibel_h2 = dato_header.find_next("h2")
    bibel_link = bibel_h2.find("a", class_="jsBibleLink")
    ukens_bibellesning = {
        "referanse": bibel_link.get_text(strip=True),
        "lenke": full_url(bibel_link["href"]),
        "fulltekst": hent_bibellesning_fulltekst(bibel_link),
    }

    # --- Skatter fra Guds Ord: alt mellom denne H2 og neste H2 ---
    skatter_h2 = artikkel.find(lambda tag: tag.name == "h2" and "SKATTER FRA GUDS ORD" in tag.get_text())
    opplaering_h2 = artikkel.find(lambda tag: tag.name == "h2" and "OPPLÆRING I FORKYNNELSEN" in tag.get_text())

    punkter = []
    for h3 in skatter_h2.find_all_next("h3"):
        if opplaering_h2 and h3.find_previous("h2") is not skatter_h2:
            break
        tittel = h3.get_text(strip=True)
        avsnitt = []
        node = h3.find_next_sibling()
        skriftsteder = []
        while node and node.name not in ("h3", "h2") and not node.find("h2"):
            tekst = node.get_text(" ", strip=True)
            if tekst:
                avsnitt.append(tekst)
            skriftsteder.extend(hent_skriftsteder(node))
            node = node.find_next_sibling()
        punkter.append({
            "tittel": tittel,
            "tekst": " ".join(avsnitt),
            "skriftsteder": skriftsteder,
        })

    # --- Menighetsbibelstudiet ---
    mbs_h3 = artikkel.find(lambda tag: tag.name == "h3" and "Menighetsbibelstudiet" in tag.get_text())
    mbs_div = mbs_h3.find_next_sibling("div")
    mbs_link = mbs_div.find("a")
    mbs_lenke = full_url(mbs_link["href"])
    mbs_pubkode = mbs_link.get_text(" ", strip=True)

    kapitteltittel = None
    kapittel_fulltekst = ""
    try:
        kap_soup = hent_html(mbs_lenke)
        h1 = kap_soup.find("h1")
        if h1:
            kapitteltittel = h1.get_text(strip=True)
        kapittel_fulltekst = hent_studiekapittel_tekst(kap_soup)
    except Exception:
        pass

    return {
        "dato": dato_range,
        "kilde": url,
        "bibellesning": ukens_bibellesning,
        "skatter_fra_guds_ord": punkter,
        "menighetsbibelstudiet": {
            "referanse": mbs_pubkode,
            "kapitteltittel": kapitteltittel,
            "lenke": mbs_lenke,
            "fulltekst": kapittel_fulltekst,
        },
    }


def hent_bibelkapittel_tekst(kapittel_url: str) -> str:
    """Henter ren, lesbar tekst for ett bibelkapittel (uten fotnote-/kryssreferanse-tegn)."""
    soup = hent_html(kapittel_url)
    bibeltekst = soup.find("div", id="bibleText")
    if not bibeltekst:
        return ""
    for fotnote in bibeltekst.find_all("a", class_="footnoteLink"):
        fotnote.decompose()
    for xref in bibeltekst.find_all("a", class_="xrefLink"):
        xref.decompose()
    vers = bibeltekst.find_all("span", class_="verse")
    return " ".join(v.get_text(" ", strip=True) for v in vers)


def hent_bibellesning_fulltekst(bibel_link) -> str:
    """Følger data-targetverses på bibellenken for å finne hele kapittel-spennet
    (f.eks. Jeremia 22-23) og henter full tekst for hvert kapittel."""
    targetverses = bibel_link.get("data-targetverses", "")
    m = re.match(r"^(\d{2})(\d{3})\d{3}-(\d{2})(\d{3})\d{3}$", targetverses)
    href = bibel_link["href"]
    bok_match = re.search(r"/boker/([^/]+)/(\d+)/", href)
    if not m or not bok_match:
        return ""
    bok_slug = bok_match.group(1)
    start_kap, slutt_kap = int(m.group(2)), int(m.group(4))
    base_kap_url = full_url(href.split("#")[0])
    deler = []
    for kap in range(start_kap, slutt_kap + 1):
        kap_url = re.sub(r"/\d+/$", f"/{kap}/", base_kap_url)
        tekst = hent_bibelkapittel_tekst(kap_url)
        if tekst:
            deler.append(f"[Kapittel {kap}] {tekst}")
    return "\n\n".join(deler)


def hent_studiekapittel_tekst(soup: BeautifulSoup) -> str:
    """Henter brødteksten (fortellingen) fra et menighetsbibelstudie-kapittel,
    dvs. alle avsnitt mellom overskriften og første H2 (spørsmålsdelen)."""
    h1 = soup.find("h1")
    if not h1:
        return ""
    avsnitt = []
    for node in h1.find_all_next(["p", "h2"]):
        if node.name == "h2":
            break
        if "imgCredit" not in (node.get("class") or []):
            tekst = node.get_text(" ", strip=True)
            if tekst:
                avsnitt.append(tekst)
    return "\n".join(avsnitt)


def main():
    i_dag = date.today()
    uke_url, _, _ = finn_denne_ukens_url(i_dag)
    print(f"# Fant uken for {i_dag.isoformat()}: {uke_url}", file=sys.stderr)
    data = parse_uke(uke_url)
    print(json.dumps(data, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
