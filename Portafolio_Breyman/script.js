
document.querySelectorAll('.card').forEach(c=>{
 c.addEventListener('mouseenter',()=>c.style.boxShadow='0 0 20px cyan');
 c.addEventListener('mouseleave',()=>c.style.boxShadow='none');
});
