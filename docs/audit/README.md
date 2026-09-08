# Audit webu

Čtyři dokumenty, každý na jinou práci.

| Soubor | K čemu je | Rozsah |
|---|---|---|
| [metodika.md](metodika.md) | **Jak audit vést.** Vrstvy, postup, prioritizace, jak psát report, čemu se vyhnout. Tohle si přečti celé, jednou. | ~370 řádků |
| [kontrolni-seznam.md](kontrolni-seznam.md) | **Co ověřit.** 283 bodů v osmi oblastech. Referenční, nečte se odshora dolů. | 283 bodů |
| [prahy-a-nastroje.md](prahy-a-nastroje.md) | **Proti čemu to porovnat a čím to změřit.** Prahy se zdroji, nástroje, časté chyby, česká specifika. | 8 oblastí |
| [vzorovy-report.md](vzorovy-report.md) | **Jak vypadá hotový výstup.** Smyšlená firma, ale skutečná struktura, přesnost a tón. | ukázka |

## Jak to spolu drží

```
metodika.md          → jak postupovat a jak z nálezů udělat rozhodnutí
   ↓ pro každý bod
kontrolni-seznam.md  → otázka, jak ověřit, kdy prošel, věta pro klienta
   ↓ potřebuješ hranici
prahy-a-nastroje.md  → práh se zdrojem, nástroj, kde ten nástroj lže
   ↓ výstup
vzorovy-report.md    → do jaké podoby to poskládat
```

## Tři pravidla, která platí napříč

1. **Audit není seznam chyb, je to seřazený seznam rozhodnutí.** Report bez
   pořadí a bez korun je papír do šuplíku.
2. **Číslo klienta bije cizí procento.** Cizí statistika jen jako srovnání,
   vždy se zdrojem a datem ověření.
3. **Nález nikoho neobviňuje.** Popisuje stav, ne vinu. Kdo web postavil,
   není v reportu.

## Než to použiješ na placené zakázce

- Prahy jsou ověřené k **8. 9. 2026**. Google i ÚOOÚ je mění. Projdi zdroje znovu
  a metodiku revalidnuj jednou za půl roku.
- Aktivní testování (fingované poptávky, telefonáty, crawl, dotazy na citlivé
  adresy) dělej jen s písemným pověřením.
- Přístup do klientovy schránky poptávek a do nahrávek chování potřebuje
  zpracovatelskou smlouvu. Bez ní děláš přesně tu chybu, kterou auditujeme.
- Právní kvalifikaci nedělej. Popiš skutkový stav, odkaž na paragraf, šedou zónu
  označ jako otázku pro klientova právníka.
