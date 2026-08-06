#!/usr/bin/env python3
"""
Genererer sammendrag, flervalgs-quiz og "Åndelige perler" for ukens tre
seksjoner (bibellesning, Skatter fra Guds Ord, menighetsbibelstudiet) ved
hjelp av Claude. Kjøres etter hent_uke.py, eller importerer og kjører den
selv. Skriver ut en data.json som passer rett inn i nettside/.

Krever miljøvariabelen ANTHROPIC_API_KEY (se console.anthropic.com) og
pakken 'anthropic' (pip install anthropic).
"""

import json
import os
import re
import sys
from datetime import date

from hent_uke import finn_denne_ukens_url, parse_uke

MODELL = "claude-sonnet-5"

SYSTEM_PROMPT_SPORSMAL = (
    "Du hjelper til med å forberede et menighetsmøte for Jehovas vitner. "
    "Du får utdrag fra offisielt materiale fra jw.org. Skriv et kort "
    "sammendrag på norsk (3-5 setninger) i et enkelt, muntlig språk – "
    "ikke bibelsk høytidsspråk, men slik man ville forklart det til en venn. "
    "Lag så 4-5 quiz-spørsmål med FIRE svaralternativer hver, der bare ett "
    "er riktig. Spørsmålene skal teste forståelse av selve INNHOLDET "
    "(hendelser, personer, poenger, lærdommer) – ikke tekniske eller "
    "praktiske detaljer som tidsbruk, minuttall eller møteopplegg. Bruk KUN "
    "fakta som faktisk står i teksten du får oppgitt – ikke finn på "
    "hendelser eller skriftsteder. Svar utelukkende med gyldig "
    "JSON på formen: {\"sammendrag\": \"...\", \"sporsmal\": "
    "[{\"sporsmal\": \"...\", \"alternativer\": [\"...\", \"...\", \"...\", \"...\"], "
    "\"riktig\": 0}]} der \"riktig\" er indeksen (0-3) til riktig alternativ."
)

SYSTEM_PROMPT_PERLER = (
    "Du hjelper til med å forberede et menighetsmøte for Jehovas vitner. "
    "Du får bibelteksten for ukens bibellesning. Velg ut 4 vers som egner seg "
    "godt til personlig refleksjon (\"åndelige perler\"). For hvert vers, "
    "skriv et kort sitat/parafrase, hva verset lærer oss om Jehova, og "
    "hvordan man konkret kan bruke det i livet, i menigheten eller i "
    "forkynnelsen. Hold deg strengt til det som faktisk står i teksten – "
    "ikke finn på hendelser. Svar utelukkende med gyldig JSON på formen: "
    "{\"innledning\": \"...\", \"perler\": [{\"vers\": \"Jeremia 23:5, 6\", "
    "\"sitat\": \"...\", \"om_jehova\": \"...\", \"bruk_i_livet\": \"...\"}]}"
)


def kall_claude(system: str, innhold: str) -> dict:
    import anthropic

    client = anthropic.Anthropic()
    resp = client.messages.create(
        model=MODELL,
        max_tokens=2000,
        system=system,
        messages=[{"role": "user", "content": innhold}],
    )
    tekst = resp.content[0].text.strip()
    tekst = re.sub(r"^```(json)?|```$", "", tekst.strip(), flags=re.MULTILINE).strip()
    return json.loads(tekst)


def generer_for_uke(uke: dict) -> dict:
    resultat = {"dato": uke["dato"], "kilde": uke["kilde"]}

    bl = uke["bibellesning"]
    resultat["bibellesning"] = {
        "referanse": bl["referanse"],
        "lenke": bl["lenke"],
        **kall_claude(SYSTEM_PROMPT_SPORSMAL, f"Bibellesning: {bl['referanse']}\n\n{bl['fulltekst']}"),
    }

    resultat["andelige_perler"] = kall_claude(
        SYSTEM_PROMPT_PERLER, f"Bibellesning: {bl['referanse']}\n\n{bl['fulltekst']}"
    )
    # NB: Claude genererer ikke presise jw.org-lenker per vers (for stor risiko for
    # feil ankere). Vurder å slå opp verslenker programmatisk som en forbedring.

    skatter_tekst = "\n\n".join(
        f"{p['tittel']}\n{p['tekst']}" for p in uke["skatter_fra_guds_ord"]
    )
    resultat["skatter_fra_guds_ord"] = kall_claude(
        SYSTEM_PROMPT_SPORSMAL, f"Skatter fra Guds Ord:\n\n{skatter_tekst}"
    )

    mbs = uke["menighetsbibelstudiet"]
    resultat["menighetsbibelstudiet"] = {
        "kapitteltittel": mbs["kapitteltittel"],
        "lenke": mbs["lenke"],
        **kall_claude(SYSTEM_PROMPT_SPORSMAL, f"Kapittel: {mbs['kapitteltittel']}\n\n{mbs['fulltekst']}"),
    }

    return resultat


def main():
    if not os.environ.get("ANTHROPIC_API_KEY"):
        sys.exit(
            "Mangler ANTHROPIC_API_KEY. Hent en nøkkel på console.anthropic.com "
            "og sett den med: export ANTHROPIC_API_KEY=sk-..."
        )
    i_dag = date.today()
    uke_url, start, slutt = finn_denne_ukens_url(i_dag)
    uke = parse_uke(uke_url)
    resultat = generer_for_uke(uke)

    rot = os.path.join(os.path.dirname(__file__), "..")
    uker_mappe = os.path.join(rot, "uker")
    uke_id = start.isoformat()

    with open(os.path.join(uker_mappe, f"{uke_id}.json"), "w", encoding="utf-8") as f:
        json.dump(resultat, f, ensure_ascii=False, indent=2)
    print(f"Skrev uker/{uke_id}.json")

    indeks_sti = os.path.join(uker_mappe, "indeks.json")
    indeks = json.load(open(indeks_sti, encoding="utf-8")) if os.path.exists(indeks_sti) else []
    indeks = [u for u in indeks if u["id"] != uke_id]
    indeks.append({"id": uke_id, "dato": resultat["dato"], "start": start.isoformat(), "slutt": slutt.isoformat()})
    indeks.sort(key=lambda u: u["start"], reverse=True)
    with open(indeks_sti, "w", encoding="utf-8") as f:
        json.dump(indeks, f, ensure_ascii=False, indent=2)
    print(f"Oppdaterte uker/indeks.json ({len(indeks)} uker)")


if __name__ == "__main__":
    main()
