(() => {
 const key='ksicSupportLanguage', select=document.querySelector('#language'), allowed=['system','en','zh'];
 let preference='system';
 try { const saved=localStorage.getItem(key); if(allowed.includes(saved)) preference=saved; } catch(_) {}
 const requested=new URLSearchParams(location.search).get('lang'); if(allowed.includes(requested)) preference=requested;
 function render(){
  const system=(navigator.languages?.[0]||navigator.language||'en').toLowerCase();
  const lang=preference==='system'?(system.startsWith('zh')?'zh':'en'):preference;
  document.documentElement.lang=lang==='zh'?'zh-Hans':'en';
  document.querySelectorAll('[data-lang]').forEach(node=>{node.hidden=node.dataset.lang!==lang;});
  select.value=preference; select.setAttribute('aria-label',lang==='zh'?'语言':'Language');
  select.options[0].textContent=lang==='zh'?'跟随系统（自动）':'Follow system (automatic)';
  document.title=document.querySelector(`main section[data-lang="${lang}"] h1`).textContent;
 }
 select.addEventListener('change',()=>{preference=select.value;try{localStorage.setItem(key,preference);}catch(_){}const url=new URL(location.href);url.searchParams.delete('lang');history.replaceState(null,'',url);render();});
 window.addEventListener('languagechange',()=>{if(preference==='system')render();});render();
})();
