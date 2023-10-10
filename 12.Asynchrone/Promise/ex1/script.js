const btn=document.querySelector('.btn').addEventListener('click', listing);
console.log(btn);

function listing () {
    fetch ("ex.json")
        .then ((response) => response.json())
        .then ((json) => {
            console.log(json);
            const list=document.createElement('ul');
            document.body.appendChild(list);
            json.forEach(data => {
                const item=document.createElement('li');
                item.textContent=data;
                list.appendChild(item);
            });
        })
}