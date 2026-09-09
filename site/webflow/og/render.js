const { chromium } = require('playwright');
(async()=>{
 const b=await chromium.launch();
 const ctx=await b.newContext({viewport:{width:1200,height:630},deviceScaleFactor:1});
 const p=await ctx.newPage();
 const base='file://'+process.cwd()+'/og.html';
 // varianta 1 — homepage
 await p.goto(base,{waitUntil:'load'}); await p.waitForTimeout(600);
 await p.screenshot({path:'og-home.png'});
 // varianta 2 — klientská zóna
 await p.evaluate(()=>{
   document.body.className='klient';
   document.getElementById('h').innerHTML='Klientská<br>zóna';
   document.getElementById('s').textContent='Návrhy, připomínky a dokumenty k projektu na jednom místě.';
   document.getElementById('u').textContent='webkit.studio/client';
   document.getElementById('c').textContent='Připomínky přímo v návrhu';
 });
 await p.waitForTimeout(400);
 await p.screenshot({path:'og-client.png'});
 await b.close();
})();
