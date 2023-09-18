document.querySelector('.important').setAttribute('title', 'this is an important item');

document.querySelectorAll('img:not(.important)').forEach(img => img.style.display='none');

document.querySelectorAll('p').forEach(p => console.log("class :" +p.className+"|"+ p.textContent));