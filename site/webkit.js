(function(){
const root=document.getElementById('frame')||document.documentElement; root.classList.add('js');
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const fine=matchMedia('(hover:hover) and (pointer:fine)').matches, rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const inViewer=!!document.getElementById('frame');
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v)), lerp=(a,b,t)=>a+(b-a)*t, easeOut=t=>1-Math.pow(1-t,3);
// header
const hdr=$('#top'); if(hdr) addEventListener('scroll',()=>hdr.classList.toggle('s',scrollY>8),{passive:true});
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} }),{rootMargin:'0px 0px -8% 0px',threshold:.08});
$$('.rv, .ph, .pc, .weeks, .pj').forEach(el=>io.observe(el));
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
// demo: obrazovka přebírá okno při scrollu
const mac=$('#mac');
if(mac){
  const sec=$('#demo'), intro=$('#dintro'), pg=$('#macpg'), shell=$('.mac-shell',mac), W=1200;
  function fit(){ const sw=mac.clientWidth/W, sh=(shell.clientHeight||720)/740; const s=Math.min(sw,sh); pg.style.transform=`scale(${s})`; pg.style.left=Math.max(0,(mac.clientWidth-W*s)/2)+'px'; }
  new ResizeObserver(fit).observe(mac); new ResizeObserver(fit).observe(shell); fit();
  const pin=$('.demo-pin',sec);
  function grow(){ if(rm) return; const r=sec.getBoundingClientRect(); const vh=pin.clientHeight||innerHeight; const g=easeOut(clamp(-r.top/(vh*1.1),0,1));
    intro.style.opacity=String(1-Math.min(1,g*1.8)); intro.style.transform=`scale(${1-g*.06})`;
    document.body.classList.toggle('demo-on',g>.85);
    const vw=sec.clientWidth||innerWidth, narrow=vw<760; mac.style.width=lerp(narrow?vw*.92:vw*.72,vw,g)+'px'; mac.style.height=lerp(vh*.62,vh,g)+'px'; mac.style.setProperty('--g',g.toFixed(3)); }
  if(!rm){ addEventListener('scroll',grow,{passive:true}); addEventListener('resize',grow); grow(); }
  const keys=['h','c','t','i','f','s']; const state={}; keys.forEach(k=>state[k]=false);
  const bar=$('#dbar');
  function update(){ const n=keys.filter(k=>state[k]).length; const w=8+n*15; bar.style.width=w+'%'; bar.style.background=n<2?'#E5484D':n<4?'#D99A00':'#1F9D5B'; if(n===keys.length){ $('#dwin').classList.add('on'); $('#dwint').textContent='Takhle to děláme. Chcete to i pro svůj web?'; } }
  $$('[data-fix]',mac).forEach(el=>el.addEventListener('click',e=>{ e.preventDefault(); const k=el.dataset.fix; if(state[k]) return; state[k]=true; el.classList.add('ok'); if(k==='s'){ el.querySelector('b').textContent='0,9 s'; } update(); }));
  update();
}
// kontakt: slovo se maže a píše po znacích
const rotw=$('#rotw');
if(rotw){ const wordsR=['web','značka','aplikace','projekt']; let i=0;
  if(rm){ rotw.textContent=wordsR[0]; } else {
    const step=()=>{ const cur=rotw.textContent; if(cur.length>0){ rotw.textContent=cur.slice(0,-1); setTimeout(step,55); return; } i=(i+1)%wordsR.length; const nx=wordsR[i]; let c=0; const type=()=>{ c++; rotw.textContent=nx.slice(0,c); if(c<nx.length) setTimeout(type,85); else setTimeout(step,2600); }; setTimeout(type,300); };
    setTimeout(step,2600); } }
// tým: 3, 6, 4, 7, 5, 3 lidí, lehce nepravidelně
const avs=$('#avs');
if(avs){ const imgs=$$('img',avs); const step=38;
  function lay(n){ imgs.forEach((im,i)=>{ const on=i<n; im.style.left=(Math.min(i,n-1)*step)+'px'; im.style.opacity=on?1:0; im.style.transform=on?'':'scale(.6)'; im.style.zIndex=10-i; }); }
  const seq=[3,6,4,7,5,3], wait=[2400,3300,2700,3900,3000,2600]; let k=0; lay(7);
  if(!rm){ const next=()=>{ lay(seq[k]); const w=wait[k]+Math.round((Math.random()-.5)*600); k=(k+1)%seq.length; setTimeout(next,w); }; setTimeout(next,1800); } }
// poptávka form
const form=$('#form');
if(form){
  let size=null; $$('#size button').forEach(b=>b.addEventListener('click',()=>{ size=b.dataset.v; $$('#size button').forEach(x=>x.classList.toggle('on',x===b)); }));
  const q=new URLSearchParams(location.search); const ta=$('#co'); if(q.get('co')==='sprint'&&ta){ ta.value='Mám zájem o Sprint 14 dní. '; }
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
