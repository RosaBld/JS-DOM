let inputName=document.querySelector('.name');
let button=document.querySelector('.button').addEventListener('click', fetching);
let result=document.querySelector('.result');

const fetchName=(inputName)=> 
    fetch("https://api.agify.io/?name=" + inputName.value);

function fetching(){
    fetchName(inputName)
        .then ((response) => response.json())
        .then ((json)=> {
            console.log(json);
            result.textContent=`There are ${json.count} ${json.name} in the world.`;
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
}