//1 - Add a keyup listener on the first input field, so that once you type a letter in this field, it goes into the <span id="display-firstname">. The content of the field and the span should always remain the same.
const firstname=document.getElementById('firstname');
firstname.addEventListener("keyup", displayName);

function displayName() {
    let x = firstname.value;
    document.getElementById('display-firstname').innerHTML=x;
}

//2 - Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
const age=document.getElementById('age');
age.addEventListener('keyup', showAge);
const hardTruth=document.getElementById('a-hard-truth');

function showAge() {
    if (age.value>=18) {
        hardTruth.style.visibility='visible';
    } else {
        hardTruth.style.visibility='hidden';
    }
}

//3 - Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the field red) if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
const pwd=document.getElementById('pwd');
const pwdConf=document.getElementById('pwd-confirm');
pwd.addEventListener('keyup', ()=> {
    if (pwd.value.length<6) {
        pwd.style.backgroundColor='red';
    } else {
        pwd.style.backgroundColor='green';
    };
});
pwdConf.addEventListener('keyup', ()=> {
    if (pwd.value!=pwdConf.value) {
        pwdConf.style.backgroundColor='red';
    } else {
        pwdConf.style.backgroundColor='green';
    };
});

//4 - Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const select=document.getElementById('toggle-darkmode');
const body=document.querySelector('body'); // selectorAll ne permet pas de faire des changements (entre autre de styles) !!!!!!!!!

select.addEventListener('change', () => {
    if (select.value==='dark') {
        body.style.backgroundColor='black';
        body.style.color='white';
    } else {
        body.style.backgroundColor='white';
        body.style.color='black';
    }
    console.log(event.target.value);
});

