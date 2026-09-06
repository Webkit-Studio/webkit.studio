(function(){
document.documentElement.classList.add('js');
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches, rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
// header
const hdr=$('#top'); addEventListener('scroll',()=>hdr.classList.toggle('s',scrollY>8),{passive:true});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
$$('.rv, .ph').forEach(el=>io.observe(el));
// cursor + hero weight + magnetic
let mx=-9999,my=-9999; const cur=$('#cur'); const words=$$('#q .w'); const mags=$$('[data-mag]');
if(fine){ addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY; cur.classList.add('on');},{passive:true}); document.addEventListener('mouseleave',()=>cur.classList.remove('on'));
 document.addEventListener('pointerover',e=>{ if(e.target.closest('a,button,.sw')) cur.classList.add('big'); }); document.addEventListener('pointerout',e=>{ if(e.target.closest('a,button,.sw')) cur.classList.remove('big'); }); }
let heroVisible=true; new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;}).observe($('#q'));
function loop(){
  if(fine){ cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
    if(heroVisible) words.forEach(w=>{ const r=w.getBoundingClientRect(); const d=Math.hypot(mx-(r.left+r.width/2),my-(r.top+r.height/2)); const k=Math.max(0,1-d/380); w.style.fontVariationSettings=`"opsz" 96,"wdth" ${(100-k*20).toFixed(1)},"wght" ${(300+k*500).toFixed(0)}`; w.style.color=k>.55?'#1D2BE8':''; });
    mags.forEach(m=>{ const r=m.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return; const cx=r.left+r.width/2, cy=r.top+r.height/2; const dx=mx-cx, dy=my-cy; const d=Math.hypot(dx,dy); const pull=d<120?(1-d/120):0; m.style.transform=pull?`translate(${dx*pull*.25}px,${dy*pull*.25}px)`:''; });
  }
  requestAnimationFrame(loop);
}
if(!rm) requestAnimationFrame(loop);
// demo
const fixes={h:false,c:false,t:false};
$$('.sw').forEach(s=>s.addEventListener('click',()=>{ const k=s.dataset.fix; fixes[k]=!fixes[k]; s.classList.toggle('on',fixes[k]);
  $('#mh').classList.toggle('vague',!fixes.h); $('#mh').textContent=fixes.h?'Světelná reklama, která je vidět i po 35 letech':'Inovativní řešení pro vaše potřeby';
  $('#mc').classList.toggle('hidden',!fixes.c); $('#mt').classList.toggle('hidden',!fixes.t);
  const n=Object.values(fixes).filter(Boolean).length; $('#mbar').style.width=[22,45,70,92][n]+'%'; $('#mlab').textContent=['nízká','vyšší','dobrá','vysoká'][n]; }));
// process tabs
const PROC={
 web:{q1:['Kdo u vás nakupuje a jak se rozhoduje?','Co má web udělat za 12 měsíců?','Kde dnes proces drhne?'],o1:['Zadání a rozsah','Roadmapa v týdnech','Pevná cena'],q2:['Jaká je cesta k poptávce?','Co musí být na první obrazovce?'],o2:['Struktura a obsah','Klikatelný prototyp','Vizuální návrh'],q3:['Kdo bude web upravovat?','Co se má měřit od prvního dne?'],o3:['Web ve Webflow','Měření a formuláře','Návod a rozvoj']},
 id:{q1:['Co má značka říkat a co ne?','Kde bude identita žít: auta, oblečení, web?','Jaký rozpočet firma unese?'],o1:['Hodnoty značky','Rozsah aplikací','Pevná cena'],q2:['Poznáte symbol na plotě z auta?','Funguje logo v jedné barvě?'],o2:['Logo a symbol','Barvy a písmo','Pravidla použití'],q3:['Kdo bude identitu používat denně?','Co jde do výroby jako první?'],o3:['Sada aplikací','Tisková data','Manuál pro tým']},
 pm:{q1:['Kdo rozhoduje a kdo schvaluje?','Co se má změnit v provozu firmy?','Kde jsou skryté závislosti?'],o1:['Mapa zainteresovaných','Plán etap a milníků','Rozpočet a rizika'],q2:['Co potřebuje každý útvar jinak?','Co sjednotit a co nechat?'],o2:['Zadání pro dodavatele','Šablony a standardy','Komunikační plán'],q3:['Kdo převezme provoz po nás?','Jak poznáme, že to funguje?'],o3:['Koordinace dodavatelů','Interní portál a návody','Předání a měření']}
};
function renderProc(t){ Object.entries(PROC[t]).forEach(([k,arr])=>{ const el=$(`.bub[data-k="${k}"]`); el.innerHTML=''; arr.forEach(s=>{ const sp=document.createElement('span'); if(k.startsWith('o')) sp.className='out'; sp.textContent=s; el.appendChild(sp); }); }); $$('.ph').forEach(p=>{ p.classList.remove('in'); requestAnimationFrame(()=>requestAnimationFrame(()=>p.classList.add('in'))); }); }
renderProc('web'); $$('.ph').forEach(p=>p.classList.remove('in'));
$$('#ptabs button').forEach(b=>b.addEventListener('click',()=>{ $$('#ptabs button').forEach(x=>x.classList.toggle('on',x===b)); renderProc(b.dataset.t); }));
// ghost answers
const answers=["Přivést poptávky z Německa, ne jen z Česka.","Prodat pobyt přímo, bez provize portálům.","Vypadat tak, jak firma opravdu pracuje.","Ušetřit obchodníkům první půlhodinu každé schůzky.","Aby si nový web uměl upravit marketing sám."];
const ghost=$('#ghost'), ans=$('#ans'), ta=$('#answer');
(function tw(){ let ai=0,ci=0,del=false; function step(){ const a=answers[ai]; if(!del){ ci++; ghost.textContent=a.slice(0,ci); if(ci===a.length){ del=true; setTimeout(step,2400); return;} setTimeout(step,36);} else { ci-=2; if(ci<=0){ ci=0; del=false; ai=(ai+1)%answers.length; ghost.textContent=''; setTimeout(step,500); return;} ghost.textContent=a.slice(0,ci); setTimeout(step,14);} } if(rm){ ghost.textContent=answers[0]; } else step(); })();
ta.addEventListener('input',()=>ans.classList.toggle('typing',ta.value.length>0)); ta.addEventListener('focus',()=>ans.classList.add('typing')); ta.addEventListener('blur',()=>{ if(!ta.value) ans.classList.remove('typing'); });
let size=null; $$('#size button').forEach(b=>b.addEventListener('click',()=>{ size=b.dataset.v; $$('#size button').forEach(x=>x.classList.toggle('on',x===b)); }));
$('#form').addEventListener('submit',e=>{ e.preventDefault(); $('#kontakt').classList.add('sent'); const cal=$('#cal'); cal.innerHTML='<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1pf0MciJYC4bKv_rLrEd2S7-W12kxw1gXc5lwvqzYdm3rnzOY_h6f1P_9bREELClkj8lCLbi7E?gv=true" title="Rezervace 30 minut"></iframe>'; $('#kontakt .done').scrollIntoView({behavior:'smooth',block:'start'}); });
// cookie
const ck=$('#ck'); try{ if(!localStorage.getItem('wk-consent')) ck.hidden=false; }catch(e){ ck.hidden=false; }
$('#ckok').addEventListener('click',()=>{ try{localStorage.setItem('wk-consent','all');}catch(e){} ck.hidden=true; window.dataLayer=window.dataLayer||[]; dataLayer.push({event:'consent_granted'}); });
$('#ckno').addEventListener('click',()=>{ try{localStorage.setItem('wk-consent','necessary');}catch(e){} ck.hidden=true; });
})();
