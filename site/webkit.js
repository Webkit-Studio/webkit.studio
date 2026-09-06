(function(){
const root=document.getElementById('frame')||document.documentElement; root.classList.add('js');
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches, rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const inViewer=!!document.getElementById('frame');
// header
const hdr=$('#top'); if(hdr) addEventListener('scroll',()=>hdr.classList.toggle('s',scrollY>8),{passive:true});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
$$('.rv, .ph, .pc').forEach(el=>io.observe(el));
// cursor + hero weight + magnetic
let mx=-9999,my=-9999; const cur=$('#cur'); const words=$$('#q .w'); const mags=$$('[data-mag]');
if(fine&&cur&&!inViewer){ addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY; cur.classList.add('on');},{passive:true}); document.addEventListener('mouseleave',()=>cur.classList.remove('on'));
 document.addEventListener('pointerover',e=>{ if(e.target.closest('a,button,.fx')) cur.classList.add('big'); }); document.addEventListener('pointerout',e=>{ if(e.target.closest('a,button,.fx')) cur.classList.remove('big'); }); }
else if(fine){ addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;},{passive:true}); }
let heroVisible=!!$('#q'); if($('#q')) new IntersectionObserver(es=>{heroVisible=es[0].isIntersecting;}).observe($('#q'));
function loop(){
  if(fine){ if(cur&&!inViewer) cur.style.transform=`translate(${mx}px,${my}px) translate(-50%,-50%)`;
    if(heroVisible) words.forEach(w=>{ const r=w.getBoundingClientRect(); const d=Math.hypot(mx-(r.left+r.width/2),my-(r.top+r.height/2)); const k=Math.max(0,1-d/380); w.style.fontVariationSettings=`"opsz" 96,"wdth" ${(100-k*20).toFixed(1)},"wght" ${(300+k*500).toFixed(0)}`; w.style.color=k>.55?'#1D2BE8':''; });
    if(!inViewer) mags.forEach(m=>{ const r=m.getBoundingClientRect(); if(r.bottom<0||r.top>innerHeight) return; const cx=r.left+r.width/2, cy=r.top+r.height/2; const dx=mx-cx, dy=my-cy; const d=Math.hypot(dx,dy); const pull=d<120?(1-d/120):0; m.style.transform=pull?`translate(${dx*pull*.25}px,${dy*pull*.25}px)`:''; });
  }
  requestAnimationFrame(loop);
}
if(!rm) requestAnimationFrame(loop);
// demo: the big computer
const mac=$('#mac');
if(mac){
  const pg=$('#macpg'), shell=$('.mac-shell',mac), W=1200;
  function fit(){ const s=Math.min(1,mac.clientWidth/W); pg.style.transform=`scale(${s})`; shell.style.height=(pg.offsetHeight*s)+'px'; }
  new ResizeObserver(fit).observe(mac); new ResizeObserver(fit).observe(pg); fit();
  // grows to the full width of the screen while it scrolls into view
  const wrapEl=mac.parentElement;
  function grow(){ const r=wrapEl.getBoundingClientRect(); const vh=innerHeight; const g=Math.max(0,Math.min(1,(vh*0.9-r.top)/(vh*0.6))); mac.style.setProperty('--g',g.toFixed(3)); mac.classList.toggle('grow',g>0.02); const maxw=1280+(wrapEl.clientWidth-1280)*g; mac.style.maxWidth=(g>0.02?Math.max(1280,maxw):1280)+'px'; }
  if(!rm){ addEventListener('scroll',grow,{passive:true}); addEventListener('resize',grow); grow(); }
  const DATA={
    h:['20 %','Lidé přečtou průměrně jen pětinu textu na stránce. První věta musí říct, co děláte.','Nielsen Norman Group'],
    c:['57 %','Víc než polovinu času stráví návštěvník na první obrazovce. Tlačítko patří tam.','Nielsen Norman Group, 2018'],
    t:['92 %','Doporučení jiných lidí věří víc než jakékoliv reklamě. Reference vedle tlačítka pomáhají.','Nielsen, Trust in Advertising'],
    i:['+45 %','Skutečná fotka místo stock fotky zvedla počet registrací o 45 procent.','MECLABS, Harrington Movers'],
    f:['+120 %','Zkrácení formuláře z jedenácti polí na čtyři zvedlo počet odeslání o 120 procent.','Imagescape, cit. HubSpot'],
    s:['53 %','Přes polovinu návštěv z mobilu odejde, když se stránka načítá déle než tři sekundy.','Google / SOASTA, 2017']
  };
  const state={}; const keys=['h','c','t','i','f','s']; keys.forEach(k=>state[k]=false);
  const labels=['nízká','nízká','vyšší','vyšší','dobrá','vysoká','vysoká'];
  const stat=$('#dstat'); let statT;
  function showStat(k){ const d=DATA[k]; $('#dsn').textContent=d[0]; $('#dst').textContent=d[1]; $('#dss').textContent=d[2]; stat.hidden=false; stat.style.animation='none'; void stat.offsetWidth; stat.style.animation=''; clearTimeout(statT); statT=setTimeout(()=>{stat.hidden=true;},5200); }
  function update(){ const n=keys.filter(k=>state[k]).length; $('#dcount').textContent=`${n} z ${keys.length} opraveno`; $('#dbar').style.width=(8+n*15)+'%'; $('#dlab').textContent='šance na poptávku: '+labels[n]; if(n===keys.length) setTimeout(()=>{ stat.hidden=true; $('#dwin').classList.add('on'); },1200); }
  $$('[data-fix]',mac).forEach(el=>el.addEventListener('click',e=>{ e.preventDefault(); const k=el.dataset.fix; if(state[k]) return; state[k]=true; el.classList.add('ok'); if(k==='s') el.innerHTML='<b>0,9 s</b> načítání'; fit(); showStat(k); update(); }));
  update();
}
// contact: rotating word
const rot=$('#rot');
if(rot&&!rm){ const wordsR=['web','značka','aplikace','projekt']; let i=0; setInterval(()=>{ const cur=rot.firstElementChild; const nx=document.createElement('span'); i=(i+1)%wordsR.length; nx.textContent=wordsR[i]; nx.className='in'; rot.appendChild(nx); cur.classList.add('out'); requestAnimationFrame(()=>requestAnimationFrame(()=>nx.classList.remove('in'))); setTimeout(()=>cur.remove(),500); },2600); }
// team: avatar stack 7 -> 3 -> 7
const avs=$('#avs');
if(avs){ const imgs=$$('img',avs), lab=$('#avn'); const step=38;
  function lay(n){ imgs.forEach((im,i)=>{ const on=i<n; im.style.left=(Math.min(i,n-1)*step)+'px'; im.style.opacity=on?1:0; im.style.transform=on?'':'scale(.6)'; im.style.zIndex=10-i; }); lab.style.left=(n*step+30)+'px'; lab.textContent=n===7?'Velký projekt: 7 lidí':'Malý projekt: 3 lidé'; }
  lay(7); if(!rm){ let big=true; setInterval(()=>{ big=!big; lay(big?7:3); },3200); } }
// poptávka form
const form=$('#form');
if(form){
  let size=null; $$('#size button').forEach(b=>b.addEventListener('click',()=>{ size=b.dataset.v; $$('#size button').forEach(x=>x.classList.toggle('on',x===b)); }));
  const q=new URLSearchParams(location.search); const ta=$('#co'); if(q.get('co')==='sprint'&&ta){ ta.value='Mám zájem o Sprint 14 dní. '; }
  // typewriter of typical client situations inside the field
  const ghost=$('#ghost'), wrapT=$('.tawrap');
  if(ghost&&ta){ const ex=['Potřebujeme nový web. Ten současný nám nepřivádí poptávky a nejde v něm nic změnit.','Chceme sjednotit, jak firma vypadá na autech, na webu a v nabídkách.','Nenašli jsme systém, který zvládne naše zakázky. Tabulky a formuláře už nestačí.','Rozjíždíme nový produkt a potřebujeme stránku, která bude do měsíce fungovat.'];
    const sync=()=>wrapT.classList.toggle('typing',ta.value.length>0||document.activeElement===ta); ta.addEventListener('input',sync); ta.addEventListener('focus',sync); ta.addEventListener('blur',sync);
    if(rm){ ghost.textContent=ex[0]; } else { let ai=0,ci=0,del=false; (function step(){ const a=ex[ai]; if(!del){ ci++; ghost.textContent=a.slice(0,ci); if(ci===a.length){ del=true; setTimeout(step,2600); return;} setTimeout(step,28);} else { ci-=3; if(ci<=0){ ci=0; del=false; ai=(ai+1)%ex.length; ghost.textContent=''; setTimeout(step,400); return;} ghost.textContent=a.slice(0,ci); setTimeout(step,12);} })(); } }
  form.addEventListener('submit',e=>{ e.preventDefault(); if(!form.checkValidity()){ form.reportValidity(); return; }
    $('#poptavka').classList.add('sent'); const cal=$('#cal'); cal.innerHTML='<iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1pf0MciJYC4bKv_rLrEd2S7-W12kxw1gXc5lwvqzYdm3rnzOY_h6f1P_9bREELClkj8lCLbi7E?gv=true" title="Rezervace 30 minut"></iframe>'; $('#done').scrollIntoView({behavior:'smooth',block:'start'}); });
}
// cookie
const ck=$('#ck');
if(ck&&!inViewer){ try{ if(!localStorage.getItem('wk-consent')) ck.hidden=false; }catch(e){ ck.hidden=false; }
  $('#ckok').addEventListener('click',()=>{ try{localStorage.setItem('wk-consent','all');}catch(e){} ck.hidden=true; window.dataLayer=window.dataLayer||[]; dataLayer.push({event:'consent_granted'}); window.dispatchEvent(new Event('wk-consent')); });
  $('#ckno').addEventListener('click',()=>{ try{localStorage.setItem('wk-consent','necessary');}catch(e){} ck.hidden=true; }); }
})();
