//1 - And display the date and time of these cities along with the time and date of Brussels.

let date = new Date();
console.log(date);

let p=document.createElement('p');
document.querySelector('h2').appendChild(p);
p.textContent='Bruxelles TimeZone: ' + date;

const anch=date.toLocaleString('en-US', {timeZone:'America/Anchorage'});
console.log(anch);

let p2=document.createElement('p');
document.querySelector('h2').appendChild(p2);
p2.textContent='Anchorage TimeZone: ' + anch;

const Reij=date.toLocaleString('en-US', {timeZone:'Atlantic/Reykjavik'});
console.log(Reij);

let p3=document.createElement('p');
document.querySelector('h2').appendChild(p3);
p3.textContent='Reykjavik TimeZone: ' + Reij;

const StPet=date.toLocaleString('en-US', {timeZone:'Europe/Moscow'});
console.log(anch);

let p4=document.createElement('p');
document.querySelector('h2').appendChild(p4);
p4.textContent='Saint-Petersbourg TimeZone: ' + StPet;

//2 - Using timestamps, find how many days have passed since the date of your birth.
let myBirth=new Date('1994-03-09');

let diff=date.getTime()-myBirth.getTime();
console.log(diff);

let diffDay=diff/ (1000 * 3600 * 24);
console.log(diffDay);

//3 - Using timestamps, find the exact time and date we will be in 80000 hours.
function addHoursToDate(hour){
    date.setHours(hour);
}
addHoursToDate(80000);

let h2=document.createElement('h2');
document.querySelector('main').appendChild(h2);
h2.textContent='In 80.000 hours, we will be: ' + date;

//Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.
let h3=document.createElement('h3');
document.querySelector('main').appendChild(h3);
h3.textContent="Why don't you try it out ?"
let p5=document.createElement('p');
h3.appendChild(p5);

let input=document.querySelector('input');
let label=document.querySelector('label');

p5.appendChild(label);
label.appendChild(input);

let value =input.value;
input.addEventListener('keyup', (addHoursfromInput));

function addHoursfromInput(hour) {
    date.setHours(value);
}

let p6=document.createElement('p');
h3.appendChild(p6);
p6.textContent='In ' + value + ' hours, we will be in ' + date;
