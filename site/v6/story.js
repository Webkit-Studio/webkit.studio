(function(){
const rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
const scenes=[...document.querySelectorAll('.scene')];
scenes.forEach(s=>s.style.setProperty('--len',s.dataset.len||2));
const rail=[...document.querySelectorAll('#rail a')]; const chapters=rail.map(a=>document.querySelector(a.getAttribute('href')));
const wk=document.getElementById('wk'); const darkIds=new Set(['proc','projekty','napsat']); const root=document.getElementById('frame')||document.documentElement;
const vhOf=()=>(document.getElementById('frame')?document.querySelector('.scene .sstage')?.clientHeight:0)||innerHeight;
function upd(){ const vh=vhOf();
  scenes.forEach(sc=>{ const r=sc.getBoundingClientRect(); const total=Math.max(1,r.height-vh); let p=Math.max(0,Math.min(1,-r.top/total)); if(rm) p=1; sc.style.setProperty('--p',p.toFixed(4)); const steps=+sc.dataset.steps||0; if(steps) sc.dataset.step=String(Math.min(steps-1,Math.floor(p*steps))); if(sc.id==='jak'&&wk) wk.textContent='Týden '+Math.max(1,Math.min(8,Math.ceil(p*8))); });
  let cur=0; chapters.forEach((c,i)=>{ if(c&&c.getBoundingClientRect().top<=vh*.5) cur=i; }); rail.forEach((a,i)=>a.classList.toggle('on',i===cur)); document.body.classList.toggle('on-dark',!!chapters[cur]&&darkIds.has(chapters[cur].id));
  const y=scrollY||root.scrollTop||0; document.body.classList.toggle('cta-on',y>vh*.8); document.body.classList.toggle('at-final',cur===chapters.length-1);
}
addEventListener('scroll',upd,{passive:true}); addEventListener('resize',upd); upd(); setTimeout(upd,300);
})();
