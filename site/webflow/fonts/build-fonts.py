#!/usr/bin/env python3
"""Postaví self-hostované fonty pro webkit.studio a nahraje je do Webflow.

Proč vlastní fonty místo Google Fonts:
- Webflow při napojení na Google Fonts vkládá do hlavičky webfont.js, který blokuje
  vykreslení. Vlastní fonty se načtou přímo z @font-face v CSS webu.
- Odpadnou tři cizí domény: fonts.googleapis.com, fonts.gstatic.com, ajax.googleapis.com.
- Návštěvníkova IP adresa neodchází ke Googlu. Pro české firmy je to čistší.

Pozor na jednu věc: nikdy neupravuj výchozí hodnoty os (fvar) ručně. Obrysy v tabulce
glyf odpovídají původní výchozí instanci a deltas se počítají vůči ní. Když přepíšeš
defaultValue bez přepočtu, font se vykreslí ve špatné tloušťce. Na pinování osy
používej varLib.instancer, ten deltas přepočítá.

Potřebuje: pip install fonttools brotli
"""
import subprocess, hashlib, os

LATIN = ("U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,"
         "U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD")
LATIN_EXT = ("U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+1E00-1E9F,"
             "U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F")
FEATURES = "--layout-features=kern,liga,calt,ccmp,locl,mark,mkmk"
RAW = "https://raw.githubusercontent.com/google/fonts/main/ofl"

SOURCES = [
    ("bricolagegrotesque", "BricolageGrotesque%5Bopsz%2Cwdth%2Cwght%5D.ttf",
     "BricolageGrotesque.ttf", "wdth=100", "bricolage-grotesque-var.woff2"),
    ("instrumentsans", "InstrumentSans%5Bwdth%2Cwght%5D.ttf",
     "InstrumentSans.ttf", "wdth=100", "instrument-sans-var.woff2"),
    ("ibmplexmono", "IBMPlexMono-Regular.ttf", "IBMPlexMono-Regular.ttf", None, "ibm-plex-mono-400.woff2"),
    ("ibmplexmono", "IBMPlexMono-Medium.ttf", "IBMPlexMono-Medium.ttf", None, "ibm-plex-mono-500.woff2"),
]

def run(cmd):
    subprocess.run(cmd, check=True)

for folder, remote, local, pin, out in SOURCES:
    if not os.path.exists(local):
        run(["curl", "-sL", f"{RAW}/{folder}/{remote}", "-o", local])
    src = local
    if pin:
        src = local.replace(".ttf", "-pinned.ttf")
        run(["fonttools", "varLib.instancer", local, pin, "-o", src])
    run(["fonttools", "subset", src, f"--unicodes={LATIN},{LATIN_EXT}", FEATURES,
         "--flavor=woff2", "--no-hinting", "--desubroutinize", "--name-IDs=*",
         f"--output-file={out}"])
    data = open(out, "rb").read()
    print(f"{len(data):>8} B  md5 {hashlib.md5(data).hexdigest()}  {out}")

print("\nDál: data_fonts_tool > create_font (nebo replace_font_file) s tímhle md5,")
print("pak POST bytů na vrácenou presigned S3 adresu. Nakonec aktualizuj preload")
print("v kódu hlavičky webu na novou hostedUrl.")
