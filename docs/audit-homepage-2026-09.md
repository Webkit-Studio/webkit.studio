# Audit homepage webkit.studio

Měřeno 8. 9. 2026 na `webkit-studio.webflow.io`. Produkce v tu dobu ještě běžela
na holding page, takže terénní data neexistují — všechna čísla jsou laboratorní.

---

## TL;DR

Homepage je technicky v dobrém stavu: **desktop 99/100, mobil 89/100**, žádné
vodorovné přetečení na žádné šířce od 320 do 2560 px, nulové poskakování obsahu,
nula chyb v konzoli. Během auditu jsem opravil devět nálezů, včetně jedné chyby,
která shazovala všechna tlačítka na webu.

**Největší zbývající problém není technický.** Čtyři projekty bez jediné věty od
klienta. Web prodává důvěru a nemá ji čím podložit.

**Jedna věc, kterou musíš udělat ty:** ve Webflow odpojit Google Fonts.
Zabere to půl minuty a zvedne mobilní výkon z 82 na 89 bodů.

---

## Skóre

| | Mobil teď | Mobil po odpojení fontů | Desktop |
|---|---|---|---|
| Výkon | 82 | **89** | **99** |
| Přístupnost | 96 | **96** | **96** |
| Doporučené postupy | 77 | **96** | **96** |
| SEO | 100 | **100** | **100** |

| Metrika | Mobil | Desktop | Práh |
|---|---|---|---|
| LCP | 3,2 s | 0,9 s | ≤ 2,5 s |
| FCP | 1,9 s | 0,7 s | — |
| CLS | 0 | 0 | ≤ 0,1 |
| TBT | 90 ms | 0 ms | ≤ 200 ms |

**Váha stránky:** 266 kB v 15 požadavcích.
Písma 147 kB · skripty 73 kB · styly 19 kB · obrázky 14 kB · dokument 12 kB.

---

## Co jsem během auditu opravil

| # | Nález | Důkaz | Oprava |
|---|---|---|---|
| 1 | `.button` neměl `display`, takže odsazení a minimální výška se neuplatnily | Tlačítka měřila 17 px místo 44 px | `display: inline-flex` na základní třídu |
| 2 | Odkazy v menu měly klikací plochu 17 px | Lighthouse target-size | Minimální výška 44 px |
| 3 | Odkazy v patičce, kontaktu a týmu měly 22 px | Měření na devíti šířkách | Minimální výška 24 a 44 px |
| 4 | Odkaz na logo v hlavičce neměl čitelný název | axe link-name | `aria-label` |
| 5 | Popisky týdnů na zeleném bloku měly kontrast 3,7 : 1 | axe color-contrast | Průhlednost zpět na 1 |
| 6 | Nadpisy uvnitř interaktivní ukázky lezly do osnovy stránky | Osnova četla „Inovativní řešení pro vaše potřeby" jako nadpis webu | `h4` → `div` |
| 7 | Tlačítko volání v mobilní ukázce nemělo název | axe aria-command-name | `aria-label` |
| 8 | Rozbitá deklarace `transition` na tlačítkách | `border-color undefined undefined` ve vygenerovaném CSS | Přepsáno na zkrácený zápis |
| 9 | Chyběl odkaz „přeskočit na obsah" | Ruční průchod klávesnicí | Doplněn, `main` má id |

Navíc: doplněná strukturovaná data (`ProfessionalService` + `WebSite`), titulek
a popis stránky, popisky u všech čtyř obrázků projektů, optická velikost písma
na nadpisech.

---

## Písma: co jsem změnil a proč

Webflow při napojení na Google Fonts vkládá do hlavičky **webfont.js** —
skript, který blokuje vykreslení stránky a teprve pak si řekne o písma.
K tomu se připojují tři cizí domény: `fonts.googleapis.com`, `fonts.gstatic.com`
a `ajax.googleapis.com`.

Nahrál jsem proto tři písma přímo do Webflow jako vlastní:

| Písmo | Velikost | Osy |
|---|---|---|
| Bricolage Grotesque | 88 kB | opsz 12–96, wght 200–800 |
| Instrument Sans | 32 kB | wght 400–700 |
| IBM Plex Mono 400 a 500 | 2 × 15 kB | — |

Všechna oříznutá na latinku a rozšířenou latinku, tedy včetně české diakritiky,
ve formátu woff2 s `font-display: swap`. Dvě hlavní jsou předehraná přes `preload`.

Kromě rychlosti to řeší i jednu právní věc: při načítání z Google Fonts odchází
IP adresa návštěvníka Googlu. Německé soudy to už označily za problém a pro web,
který prodává firmám, je čistší mít písma u sebe.

**Zbývá jeden krok, na který nemám přístup přes API.** Ve Webflow jsou pořád
napojená stará Google písma, takže se teď načítají obě sady najednou.

> **Webflow → Site settings → Fonts → Google Fonts** → odeber Bricolage Grotesque,
> Instrument Sans a IBM Plex Mono. Vlastní nahraná písma zůstanou a mají stejné názvy,
> takže se v designeru nic nerozpadne.

Po tomhle kroku: výkon na mobilu 82 → 89, doporučené postupy 77 → 96.

---

## Opravit teď

### 1. Reference u projektů

Čtyři projekty, u každého popis, co jsme udělali. Ani jedna věta od klienta,
ani jedno číslo, které by potvrdil někdo jiný než ty.

Web stojí na tvrzení „vedu digitální projekty". Návštěvník má jediný způsob,
jak si to ověřit — reference. Bez nich je celá stránka slib.

**Co s tím:** napiš čtyřem klientům, popros o tři věty. Ne o „doporučení",
ale o odpověď na otázku: *co bylo předtím a co je teď?* Jednu použij u projektu,
jednu velkou dej pod sekci Tým.

**Odhad:** 4 e-maily, hodina práce, výsledek do týdne.

### 2. Tvoje fotka a IČO

V sekci Tým je šedý obdélník s nápisem „fotka Lukáše". V patičce stojí
„IČO doplníme". Obojí čte návštěvník jako nedodělaný web.

**Odhad:** 20 minut.

### 3. LCP na mobilu 3,2 s

Práh je 2,5 s. Hlavní brzda je stylopis Webflow: 117 kB nekomprimovaně,
19 kB po kompresi, a **73 % pravidel se na homepage vůbec nepoužije**.
Je to zbytek po starém designu a po knihovně Relume.

**Co s tím:** ve Webflow otevři Style Manager a spusť **Clean up unused styles**.
Odstraní jen třídy, které nejsou na žádném prvku. Než to spustíš, řekni mi to —
projdu, jestli tam nemám něco připraveného dopředu.

**Odhad:** 10 minut, čekaný zisk 200 až 400 ms na mobilu.

---

## Tenhle sprint

| Co | Proč | Čas |
|---|---|---|
| Nastavit jazyk webu na češtinu | `<html>` nemá `lang`, čtečky čtou český text anglickou výslovností | 2 min, Site settings → General |
| Dekorativní obrázky v kartách označit `aria-hidden="true"` | Blednoucí štítky mají kontrast 1,8 : 1, čtečka je čte jako obsah. API mi to odmítá zapsat, jde to jen z designeru | 5 min, 3 prvky |
| Open Graph obrázek | Odkaz sdílený na LinkedInu je teď bez náhledu | Mám v plánu |
| Napojit analytiku | Bez měření nepoznáš, co web dělá | Potřebuju od tebe ID |
| Vyčistit duplicitní proměnné | `Color Scheme 2/Accent-2`, `Color Scheme 3/Accent-2`, `Color Scheme 3/Border-2`, `Font Styles/Mono-2` — zbytky po timeoutech API | 10 min |
| Přejmenovat `footer_link-1` | Kolize se starou třídou, v Client-First systému to bude vadit | 10 min |

---

## Hlídat

- **jQuery 89 kB, z toho 66 kB nevyužitých.** Webflow ho vkládá vždy, nejde
  odstranit bez zásahů, které se při každém publikování ztratí. Ber jako daň platformy.
- **Kanonická adresa.** Webflow API odmítá zápis `<link>` do vlastního kódu stránky
  (HTTP 406, projde jen `<style>`). Po spuštění na doménu zkontroluju, jestli
  ji Webflow generuje samo.
- **Terénní data.** Až web poběží na doméně a nasbírá návštěvy, zkontroluj
  Search Console → Core Web Vitals. Laboratorní čísla z tohohle reportu jsou
  jen odhad.

---

## Jak jsem měřil

Chromium v tomhle prostředí neprojde přes proxy, takže Lighthouse nešlo pustit
proti živé adrese. Postavil jsem lokální kopii publikované stránky včetně všech
souborů a servíroval ji přes vlastní server s kompresí brotli, aby přenášené
velikosti odpovídaly tomu, co posílá Webflow CDN.

**Dvakrát jsem se přitom spálil a obě chyby stojí za zapsání:**

1. První verze zrcadlícího skriptu přepisovala adresy od nejkratší, takže kratší
   adresa přepsala začátek delší a stránka se načítala **bez hlavního stylopisu**.
   Čísla vypadala skvěle a byla nesmyslná. Poznal jsem to až podle toho, že se
   nepropsala oprava klikacích ploch.
2. Lokální server neuměl kompresi, takže Lighthouse počítal s nekomprimovanými
   117 kB CSS místo 19 kB. To zase čísla podstřelilo.

**Poučení do metodiky:** když měříš na kopii, ověř dvě věci dřív než cokoliv
jiného — že se načetl stylopis a že server komprimuje. Jinak měříš něco jiného,
než si myslíš.

Přístupnost: axe přes Lighthouse plus ruční průchod klávesnicí a měření klikacích
ploch na devíti šířkách (320, 360, 390, 428, 768, 1024, 1280, 1920, 2560 px).
