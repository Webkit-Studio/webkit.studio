#!/usr/bin/env python3
"""
Sestaví soubory, které si Webflow tahá z jsDelivr.

    python3 site/webflow/build.py

Zdroj pravdy jsou .css a .js o patro výš. Tenhle skript je jen rozřeže
podle značek /* @global */ … /* @endglobal */, minifikuje a uloží do
dist/. Do dist/ se needituje ručně, přepíše se to.

Po spuštění: commit + push. GitHub Action pak vyčistí cache jsDelivru
a nová verze je na webu do pár vteřin.
"""
import re, sys, pathlib

KOREN = pathlib.Path(__file__).parent
DIST = KOREN / "dist"

def nacti(jmeno):
    return (KOREN / jmeno).read_text(encoding="utf-8")

def rozdel(text):
    """Vrátí (globální části, zbytek). Značky: @global / @endglobal."""
    glob, zbytek, uvnitr = [], [], False
    for radek in text.split("\n"):
        if radek.strip().startswith("/* @global"):
            uvnitr = True
            continue
        if radek.strip().startswith("/* @endglobal"):
            uvnitr = False
            continue
        (glob if uvnitr else zbytek).append(radek)
    return "\n".join(glob), "\n".join(zbytek)

def min_css(s):
    s = re.sub(r"/\*.*?\*/", "", s, flags=re.S)
    s = re.sub(r"\s*\n\s*", "\n", s)
    s = re.sub(r"\s*([{}:;,>])\s*", r"\1", s)
    s = re.sub(r";}", "}", s).replace("\n", "").strip()
    if s.count("{") != s.count("}"):
        sys.exit("CSS: nevyvážené závorky %d vs %d" % (s.count("{"), s.count("}")))
    return s

def min_js(s):
    # jen komentáře a odsazení; zalomení řádků zůstávají, bez parseru
    # je mazat nelze (automatické středníky)
    s = re.sub(r"/\*.*?\*/", "", s, flags=re.S)
    s = "\n".join(l.strip() for l in s.split("\n"))
    return re.sub(r"\n{2,}", "\n", s).strip()

def zabal_js(telo, popis, klic):
    # Pojistka: kdyby se soubor omylem načetl dvakrát (globálně i na
    # stránce), poběží stejně jen jednou. Bez ní by se rozjely dvě
    # animace přes sebe.
    return ("/* Webkit.Studio — %s\n"
            "   Sestaveno z page-home.js skriptem build.py. Needituj ručně. */\n"
            "(function(){\n"
            "if(window.%s)return;window.%s=1;\n"
            "function boot(){\n"
            "var q=function(s,r){return (r||document).querySelector(s)},"
            "qa=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};\n"
            "var rm=matchMedia('(prefers-reduced-motion: reduce)').matches,"
            "fine=matchMedia('(hover:hover) and (pointer:fine)').matches;\n"
            "var cl=function(v,a,b){return Math.max(a,Math.min(b,v))},"
            "lp=function(a,b,t){return a+(b-a)*t},"
            "eo=function(t){return 1-Math.pow(1-t,3)};\n\n"
            "%s\n\n}\n"
            "if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot);"
            "else boot();\n})();\n") % (popis, klic, klic, telo)

def main():
    DIST.mkdir(exist_ok=True)

    g1, home_css   = rozdel(nacti("page.css"))
    g2, home_late  = rozdel(nacti("page-late.css"))
    g3, kontakt_css= rozdel(nacti("page-kontakt.css"))
    gjs, home_js   = rozdel(nacti("page-home.js"))

    vystupy = {
        "global.css": min_css(g1 + "\n" + g2 + "\n" + g3),
        "home.css":   min_css(home_css + "\n" + home_late),
        "kontakt.css": min_css(kontakt_css),
        "global.js":  min_js(zabal_js(gjs,  "globální skript webu", "__wkGlobal")),
        "home.js":    min_js(zabal_js(home_js, "skript homepage", "__wkHome")),
    }
    for jmeno, obsah in vystupy.items():
        (DIST / jmeno).write_text(obsah, encoding="utf-8")
        print("%-12s %6d B" % (jmeno, len(obsah)))

if __name__ == "__main__":
    main()
