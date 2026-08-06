#!/usr/bin/env python3
"""Genererer enkle app-ikoner (PNG) for PWA-manifestet, i samme stil som
stjerne-ikonet brukt for "Åndelige perler" i selve nettsiden."""

from PIL import Image, ImageDraw

GULL = (184, 134, 11, 255)
HVIT = (255, 255, 255, 255)

# Stjerne-punkter fra IKONER.andelige_perler sin SVG-path (48x48 viewBox)
STJERNE_48 = [
    (24, 6), (28.5, 14.5), (38, 18), (30, 24),
    (32, 34), (24, 29), (16, 34), (18, 24),
    (10, 18), (19.5, 14.5),
]


def tegn_ikon(storrelse: int, rundet: bool) -> Image.Image:
    img = Image.new("RGBA", (storrelse, storrelse), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = storrelse * 0.22 if rundet else 0
    draw.rounded_rectangle([0, 0, storrelse - 1, storrelse - 1], radius=radius, fill=GULL)

    skala = storrelse / 48
    marg = storrelse * 0.14
    bredde = storrelse - 2 * marg
    punkter = [(marg + x / 48 * bredde, marg + y / 48 * bredde) for x, y in STJERNE_48]
    draw.polygon(punkter, fill=HVIT)
    return img


import os

ROT = os.path.join(os.path.dirname(__file__), "..")

for storrelse, navn in [(192, "icon-192.png"), (512, "icon-512.png")]:
    tegn_ikon(storrelse, rundet=True).save(os.path.join(ROT, navn))
    print("Skrev", navn)

# Apple touch icon: ingen alfa-kanal (iOS ignorerer den og kan gi svart bakgrunn)
apple = tegn_ikon(180, rundet=False).convert("RGB")
apple.save(os.path.join(ROT, "apple-touch-icon.png"))
print("Skrev apple-touch-icon.png")
