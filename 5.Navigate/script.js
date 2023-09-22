//5.1. Select the last child of the <ol> tag and put it at the beginning of the list;

const ol=document.querySelector('ol');
//selecting the parent

let firstChild=ol.firstElementChild;
let lastChild=ol.lastElementChild;
//telling who are the childrent
//not necessary, you can directly do : ol.insertBefore(ol.lastElementChild, ol.firstElementChild);

ol.insertBefore(lastChild, firstChild);
//telling to insert before in the parent node


/* First attempt, but boring and repetitive-
const a=sectionA.children[0];
const b=sectionA.children[1];
const c=sectionA.children[2];
const d=sectionA.children[3];
const e=sectionA.children[4];

e.appendChild(a);
e.appendChild(b);
e.appendChild(c);
e.appendChild(d);
*/

//5.2. Move the <h2> of the third section in the second one and vice-versa;

const section=document.querySelector('section');
const sectionA=section.nextElementSibling;
const sectionB=sectionA.nextElementSibling; //or =section.nextElementSibling.nextElementSibling
console.log((section),(sectionA),(sectionB));
//selecting the first section and selecting the siblings of 'section'
//displaying to make sure I didn't fu

const thirdTitle=sectionA.firstElementChild;
const secondTitle=sectionB.firstElementChild.firstElementChild; // grandchildren~~
console.log((thirdTitle),(secondTitle));
//selecting the h2 element
//displaying to make sure

sectionA.insertBefore(secondTitle, thirdTitle);
sectionB.insertBefore(thirdTitle, sectionB.firstElementChild);
//inserting the titles in the right sections

//5.3. Delete the last section from the DOM, we don't need it anyways
const main=document.querySelector('main');
sectionB.remove(main);
//remove the last section in main

