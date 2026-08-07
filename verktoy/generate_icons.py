#!/usr/bin/env python3
"""Genererer app-ikoner (PNG) for PWA-manifestet: en skallet, smilende
mann med bart, tegnet som strektegning på gullbakgrunn.

Selve figuren er definert som SVG (med gullbakgrunn bakt inn, siden
macOS' QuickLook-rasterisering ikke bevarer gjennomsiktighet) og
rasterisert via qlmanage for presis gjengivelse av kurvene. Runde
hjørner legges på etterpå med en alfa-maske i PIL.
"""

import os
import subprocess
import tempfile

from PIL import Image, ImageDraw

GULL_HEX = "#b8860b"

SVG_MAL = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <rect width="200" height="200" fill="{gull}"/>
  <g fill="none" stroke="#f3eee5" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="100" cy="76" r="46"/>
    <path d="M72,46 Q100,34 128,46" stroke-width="3.6"/>
    <path d="M100,42 L100,30" stroke-width="3.6"/>
    <path d="M77,69 Q87,60 98,66" stroke-width="3.2"/>
    <path d="M102,66 Q113,60 123,69" stroke-width="3.2"/>
    <circle cx="85" cy="79" r="3" fill="#f3eee5" stroke="none"/>
    <circle cx="115" cy="79" r="3" fill="#f3eee5" stroke="none"/>
    <path d="M100,72 Q97,84 96,91" stroke-width="3.4"/>
    <path d="M54,74 Q46,74 46,84 Q46,94 54,92" stroke-width="3.4"/>
    <path d="M146,74 Q154,74 154,84 Q154,94 146,92" stroke-width="3.4"/>
    <path d="M56,108 Q62,90 82,96 Q92,99 100,93 Q108,99 118,96 Q138,90 144,108 Q126,96 114,99 Q106,101 100,97 Q94,101 86,99 Q74,96 56,108 Z" fill="#f3eee5" stroke="#f3eee5" stroke-width="1.5"/>
    <path d="M92,113 L92,123" stroke-width="3.6"/>
    <path d="M108,113 L108,123" stroke-width="3.6"/>
    <path d="M30,183 Q30,128 100,126 Q170,128 170,183" stroke-width="4.4"/>
  </g>
</svg>"""


def rasteriser(storrelse: int) -> Image.Image:
    with tempfile.TemporaryDirectory() as tmp:
        svg_sti = os.path.join(tmp, "ikon.svg")
        with open(svg_sti, "w", encoding="utf-8") as f:
            f.write(SVG_MAL.format(gull=GULL_HEX))
        subprocess.run(
            ["qlmanage", "-t", "-s", str(storrelse), "-o", tmp, svg_sti],
            check=True, capture_output=True,
        )
        png_sti = svg_sti + ".png"
        img = Image.open(png_sti).convert("RGB")
        if img.size != (storrelse, storrelse):
            img = img.resize((storrelse, storrelse), Image.LANCZOS)
        return img


def avrund_hjorner(img: Image.Image, radius_andel: float) -> Image.Image:
    storrelse = img.size[0]
    maske = Image.new("L", (storrelse, storrelse), 0)
    draw = ImageDraw.Draw(maske)
    draw.rounded_rectangle([0, 0, storrelse - 1, storrelse - 1], radius=storrelse * radius_andel, fill=255)
    ut = img.convert("RGBA")
    ut.putalpha(maske)
    return ut


ROT = os.path.join(os.path.dirname(__file__), "..")

for storrelse, navn in [(192, "icon-192.png"), (512, "icon-512.png")]:
    ikon = avrund_hjorner(rasteriser(storrelse), 0.22)
    ikon.save(os.path.join(ROT, navn))
    print("Skrev", navn)

# Apple touch icon: helt firkantet, ingen alfa-kanal (iOS legger på sin egen maske)
apple = rasteriser(180)
apple.save(os.path.join(ROT, "apple-touch-icon.png"))
print("Skrev apple-touch-icon.png")
