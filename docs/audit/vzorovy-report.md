# Vzorový report z auditu webu

> **Toto je ukázka, ne skutečný audit.** Firma KOVOSPOJ Vysočina s.r.o., její web, čísla, měření i výsledky jsou smyšlené. Slouží k tomu, aby bylo vidět, jak vypadá hotový report — v jakém rozsahu, s jakou přesností a v jakém tónu. Žádné číslo v tomto dokumentu nepopisuje reálnou firmu.
>
> **Kódy nálezů v ukázce jsou ilustrativní.** Ve skutečném reportu se berou z [kontrolniho seznamu](kontrolni-seznam.md), kde jsou unikátní napříč všemi oblastmi (`TECH`, `RYCH`, `PRIS`, `SEO`, `SDEL`, `KONV`, `MER`, `PROV`). Ten samý kód musí v reportu, v zápisu i při retestu znamenat ten samý bod.

**Klient:** KOVOSPOJ Vysočina s.r.o. — výroba ocelových hal, schodišť a atypických konstrukcí, 45 zaměstnanců, Jihlava
**Web:** kovospoj-vysocina.cz, WordPress, spuštěn 2019
**Audit proveden:** 1.–8. 9. 2026 · **Zadavatel:** Ing. Pavel Doubrava, jednatel
**Vstupní rozhovor (ZAD-01):** 27. 8. 2026 · **Pověření k aktivnímu testování podepsáno:** 26. 8. 2026

---

## 1. Shrnutí

**Závěr:** Web přivádí poptávky, ale část z nich cestou ztrácí — nejdřív technicky (formulář neodešle přílohu), pak provozně (na část poptávek nikdo neodpoví). Obsah ani vzhled nejsou hlavní problém. První čtyři opravy zaberou zhruba 18 hodin a týkají se 360 000 až 720 000 Kč hrubé marže ročně.

**Tři čísla, na kterých report stojí:**

- **10 200 Kč** — hodnota jedné poptávky v hrubé marži. Váš údaj ze vstupního rozhovoru: ze šesti poptávek vznikne jedna zakázka, průměrná zakázka 340 000 Kč, hrubá marže 18 %.
- **14 poptávek měsíčně** — průměr z vaší schránky za 90 dní (41 odeslaných formulářů, období 1. 6. – 29. 8. 2026).
- **46 % návštěv z mobilu** — GA4, 1.–31. 8. 2026, celkem 2 140 návštěv.

**Nálezy podle priority:**

| Kód | Nález | Roční dopad | Oprava | Vlna |
|---|---|---|---|---|
| POP-03 | Formulář neodešle poptávku s přílohou nad 2 MB | 240 000 – 480 000 Kč | 2 h | 1 |
| POP-01 | Část poptávek zůstane bez odpovědi | strop 560 000 Kč (není odhad) | 2 h, bez programátora | 1 |
| VYK-02 | Úvodní stránka na mobilu se načítá 6,1 s | 120 000 – 240 000 Kč | 8 h | 1 |
| MER-01 | Odeslané poptávky se neměří | nevyčíslitelné, blokuje retest | 6 h | 1 |
| PRI-04 | Web na telefonu nejde zvětšit prsty | nevyčíslujeme | 10 min, návod níže, 0 Kč | 1 |
| PRA-01 | Měřicí kód se spouští před souhlasem | nevyčíslujeme | 3 h | 2 |
| IDX-04 | V indexu je 1 340 adres, skutečných stránek je 62 | nevyčíslujeme | 4 h | 2 |
| BEZ-03 | Web běží na PHP 7.4 bez oficiální podpory | nevyčíslujeme | 2 h + hosting | 2 |
| OBS-02 | Reference neuvádějí, co se stavělo a za jak dlouho | hypotéza, viz nález | 34 h | 3 |

**Co udělat teď:** projít na prezentaci vlnu 1 a rozhodnout o ní. Zbytek počká.

**Poznámka k tónu:** report popisuje stav webu, ne čí je to chyba. Kdo web stavěl a kdo ho spravuje, v něm nefiguruje.

---

## 2. Rozsah a čím se report neřídil

**Netýká se vás** (body vypuštěné, nehodnotí se): průchod košíkem a platební brána (nemáte e-shop), hreflang a jazykové mutace (web je jen česky), recenze na produktových stránkách, rezervační systém, personalizace obsahu.

**Nešlo změřit:** nedodali jste přístup do Skliku, takže šest bodů o placené návštěvnosti zůstalo bez verdiktu — nenahrazujeme je odhadem. Nahrávky chování (Clarity) běží od 18. 8. 2026, tedy tři týdny; u nálezu VYK-02 je to poznamenáno jako slabší opora.

**Referenční prostředí měření:** Samsung Galaxy A54 / Android 14 / Chrome 149 a iPhone 13 / iOS 26.2 / Safari; desktop MacBook Air M2, Chrome 149; simulace 4G, lokalita Jihlava. Stav souhlasu je uveden u každého čísla. Laboratorní metriky měřeny 5×, uvádí se medián.

---

## 3. Nálezy

### POP-03 — Formulář neodešle poptávku s přílohou nad 2 MB

**Co je špatně.** Poptávkový formulář má limit přílohy 2 MB. Zákazník, který přiloží výkres nebo fotku konstrukce z telefonu, dostane bílou stránku bez chybové hlášky a vyplněný text se ztratí. Formulář ani nikde neuvádí, že limit existuje.

**Jak to bylo zjištěno.** Odeslali jsme šest testovacích poptávek (s pověřením, 2. 9. 2026): dvě bez přílohy — obě dorazily; čtyři s přílohou 3–8 MB — nedorazila žádná, ve všech případech skončilo odeslání bílou stránkou. V logu serveru je za 90 dní 34 přerušených odeslání tohoto typu. Z logu nejde poznat, kolik lidí to zkusilo znovu s menším souborem.

**Co to stojí.** Odhadujeme 2 až 4 ztracené poptávky měsíčně, tedy **240 000 až 480 000 Kč hrubé marže ročně**. Jistota odhadu střední — dolní hranice počítá s tím, že většina lidí to zkusí znovu. Výkres v příloze je přitom u vašich zakázek běžný: ve schránce ho má 23 ze 41 poptávek za sledované období.

**Co s tím.** Zvednout limit na 20 MB, doplnit viditelnou informaci o limitu a povolených formátech, a hlavně zobrazit chybu místo bílé stránky. Práce na 2 hodiny pro správce webu. Hotovo poznáte tím, že testovací poptávka s 8MB PDF dorazí do schránky a s 30MB souborem se objeví srozumitelná hláška.

---

### POP-01 — Část poptávek zůstane bez odpovědi

**Co je špatně.** Poptávka přijde do sdílené schránky, kterou nikdo nemá přiřazenou. Když je obchodník na stavbě, poptávka tam leží.

**Jak to bylo zjištěno.** Poslali jsme tři poptávky z různých adres (s pověřením, 2. a 3. 9. 2026). Na první přišla odpověď za **19 hodin**, na druhou za **44 hodin**, na třetí nepřišla do pěti pracovních dnů žádná. Vzorek tří pokusů je malý — nedělá z toho pravidlo, ukazuje jen, že se to stává.

**Co to stojí.** Přesnou ztrátu nevyčíslujeme, jistota je nízká. Uvádíme strop: kdyby zůstala bez odpovědi třetina poptávek, je to **560 000 Kč ročně** — to je horní mez, ne odhad. Ověření navrhujeme takto: označkovat ve schránce 30 dnů příchozích poptávek a spočítat, kolik z nich dostalo odpověď do 24 hodin. Tři hodiny práce, spolehlivější než jakýkoli odhad z reportu.

**Co s tím.** Přeposílat poptávky na dva jmenované lidi včetně SMS, zavést pravidlo „odpověď do 4 pracovních hodin, i kdyby jen potvrzení příjmu", jednou týdně kontrolovat schránku proti seznamu odpovědí. Rozhodnutí je na majiteli, práce na webu je nulová — tenhle nález neceníme.

---

### VYK-02 — Úvodní stránka se na mobilu načítá 6,1 sekundy

**Co je špatně.** Fotka haly v hlavičce má 4,2 MB a načítá se v plném rozlišení i na telefonu. Karusel pod ní stahuje dalších pět snímků, které návštěvník většinou nikdy neuvidí.

**Jak to bylo zjištěno.** Pět měření na Galaxy A54, simulace 4G, po přijetí cookies. Medián LCP **6,1 s**, rozptyl 5,4–6,8 s. Na desktopu 1,9 s. Terénní data z Search Console za posledních 28 dní řadí mobilní LCP do pásma „potřebuje zlepšit". V GA4 odchází z úvodní stránky bez další akce 68 % mobilních návštěv proti 41 % na desktopu — souvislost s rychlostí je pravděpodobná, ne prokázaná.

**Co to stojí.** Odhad 1 až 2 poptávky měsíčně, tedy **120 000 až 240 000 Kč ročně**. Jistota nízká až střední — část rozdílu mezi mobilem a desktopem jde na vrub tomu, že se lidé na telefonu chovají jinak.

**Co s tím.** Zmenšit hlavní fotku, doplnit responzivní varianty, karusel načítat až při odrolování. Práce na 8 hodin. Hotovo poznáte tím, že opakované měření na stejném telefonu ukáže medián LCP pod 2,5 s.

---

### MER-01 — Odeslané poptávky se v analytice neobjeví

**Co je špatně.** GA4 měří jen zobrazení stránek. Odeslání formuláře, kliknutí na telefon a stažení katalogu se nezaznamenávají. Nedá se říct, odkud poptávky chodí, ani jestli se po opravách něco zlepšilo.

**Jak to bylo zjištěno.** Kontrola konfigurace GA4 (5. 9. 2026): žádná konverzní událost, žádný cíl. Sedm testovacích odeslání se v přehledu událostí neobjevilo.

**Co to stojí.** Nevyčíslujeme — sám o sobě to není nález, který by bral peníze. Bere ale možnost ověřit ostatní nálezy: bez baseline se retest nedá porovnat a o dalších investicích do webu se rozhoduje odhadem.

**Co s tím.** Nastavit tři události (odeslání formuláře, klik na telefon, stažení katalogu), zapsat výchozí hodnoty jako baseline a přiložit je k reportu. Práce na 6 hodin pro analytika. Dělá se jako první z vlny 1 — jinak není proti čemu měřit.

---

### PRI-04 — Web na telefonu nejde zvětšit prsty

**Co je špatně.** Šablona zakazuje přiblížení stránky. V hlavičce je `user-scalable=no, maximum-scale=1.0`, takže text nejde roztáhnout dvěma prsty. Ověřeno na obou telefonech 4. 9. 2026.

**Jak si to ověříte sami.** Vezměte telefon a zkuste na webu roztáhnout text dvěma prsty. Nepůjde to.

**Co to stojí.** Kdo hůř vidí, váš web na telefonu nepřečte a odejde. Mobil u vás dělá 46 % návštěv. Zároveň je to porušení normy, na kterou odkazuje zákon č. 424/2023 Sb. — jestli pod něj vaše firma spadá, neposuzujeme, to je otázka na vašeho právníka. Přesnou ztrátu nevyčíslíme, jistota odhadu je nízká. Vyčíslitelný je náklad opravy: je téměř nulový.

**Co s tím.** V souboru `header.php` smazat z řádku s `viewport` části `user-scalable=no` a `maximum-scale=1.0`. Práce na 10 minut pro správce webu, tenhle nález neceníme. Hotovo poznáte tím, že jde stránka na telefonu roztáhnout.

---

### PRA-01 — Měřicí kód se spouští před souhlasem

**Co je špatně.** GA4 a pixel sociální sítě se načtou hned při otevření stránky, tedy dřív, než návštěvník klikne na cookie lištu. Lišta má tlačítko „Přijmout" a odkaz „Nastavení", odmítnout jedním kliknutím nejde.

**Jak to bylo zjištěno.** Záznam síťové komunikace při prvním otevření webu v čistém prohlížeči (4. 9. 2026, před jakoukoli interakcí s lištou): požadavky na měřicí služby odešly do 0,9 s. Opakováno 3× se stejným výsledkem.

**Co to stojí.** Popisujeme skutkový stav, právní kvalifikaci ani výši případné sankce neuvádíme — patří vašemu právníkovi. Druhý dopad je měřicí: čísla v GA4 zahrnují i návštěvníky, kteří souhlas nikdy nedali, takže nesedí ani vám.

**Co s tím.** Přepnout na režim, kdy se měřicí kódy načtou až po souhlasu, a doplnit rovnocenné tlačítko „Odmítnout". Práce na 3 hodiny. Právní posudek lišty neděláme — doporučujeme advokáta se specializací na ochranu osobních údajů.

---

### IDX-04 — V indexu je 1 340 adres, skutečných stránek je 62

**Co je špatně.** Vyhledávání na webu vyrábí adresy typu `/?s=…`, které se dostávají do indexu. Neexistující adresy navíc vracejí stavový kód 200 místo 404, takže se „stránkou" stane cokoli.

**Jak to bylo zjištěno.** Test IDX-10 jako první krok auditu (1. 9. 2026): adresa `/neexistujici-stranka-test-0901` vrátila kód 200. Crawl 1. 9. 2026 (Screaming Frog, licencovaně): 62 skutečných stránek. Search Console k 5. 9. 2026: 1 340 indexovaných adres.

**Co to stojí.** Nevyčíslujeme — přímou ztrátu poptávek z toho odvodit nelze. Praktický dopad: ve výsledcích vyhledávání se objevují prázdné stránky s vaším jménem a přehledy v Search Console se nedají použít k rozhodování.

**Co s tím.** Vrátit korektní 404, vyloučit výsledky vyhledávání z indexace, srovnat sitemapu se skutečným seznamem stránek. Práce na 4 hodiny. Hotovo poznáte za 4 až 6 týdnů — Google potvrzuje změny s odstupem, dřív se to nedá vyhodnotit.

---

### BEZ-03 — Web běží na PHP 7.4

**Co je špatně.** Server běží na PHP 7.4. Oficiální podpora této verze skončila 28. 11. 2022 (zdroj: php.net, ověřeno 5. 9. 2026), bezpečnostní opravy se pro ni nevydávají.

**Jak to bylo zjištěno.** Hlavička odpovědi serveru a informace v administraci WordPressu, 1. 9. 2026. Aktivní bezpečnostní testy nad rámec pověření jsme nedělali; tohle je zjištění o verzi, ne o konkrétní zranitelnosti.

**Co to stojí.** Nevyčíslujeme — pravděpodobnost incidentu neodhadujeme, na to nemáme data. Uvádíme jako stav, který se má srovnat dřív, než se do webu investuje cokoli dalšího.

**Co s tím.** Na testovací kopii přepnout na aktuálně podporovanou verzi PHP, projít chybové výpisy, pak přepnout ostrý web. Práce na 2 hodiny plus úkon na straně hostingu.

---

### OBS-02 — Reference neuvádějí, co se stavělo a za jak dlouho

**Co je špatně.** Stránka Reference obsahuje 14 fotek bez popisu. Není u nich rozpětí haly, tonáž, termín ani lokalita. Stránky služeb popisují firmu („moderní strojový park", „tradice od roku 1998"), ne zakázku, kterou zákazník řeší.

**Jak to bylo zjištěno.** Obsahová analýza 12 stránek (3. 9. 2026). Ve vstupním rozhovoru jste jako hlavní zákazníky označili investory zemědělských a skladových hal do 1 200 m². V Search Console jsou nejčastější dotazy s vaším webem tvarem „ocelová hala cena za m2" a „montovaná hala 500 m2" — na žádnou z nich web neodpovídá číslem.

**Co to stojí.** **Hypotéza.** Věříme, že reference s parametry zvyšují podíl poptávek, které mají zadání a rozpočet — ale na tomto webu to nemáme čím doložit a při 2 140 návštěvách měsíčně nejde spolehlivě otestovat A/B. Ověření navrhujeme takto: po doplnění šesti referencí sledovat tři měsíce podíl poptávek s uvedeným rozměrem a termínem a porovnat s dnešním stavem (dnes 9 ze 41).

**Co s tím.** Šest referencí s parametry: rozměr, tonáž, doba montáže, kraj, jedna věta o tom, co bylo netypické. Podklady dodáte vy, sepsání je 12 hodin. Fotografie neděláme — na haly doporučujeme fotografa se zkušeností s architekturou, orientačně 1 den práce.

---

## 4. Plán oprav

Tabulka je plán, ne ceník. Nabídka je samostatný dokument a přijde po prezentaci.

| Vlna | Nálezy | Hodiny | Role |
|---|---|---|---|
| **1 — do 14 dnů** | MER-01, POP-03, PRI-04, VYK-02, POP-01 | 18 h | analytik 6 h, správce webu 10 h, majitel 2 h (rozhodnutí a pravidlo pro schránku) |
| **2 — do 8 týdnů** | PRA-01, IDX-04, BEZ-03 | 9 h | správce webu 9 h, hosting (úkon), právník klienta (posudek lišty, mimo audit) |
| **3 — Q1 2027** | OBS-02 a texty služeb | 34 h | copywriter 18 h, obchodník klienta 8 h, fotograf externě |

**Pořadí uvnitř vlny 1:** MER-01 první (jinak není proti čemu měřit), pak POP-03, PRI-04, VYK-02. POP-01 běží souběžně a nezávisle na webu.

**Co neceníme:** PRI-04 zvládne váš správce podle návodu v nálezu, účtujeme nulu. POP-01 je organizační rozhodnutí, ne práce na webu.

**Retest:** 3 hodiny, **7 500 Kč bez DPH**, cena platí do 31. 3. 2027. Měří se baseline z MER-01, LCP na referenčním telefonu a průchodnost formuláře s přílohou. Nejdřív 6 týdnů po dokončení vlny 1.

**Zadání pro cizího dodavatele.** Každý nález je napsaný tak, aby podle něj pracoval kdokoli. Audit jste si zaplatili — opravy můžete zadat komukoli, včetně naší konkurence, a report vám k tomu stačí.

---

## 5. Další krok

**Prezentace, 90 minut, s majitelem.** Navrhované termíny: 15. 9. dopoledne nebo 17. 9. odpoledne, u vás ve firmě. Projdeme vlnu 1 položku po položce a vy u každé rozhodnete „ano / odložit / nedělat". Ze schůzky vznikne zápis s tím, co jste vybrali.

**Do tří dnů po prezentaci** dostanete nabídku na vlnu 1 pevnou cenou a s termínem. Vlny 2 a 3 se necení dopředu.

**Co si připravit:** přístup do Skliku (doplní šest nehodnocených bodů), jméno člověka, který ponese odpovědnost za schránku poptávek, a rozhodnutí, jestli chcete reference psát vlastními silami, nebo je zadat.