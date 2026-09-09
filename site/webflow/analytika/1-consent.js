/* wkConsent — registrovaný skript, hlavička, na úrovni webu. Musí běžet
   jako první skript na stránce.

   Pořadí je tady celý vtip:
   1. dataLayer a gtag stub dřív, než cokoli jiného
   2. Consent Mode v2 na "odmítnuto" — od téhle chvíle žádný tag neuloží cookie
   3. Cloudflare beacon — neukládá nic do prohlížeče, souhlas nepotřebuje
   4. souhlas z minulé návštěvy (localStorage) PŘED načtením GTM,
      jinak by tagy zbytečně čekaly na wait_for_update
   5. teprve pak GTM

   GA4 ani Clarity tady nejsou. Oba běží jako tagy v GTM kontejneru
   GTM-MQW8FHWR, podmíněné analytics_storage. Kdyby byly na obou místech,
   měřilo by se všechno dvakrát. */
(function(){
var K='wk-consent';
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments)}
window.gtag=gtag;
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',functionality_storage:'granted',security_storage:'granted',wait_for_update:500});
gtag('js',new Date());
var b=document.createElement('script');b.defer=true;b.src='https://static.cloudflareinsights.com/beacon.min.js';
b.setAttribute('data-cf-beacon','{"token":"63f4e42712ab4802adc333753f2078a3"}');document.head.appendChild(b);
window.wkGrant=function(){gtag('consent','update',{ad_storage:'granted',ad_user_data:'granted',ad_personalization:'granted',analytics_storage:'granted'})};
try{if(localStorage.getItem(K)==='all')window.wkGrant()}catch(e){}
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;
j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f)})(window,document,'script','dataLayer','GTM-MQW8FHWR');
})();
