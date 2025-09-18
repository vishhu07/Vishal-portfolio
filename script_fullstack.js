// Simple JS for mobile nav toggle and smooth scroll
document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', ()=>{
    if(nav.style.display === 'flex') nav.style.display = 'none';
    else nav.style.display = 'flex';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); if(window.innerWidth <= 900) nav.style.display='none'; }
    });
  });
});