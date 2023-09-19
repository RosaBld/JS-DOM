/*1*/
console.log(document.title);

/*2*/
document.title="Modifying the DOM";
console.log(document.title);

/*3*/
document.body.style.backgroundColor="#FF69B4";

function random_bg_color() {
    let x = Math.floor(Math.random()*255);
    let y = Math.floor(Math.random()*255);
    let z = Math.floor(Math.random()*255);
    let bgColor="rgb("+x+","+y+","+z+")";
    console.log(bgColor);

        document.body.style.backgroundColor=bgColor;
}

random_bg_color();

/*4*/
const body=document.body;
const bodyChildren=body.children;
for (const child of bodyChildren) {
    console.log(child);
}
