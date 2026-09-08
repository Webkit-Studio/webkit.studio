# Case study: struktura, ne vzhled

TL;DR — jedna šablona, ne tři. Pevná páteř o šesti blocích, k tomu pět
volitelných, které se zapínají podle projektu. Každý blok má **strop na počet
znaků**; když na blok nemám podklad, blok se **nezobrazí** — nedopisuje se text.
Dvě CMS kolekce: `Projekty` a `Kroky`. Na konci je seznam, co ke které case
study graficky chybí.

---

## Proč jedna šablona a ne tři

Tři šablony znamenají tři místa, kde se opravuje jedna chyba. Vizuální rozdíl
mezi identitou a aplikací neudělá jiná šablona, ale **jiné zapnuté bloky
a jiná akcentová barva** — tu si každý projekt nese v CMS z identity klienta.
Zámečník tak vypadá jinak než arboristika, aniž by vznikly dvě šablony.

---

## Páteř — šest bloků, vždy

| # | Blok | Co v něm je | Strop |
| --- | --- | --- | --- |
| 1 | **Hlavička** | Klient · obor · rok · štítky · jedna věta | věta max 120 znaků |
| 2 | **Hlavní vizuál** | Jeden obrázek přes celou šířku, 2560 px | — |
| 3 | **Tři fakta** | Tři velká čísla nebo tři tvrdá fakta | popisek max 40 znaků |
| 4 | **Zadání a problém** | Co klient chtěl (1 věta) + co bylo špatně (1–3 odrážky) | celkem max 300 znaků |
| 5 | **Cesta** | 2–4 kroky, každý: nadpis + 1 věta + 1 obrázek | věta max 140 znaků |
| 6 | **Výsledek** | 1 věta + citace klienta, nebo 1 velké číslo | věta max 200, citace max 240 |

Za tím jde stejná výzva k akci jako na homepadě. Nic dalšího.

**Součet textu na celé stránce: pod 1 200 znaků.** To je zhruba půl normostrany.
Zbytek nese grafika.

### K bloku 3 — když čísla nejsou

Ne u každého projektu existuje měřitelný výsledek. Blok se ale nevypíná, jen se
plní jinak. Pořadí, čím se plní:

1. **Číslo z provozu** — poptávky, návštěvnost, čas.
2. **Tvrdé faktum o rozsahu** — 500 lidí, 120 výstupů, 18 let výroby.
3. **Faktum o dodávce** — 8 týdnů, 3 jazyky, 40 stránek.

Když nevyjde ani jedno ze tří, blok zmizí a jeho místo zabere citace klienta.
Nikdy se tam nedává „výrazné zlepšení" nebo podobná vata.

---

## Volitelné bloky — pět, zapínají se přepínačem

| Blok | Kdy zapnout | Co vyrobit |
| --- | --- | --- |
| **Před / po** | Když existuje starý stav a je čím se chlubit | 2 obrázky ve stejném ořezu |
| **Galerie** | Identita, tiskoviny, aplikace značky | 2–6 obrázků, mřížka |
| **Schéma** | Když se dá kreslit proces nebo tok dat | 1 SVG, ne screenshot |
| **Obrazovky** | Aplikace a portály | mobil + desktop v rámečku |
| **Video** | Průlet webem nebo aplikací | 10–20 s, bez zvuku, smyčka |

Pravidlo: **maximálně tři volitelné bloky na projekt.** Když jsou zapnuté
všechny, není to case study, ale galerie.

---

## CMS: dvě kolekce

Webflow má strop 30 polí na kolekci. Kroky proto nejsou pole v `Projekty`, ale
vlastní kolekce — jinak se do třiceti nevejde nic dalšího a počet kroků je
navždy zamčený na tři.

### Kolekce `Projekty` (21 polí)

**Identita projektu**
`Klient` (text) · `Obor` (text) · `Rok` (číslo) · `Typ projektu` (výběr: Web /
Vizuální identita / Webová aplikace / Portál) · `Štítky` (text) ·
`Perex na výpis` (text, 120) · `Odkaz na web` (odkaz)

**Vizuál**
`Hlavní obrázek` (obrázek) · `Barva akcentu` (barva) ·
`Galerie` (více obrázků) · `Schéma` (obrázek) · `Video` (odkaz)

**Obsah**
`Číslo 1` · `Popis 1` · `Číslo 2` · `Popis 2` · `Číslo 3` · `Popis 3` (texty) ·
`Zadání` (text, 200) · `Problémy` (víceřádkový text, 1–3 řádky) ·
`Výsledek` (text, 200) · `Citace` (text, 240) · `Kdo to řekl` (text)

**Před / po**
`Před` (obrázek) · `Po` (obrázek)

### Kolekce `Kroky` (5 polí)

`Nadpis` (text, 60) · `Věta` (text, 140) · `Obrázek` (obrázek) ·
`Projekt` (odkaz na `Projekty`) · `Pořadí` (číslo)

Na šabloně je seznam `Kroky` filtrovaný na aktuální projekt a řazený podle
`Pořadí`. Kroky tak můžou být dva u jednoho projektu a čtyři u druhého, aniž by
se sahalo do šablony.

---

## Co ke které case study chybí graficky

Tohle je zároveň výrobní seznam. Bez těch podkladů case study nevznikne — a to
je záměr, protože jinak z ní bude zase stránka plná textu.

### Elektro Drapač — web, Webflow, rozvoj

| Potřeba | Stav |
| --- | --- |
| Hlavní vizuál: web na displeji nebo výroba | **chybí** |
| Před / po: starý web vs nový | **chybí** — nejsilnější věc, kterou k tomuhle projektu máš |
| 3 čísla: poptávky, návštěvnost, podíl z Německa | **chybí data** — máš je v GA? |
| 3 kroky: analýza → návrh → spuštění a rozvoj | 3 screenshoty **chybí** |
| Citace klienta | **chybí** |

### Arbosis — vizuální identita a web

| Potřeba | Stav |
| --- | --- |
| Hlavní vizuál: logo na autě | pravděpodobně máš z focení |
| Galerie: auto, oblečení, faktura, web | **nejvíc grafiky ze všech projektů** |
| 3 fakta: počet aplikací identity, rok, rozsah | dá se složit bez dat od klienta |
| 3 kroky: značka → aplikace → web | máš z procesu |
| Citace klienta | **chybí** |

Tenhle projekt unese nejmíň textu ze všech — je celý o tom, jak to vypadá.

### Centrum pro regionální rozvoj ČR — sjednocení a portál

| Potřeba | Stav |
| --- | --- |
| 3 fakta: 500 lidí, 120 výstupů, + třetí | dvě z toho už na webu jsou |
| Schéma: jak funguje změnové řízení | **chybí** — SVG, ne screenshot |
| Obrazovky portálu | **chybí a bude potřeba anonymizovat** (státní správa) |
| 3 kroky: audit výstupů → sjednocení → portál | screenshoty **chybí** |

U státní správy počítej s tím, že screenshoty musí projít schválením, nebo je
budeš muset překreslit s vymyšlenými daty.

### Anse — webová aplikace

| Potřeba | Stav |
| --- | --- |
| Obrazovky: mobil v terénu + desktop | **chybí, a je to jádro** |
| Schéma: co nahradilo Google formuláře | **chybí** — před/po jako tok dat |
| 3 čísla: technici, formuláře, ušetřený čas | **chybí data** |
| Video: průlet aplikací, 15 s | volitelné, ale tady by prodalo nejvíc |

**Pozor: Anse je produkce.** Do screenshotů nesmí jít reálné zakázky ani jména
techniků. Buď testovací data, nebo retuš.

---

## Než to postavím, potřebuju od tebe

1. **Potvrzení struktury** — šest pevných bloků a pět volitelných, nebo něco
   ubrat či přidat.
2. **Dvě kolekce, nebo jedna?** Doporučuju dvě. Jedna znamená natvrdo tři kroky.
3. **Čísla ke každému projektu**, nebo aspoň informaci, u kterých žádná nebudou —
   pak se blok naplní fakty o rozsahu.
4. **Rozhodnutí u Anse a CRR**, co se smí ukázat.
