# Před spuštěním: co je hotové a co chybí

Měřeno na produkci 9. 9. 2026, ne odhadem.

TL;DR — **technicky je web připravený**. Standardy sedí, měření běží, nic
nepadá. Co chybí, je obsah: **hero neřekne, co prodáváš**, na stránce **není
vidět člověk**, **není tam cena ani dostupnost** a **žádná reference**. To jsou
čtyři důvody, proč někdo z LinkedInu odejde — a ani jeden se nespraví kódem.

---

## Co je hotové a ověřené

| Oblast | Stav |
| --- | --- |
| HTTPS, HSTS, `http` i `www` → 301 na apex | ✅ |
| `robots.txt`, `sitemap.xml`, 404 vrací 404 | ✅ |
| `webkit-studio.webflow.io` má `Disallow: /` | ✅ |
| `/client` má `noindex, nofollow` | ✅ |
| Title 66 zn., description 149 zn., `lang="cs"` | ✅ |
| Canonical a `og:url` na obou veřejných stránkách | ✅ (doplněno) |
| OG obrázek 1200 × 630, `twitter:card` | ✅ |
| JSON-LD (`ProfessionalService`) | ✅ |
| Jeden `<h1>`, hierarchie nadpisů bez děr | ✅ |
| Alt texty u projektových obrázků | ✅ |
| Kontrast textů 4,66 – 18,47 : 1 (AA je 4,5) | ✅ |
| `font-display: swap` na všech fontech | ✅ |
| Skip link, favicon | ✅ |
| Žádná chyba v konzoli | ✅ |
| GTM kontejner v2: GA4 + Clarity + 3 spouštěče | ✅ |
| Před souhlasem 0 cookies, Consent Mode v2 | ✅ |
| Animace v Službách se sama zastaví (WCAG 2.2.2) | ✅ |

---

## Přijde z LinkedInu, na mobilu. Kdy odejde?

Seřazeno podle toho, jak brzo a jak často.

### 1. Do tří sekund neví, co si u tebe koupí

První obrazovka říká **„Ptáme se. Navrhujeme. Stavíme."** a pod tím odstavec,
který končí **„Vlastně cokoliv, co je potřeba."**

Návštěvník ví, že někdo dělá *něco* s projekty. Neví, jestli weby, značku, nebo
poradenství. Neví, jestli pro firmy jeho velikosti. „Vlastně cokoliv" navíc ruší
hranici, kterou tři věty předtím postavily — a nabídka bez hranice se čte jako
nabídka bez zkušenosti.

**Tohle je zdaleka největší důvod k odchodu.** Všechno ostatní je proti tomu
kosmetika.

### 2. Není vidět člověk

Na celé stránce není tvoje fotka ani jméno — až v patičce e-mail. Sekce Tým
s tvojí fotkou, jménem a rolí **je postavená, ale schovaná** (`display:none`).

U jednoho člověka na IČO je „kdo to je" druhá otázka po „co to je". Lidé
z LinkedInu přicházejí od profilu s obličejem a přistanou na webu bez obličeje.

### 3. Web si protiřečí v číslech

V heru **„5 let pod značkou Webkit.Studio"**, v patičce **„2022 → dnes"**. Podle
ARES je IČO zapsané 14. 12. 2022 — to jsou 3 roky a 9 měsíců. Kdo si toho
všimne, přestane věřit i ostatním číslům na stránce.

### 4. Není cena ani dostupnost

Nikde není ani řádové rozpětí, ani „beru zakázky od…". Návštěvník, který má
rozpočet, neví, jestli je ve hře. Návštěvník, který ho nemá, ti stejně napíše.
Bez čísla filtruješ špatným směrem.

### 5. Nikdo o tobě nic neřekl

Nula referencí, nula citací klienta. Čtyři projekty mají jednu větu a obrázek,
ale ani u jednoho nemluví klient.

### 6. Deset obrazovek bez odbočky

Stránka má na mobilu 8 780 px, tedy **10,3 obrazovky**. Kdo chce jen zjistit,
co děláš a kolik to stojí, musí projet všechno. Chybí zkratka nahoře.

---

## Technické drobnosti, které jsem naměřil

Nic z toho nezpůsobí odchod. Ale stojí za opravu, než přijde provoz.

| Věc | Číslo | Poznámka |
| --- | --- | --- |
| Váha první návštěvy | **1 048 kB** v 19 souborech | bez projektových obrázků |
| Z toho GTM | **374 kB** | načítá se hned, ještě před souhlasem |
| Webflow CSS + JS + jQuery | 353 kB | z toho jQuery 87 kB |
| Fonty | 148 kB | Bricolage variable sám 86 kB |
| Projektové obrázky | 4 × 121 kB | srcset 500/800/1080/1600 je v pořádku |
| Dotykové cíle v patičce | 19 px | WCAG 2.2 chce 24 px |
| Rychlý kontakt (e-mail, telefon) | 25 px | projde, ale na palec je to málo |
| Sitemap | 2 adresy | homepage a osobní údaje |

**Oprava mého dřívějšího tvrzení:** psal jsem, že projektové obrázky mají
jedinou variantu v srcsetu. Nemají — Webflow jich generuje pět
(500/800/1080/1600 a originál). Strop je 1600 px, takže na retina displeji přes
celou šířku pořád chybí rozlišení, ale problém je menší, než jsem řekl.

---

## Co jde spustit hned a co ne

**Spustit se dá teď.** Nic z výše uvedeného není blokující v tom smyslu, že by
web nefungoval nebo klamal. Ale kdybys dnes poslal odkaz z LinkedInu tisíci
lidem, propálíš první dojem na verzi, která neřekne, co prodáváš.

**Pořadí, jak bych to řešil:**

1. **Hero.** Bez toho nemá smysl posílat provoz. Čeká na jednu tvou větu.
2. **Odkrýt sekci s tvojí fotkou.** Hotová, stačí zapnout a doladit nadpis.
3. **Srovnat „5 let" a „2022".** Jednoslovná změna, ale musíš říct, která
   je správně.
4. **Jedna reference.** Stačí jedna věta od Drapače nebo Arbosisu.
5. **Case studies.** Struktura je navržená, čeká na potvrzení.
6. **Cena nebo rozpětí.** Rozhodnutí, ne úkol.

---

## Před samotným spuštěním kampaně

- **Search Console** — ověřit doménu, odeslat sitemapu. Do toho nevidím.
- **GA4** — zkontrolovat, že chodí `page_view`, `generate_lead` a `cta_click`.
- **Zkušební poptávka** — odeslat formulář a ověřit, že e-mail dorazí a je
  čitelný. Šablony jsou v `docs/formular/`.
- **UTM** — odkazy z LinkedInu tagovat, jinak se provoz slije do „direct".
  Canonical je doplněný, takže UTM adresy se nezaindexují zvlášť.
