const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
document.querySelectorAll('[data-cfg=videos]').forEach(e=>e.textContent=CONFIG.VIDEO_COUNT);
document.querySelectorAll('[data-cfg=cats]').forEach(e=>e.textContent=CONFIG.NICHES.length);

// vídeo demo
function vid(el,url,label){
  if(!url){el.innerHTML='<div class="ph"><span style="font-size:32px">🎬</span>'+label+'</div>';return}
  el.innerHTML='<div class="ph"><button type="button" id="play" aria-label="Assistir demonstração" style="all:unset;cursor:pointer;width:72px;height:72px;border-radius:50%;background:var(--g);display:grid;place-items:center;font-size:30px;color:#052e16">▶</button><b>Toque para assistir</b>'+label+'</div>';
  const isFile=/\.(mp4|webm|mov)(\?|$)|^data:video/i.test(url);
  el.querySelector('#play').onclick=()=>{el.innerHTML=isFile?'<video src="'+url+'" controls autoplay playsinline style="width:100%;height:100%;object-fit:contain;background:#000"></video>':'<iframe allow="autoplay;fullscreen" title="'+label+'" src="'+url+'"></iframe>'};
}
vid($('#demo'),CONFIG.DEMO_VIDEO_URL,'Demonstração do grupo no Telegram');

$('#niches').innerHTML=CONFIG.NICHES.map(n=>'<div class="card"><div class="i">'+n[0]+'</div><h3>'+n[1]+'</h3><p>Vídeos separados por categoria.</p></div>').join('');
const gal=$('#gallery');
CONFIG.GALLERY.forEach(g=>{const d=document.createElement('div');d.className='phone';gal.appendChild(d);
  if(!g.u){d.innerHTML='<div class="ph"><span style="font-size:28px">🎥</span><b>'+g.t+'</b>Exemplo em breve</div>';return}
  d.innerHTML='<div class="ph"><button type="button" aria-label="Assistir '+g.t+'" style="all:unset;cursor:pointer;width:56px;height:56px;border-radius:50%;background:var(--g);display:grid;place-items:center;font-size:22px;color:#052e16">▶</button><b>'+g.t+'</b></div>';
  d.querySelector('button').onclick=()=>{d.innerHTML=/\.(mp4|webm|mov)(\?|$)/i.test(g.u)?'<video src="'+g.u+'" controls autoplay playsinline style="width:100%;height:100%;object-fit:cover;background:#000"></video>':'<iframe allow="autoplay;fullscreen" title="'+g.t+'" src="'+g.u+'"></iframe>'};});
$('#gifts').innerHTML=CONFIG.GIFTS.map(g=>'<div class="card"><div class="cover"><span>'+g.i+'</span>'+g.t+'<small>INCLUSO NO PACK PREMIUM</small></div><h3>'+g.t+'</h3><p style="margin-bottom:10px">'+g.d+'</p><ul>'+g.b.map(b=>'<li>'+b+'</li>').join('')+'</ul></div>').join('');
$('#incl').innerHTML=['Acesso à biblioteca privada no Telegram','Mais de '+CONFIG.VIDEO_COUNT+' vídeos registrados, sujeitos à disponibilidade atual da biblioteca','Conteúdos em '+CONFIG.NICHES.length+' categorias','Atualizações periódicas',...CONFIG.GIFTS.map(g=>g.t),'Acesso aos materiais complementares'].map(x=>'<li>'+x+'</li>').join('');
if(CONFIG.PRODUCT_PRICE)$('#price').innerHTML=CONFIG.PRODUCT_PRICE+(CONFIG.ACCESS_DURATION?'<small>'+CONFIG.ACCESS_DURATION+'</small>':'');else $('#price').remove();
$('#faq').innerHTML=CONFIG.FAQ.map(f=>'<details><summary>'+f[0]+'</summary><p>'+(f[1]||CONFIG.ACCESS_DURATION||'Consulte as condições de acesso no checkout.')+'</p></details>').join('');

// checkout + UTMs
const P=new URLSearchParams(location.search),keys=['utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
let href=CONFIG.KIWIFY_CHECKOUT_URL;
if(href!=='#'){try{const u=new URL(href);keys.forEach(k=>{if(P.get(k))u.searchParams.set(k,P.get(k))});href=u.toString()}catch(e){}}
// Meta Pixel (sem duplicar)
function track(ev){try{window.fbq&&fbq('track',ev)}catch(e){}}
if(CONFIG.META_PIXEL_ID&&!window.fbq){!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',CONFIG.META_PIXEL_ID);fbq('track','PageView')}
$$('.cta').forEach(a=>{a.href=href;a.addEventListener('click',()=>track('InitiateCheckout'))});
// ViewContent ao ver a oferta
new IntersectionObserver((es,o)=>{es.forEach(e=>{if(e.isIntersecting){track('ViewContent');o.disconnect()}})},{threshold:.4}).observe($('.offer'));
// sticky: esconde sobre o player e perto da oferta
const st=$('#sticky'),hideEls=[$('#demo'),$('.offer .card')];
const vis=new Set();const io=new IntersectionObserver(es=>{es.forEach(e=>e.isIntersecting?vis.add(e.target):vis.delete(e.target));st.classList.toggle('hide',vis.size>0)},{threshold:.15});
hideEls.forEach(e=>io.observe(e));
// reveal
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');ro.unobserve(e.target)}}),{threshold:.1});
$$('.reveal').forEach(e=>ro.observe(e));
