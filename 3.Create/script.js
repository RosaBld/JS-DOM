//starting by creating an array
let students=["Alexandre Vandewiele",
" Antoine Lansman",
" Bastien Venturi",
" Carole Gérard",
" Elisabeth Leyder",
" Elodie Ali",
" Justin Michel",
" Justine Leleu",
" Kimi Lefort",
" Layla",
" Lidwine Careme",
" Lucas Beauloi",
" Mathias Barbier",
" Okly",
" Pierre Marien",
" Robin Piot",
" Rosalie Boulard",
" Stephane Comblez",
" Tim Desmet",
" Toms",
" Valentin Lefort",
" Vens Alexandre",
" Virginie Dourson"];

//making sur the array is correctly display
console.log(students);

//then, creating the element 'section' in the article
const studentsSection=document.createElement('section');
document.querySelector('article').appendChild(studentsSection);

//adding the element 'p' in the article
const studentsPara=document.createElement('p')
document.querySelector('section').appendChild(studentsPara);

//creating the text node by reusing the array
const studentsName=document.createTextNode(randomStudent(students));
document.querySelector('p').appendChild(studentsName);

//randomizing the array
function randomStudent(students) {
    return students[Math.floor(Math.random()*students.length)];
}

//console to try to check why it's not displaying
console.log(randomStudent(students));

//creating the random background color function
function randBgColor() {
    let x=Math.floor(Math.random()*255);
    let y=Math.floor(Math.random()*255);
    let z=Math.floor(Math.random()*255);
    let bgColor="rgb("+x+","+y+","+z+")";
    console.log(bgColor);
    return bgColor;
}

//creating a function so that the text is black or white depending of the value of the RGB
function setTextColor() {
    let x=Math.round(Math.random()*255);
    let y=Math.round(Math.random()*255);
    let z=Math.round(Math.random()*255);
    let Color=Math.round(((parseInt(x)*299)+(parseInt(y)*587)+(parseInt(z)*114))/1000);
    console.log(Color);
    return Color>150?'black':'white';
}

//linking the functions of random background color and text to the paragraphe
let colorText=document.querySelectorAll('p');
colorText.forEach(function(p) {
    let NewColor=randBgColor();
    p.style.backgroundColor=NewColor;
    let NewText=setTextColor();
    p.style.color=NewText;
});


