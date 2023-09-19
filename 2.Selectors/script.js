/*1*/
document.querySelector('.important').setAttribute('title', 'this is an important item');

/*2*/
document.querySelectorAll('img:not(.important)').forEach(img => img.style.display='none');

/*3*/
document.querySelectorAll('p').forEach(p => console.log("class :" +p.className+"|"+ p.textContent));

/*4*/
function random_p_color() {
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);
    let p_style_color="rgb("+x+","+y+","+z+")";
    console.log(p_style_color);
    return p_style_color;
}
random_p_color();


let color_p = document.querySelectorAll('p:not([class])');
color_p.forEach(function(p) {
    let newColor=random_p_color();
    p.style.color=newColor;
});