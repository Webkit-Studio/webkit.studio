# Poptávkový formulář: co nastavit ve Webflow

Formulář na homepage se jmenuje **Email Form** (`#email-form`) a sbírá čtyři
pole. Názvy polí přepisuje skript `wkFormsNames` až v prohlížeči, protože
Designer je do publikovaného HTML nepropíše — v Webflow Designeru proto pole
pořád vypadají jako „Field" a „Field 2". Nevadí to, do e‑mailu i do Webflow
Form submissions dorazí správné názvy.

| Pořadí | Popisek v Designeru | Název, který dorazí | Povinné |
| --- | --- | --- | --- |
| 1 | Co řešíte | `Co řešíte` | ano |
| 2 | Jméno | `Jméno` | ano |
| 3 | E-mail | `E-mail` | ano |
| 4 | Firma | `Firma` | ano |

---

## 1. Nastavení formuláře (panel Settings → Form Settings)

**Name**
```
Poptávka z homepage
```

**Action** — nechat prázdné (Webflow si formulář zpracuje sám).

**Method** — `GET` (výchozí, Webflow ho stejně přepíše).

---

## 2. Hlášky pod formulářem

Tyhle texty už na webu jsou, jsou tu pro jistotu ke kontrole.

**Success message**
```
Odesláno. Děkujeme.
Ozveme se do jednoho pracovního dne. Když to spěchá, rovnou si vyberte termín.
```
Tlačítko pod hláškou: **Rezervovat úvodní hovor** →
`https://calendar.app.google/emBd2FDj5xsx6edo7`

**Error message**
```
Odeslání se nepovedlo. Zkuste to znovu, nebo napište na inbox@webkit.studio.
```

**Text pod tlačítkem (souhlas)**
```
Odesláním souhlasíte se zpracováním osobních údajů. Použijeme je jen k odpovědi na vaši poptávku.
```
Odkaz vede na `/osobni-udaje`.

---

## 3. Notifikace (Site settings → Forms → Form notifications)

Tady je strop toho, co Webflow umí: **vlastní HTML šablonu do notifikace
nasadit nejde.** Nastavitelné je jen komu to přijde, předmět a odpověď.
Hezký e‑mail proto posílá Make.com — viz `make-scenar.md`.

**Send form submissions to**
```
inbox@webkit.studio
```

**Subject**
```
Nová poptávka z webu — {{Firma}}
```
Pokud Webflow proměnnou v předmětu neuloží (mění to mezi verzemi), dej:
```
Nová poptávka z webkit.studio
```

**Reply-to** — pole `E-mail`, ať se dá odpovědět rovnou z inboxu.

---

## 4. Co se pošle dál

Ke každé poptávce Make.com přiloží:

- čtyři pole z formuláře,
- čas odeslání (Europe/Prague),
- adresu stránky, ze které se odeslalo,
- UTM parametry, pokud v adrese byly.

Šablony e‑mailů: `email-poptavka.html` (tobě) a `email-potvrzeni.html`
(člověku, který poptávku poslal).
