# Prompt 3 — Chat na tvorbu grafiky

## Nejdřív odpověď na tvoji otázku

**Claude Code, ne Claude Design.** Rozdíl je v tom, co který nástroj umí udělat
s výsledkem.

| | Claude Design | Claude Code |
|---|---|---|
| Hledání vizuálního směru | ano, je na to lepší | jde to, ale hůř se to zkouší |
| Grafika přesně podle brand sheetu | jen když mu ho popíšeš znovu | čte soubor v repu |
| Přesné rozměry a export | omezeně | vyrenderuje HTML do PNG v jakémkoliv rozměru |
| Dávka, třeba 12 karet naráz | ne | ano, skriptem |
| Uložení do repa a verzování | ne | ano |
| Napojení na Figmu, Canvu, Webflow | ne | ano, přes MCP |
| Opakovatelnost za měsíc | musíš popsat znovu | pustíš stejný skript |

**Pravidlo:** když **hledáš, jak by to mělo vypadat**, jdi do Claude Design.
Když **víš, jak to má vypadat, a chceš to vyrobit** podle systému, který už máš,
jdi do Claude Code.

Pro tebe to prakticky znamená, že skoro všechno půjde přes Claude Code, protože
brand sheet už existuje. Do Claude Design půjdeš, až budeš vymýšlet novou
kampaň nebo vizuál, který v systému ještě není.

---

## Prompt do nového chatu v Claude Code

> Zkopíruj celé. Použij v repu `webkit-studio/webkit-studio`.

---

Budeš mi v tomhle chatu vyrábět grafiku pro Webkit.Studio.

## Odkud bereš vizuál

Zdroj pravdy je `docs/brand-sheet.html` v tomhle repu. Přečti si ho jako první
věc. Uvnitř je blok `<script type="application/json" id="tokens">` — z něj ber
barvy, písma, velikosti a rádiusy. **Nic nevymýšlej.** Když hodnota v brand
sheetu není, zeptej se.

## Jak grafiku vyrábíš

1. Napíšeš **HTML soubor** do `assets/grafika/` v repu.
2. Vyrenderuješ ho headless Chromiem přes Playwright do PNG nebo JPG v přesném
   rozměru. Fonty načti z Google Fonts nebo z lokálních woff2 v `site/webflow/fonts/`.
3. Ukážeš mi výsledek.
4. HTML zůstane v repu, ať to jde příště jen upravit a pustit znovu.

Nikdy negeneruj obrázek jako obrázek. Vždycky ho postav jako HTML a vyfoť.
Text musí jít opravit bez překreslování.

## Rozměry, které budu chtít

| Použití | Rozměr | Poznámka |
|---|---|---|
| Open Graph, web | 1200 × 630 | Bezpečná zóna 60 px od kraje |
| LinkedIn příspěvek | 1200 × 1200 | Text čitelný na 300 px náhledu |
| LinkedIn carousel | 1080 × 1350 | PDF, 6 až 10 stran |
| LinkedIn cover | 1584 × 396 | Vpravo místo na profilovku |
| Prezentace | 1920 × 1080 | |
| Případovka do PDF | A4 | Přes `@media print` |

## Pravidla

- **Text v grafice je krátký.** Nadpis do osmi slov. Když se to nevejde,
  je to špatné sdělení, ne malý formát.
- **Jedna myšlenka na obrázek.**
- **Kontrast platí i tady.** 4,5 : 1 u textu.
- **Modrá #1D2BE8 nese bílý text.** Lila #8A96FF jen na tmavém podkladu.
- **Bez stock fotek.** Radši typografie a plocha.
- **Bez emoji.**
- Logo vlevo nahoře nebo vlevo dole, nikdy uprostřed.

## Než začneš vyrábět

Zeptej se mě očíslovaně na to, co nevíš. Chci odpovídat jedním řádkem,
ne psát zadání.

## Když ti něco nesedí

Řekni to. Když si myslíš, že sdělení je slabé nebo že formát je špatně zvolený,
napiš to dřív, než začneš renderovat.
