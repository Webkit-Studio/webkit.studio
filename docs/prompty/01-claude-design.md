# Prompt 1 — Design systém do Claude Design

> Přilož `docs/brand-sheet.html`. Běží 20–40 minut.
> Výstupem jsou šablony, ne obrázky.

---

Přikládám `brand-sheet.html`. Je to zdroj pravdy pro celý vizuální systém
Webkit.Studio. Uvnitř najdeš tokeny jako CSS proměnné a k tomu strojově čitelný
blok `<script type="application/json" id="tokens">` se stejnými hodnotami.

**Nic si nedomýšlej.** Když nějaká hodnota v brand sheetu není, zeptej se.
Nevymýšlej barvu, velikost ani rádius, který tam není.

## Co po tobě chci

Postav z toho **sadu šablon**, ne ukázky. Šablona je něco, do čeho příště jen
doplním obsah.

### 1. Nabídka

Formát A4, na výšku. Struktura:

1. Titulní strana — logo, název projektu, jméno klienta, datum, platnost nabídky
2. Čemu rozumím — dvě až tři věty o zadání klienta jeho slovy
3. Co navrhuju — rozsah rozdělený do fází, u každé jedna věta
4. Harmonogram — osa týdnů, stejná mechanika jako sekce Postup na webu
5. Cena — rozpad podle fází, celková částka, co v ceně není
6. Jak potvrdit — jeden jasný krok

Poslední strana **končí cenou a termínem**, ne seznamem služeb.

### 2. Faktura

Podle ukázky v brand sheetu, sekce 05. Musí zvládnout položkovou i paušální
fakturaci a nechat místo na poznámku „nejsem plátce DPH".

### 3. Prezentace

16 : 9. Připrav tyhle typy snímků:

- titulní (tmavé schéma)
- oddělovací s číslem kapitoly (tmavé schéma)
- nadpis a text (bílé schéma)
- dva a tři sloupce
- celostránkový obrázek s popiskem
- tabulka
- srovnání před a po
- závěrečný s výzvou (modré schéma)

### 4. Zápis ze schůzky

Jedna strana. Datum, účastníci, o čem jsme rozhodli, co kdo do kdy udělá,
co zůstalo otevřené. Úkoly musí být vidět na první pohled.

### 5. Brief

Formulář, který dostane klient před první schůzkou. Otázky, ne políčka:
co má projekt udělat, pro koho, do kdy, podle čeho poznáme, že se povedlo,
co se nesmí stát.

## Pravidla, která platí pro všechno

- **Papír je bílý.** Šedomodrá #ECEFF3 se na papíře používá jen jako podbarvení
  tabulky, nikdy jako podklad celé strany.
- **Akcent střídmě.** Modrá je v hlavičce a u celkové částky. V tabulkách ne.
- **Jedna silná linka na dokument.** Ta nad součtem.
- **Bez dekorace.** Žádné vodoznaky, rámečky, ozdobné čáry ani ikonky u odrážek.
  Dokument drží pohromadě typografie a bílé místo.
- **Číslo strany** dole vpravo, IBM Plex Mono 8 pt.
- **Přístupnost platí i na papíře.** Kontrast textu 4,5 : 1.

## Co mi odevzdáš

1. Každou šablonu jako **samostatný HTML soubor**, který se dá vytisknout do PDF
   přes `@media print`. Ne jako obrázek.
2. Jeden společný soubor `webkit-doc.css` s tokeny a základními styly,
   který všechny šablony načítají. Když změním token, změní se všechno.
3. Krátký soubor `README.md`: který soubor je co, jak z něj udělat PDF,
   co doplnit před odesláním.
4. **Seznam míst, kde jsi si nebyl jistý** a co jsi tam prozatím dal.

## Čeho se drž

Vezmi si z brand sheetu i **sekci 06 — Hlas**. Vzorové texty v šablonách musí
znít stejně jako web. Žádná „inovativní řešení", žádný korporátní tón.
Konkrétní číslo místo přídavného jména.
