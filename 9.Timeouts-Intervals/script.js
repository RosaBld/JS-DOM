//1
const p=document.createElement('p');
document.querySelector('h2').appendChild(p);
const text='Keller';

let timer;

let i=0;

function type () {
    document.querySelector('p').innerHTML+=text.charAt(i);
    i++;
    if (i===text.length)
        clearInterval(timer);
}
timer=setInterval(type,1000);


//2
//ne pas utiliser de loop!!
const p2=document.createElement('p');
document.querySelector('h2').appendChild(p2);
let l=0;

function timeSpent() {
    l++;
    if (l<60) {
        p2.textContent='You spent ' +l+ ' seconds on this page';
    } else {
        const m=Math.floor(l/60)
        const n=(l-(60*m))
        p2.textContent='You spent '+m+ ' minutes and ' +n+ ' seconds on this page'
    }
}
setInterval(timeSpent, 1000);
