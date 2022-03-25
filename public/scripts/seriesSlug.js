// const List = require( __dirname + '/data/series');
let headers = new Headers();
// let url = '/liste';
let url = '/liste';

let options = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
};

fetch(url, options)
    .then( (res) => { 
        if(res.ok) {
            return res.json();
        }
    }).then( (response) => {
        console.log(response);
        let id = window.location.href.slice(window.location.href.lastIndexOf('/'))[1]-1;
        let serie = response[id];
        let content = document.querySelector('.content');
        let div = document.createElement('div');
        div.innerHTML = `
        <div class="row">
            <div class="col-md-4">${serie.title}</div>
        </div>
        <div class="text-center"> <img src="../${serie.image_url}" style="max-height: 30vh;"> </div>
        <p> Nombre de saisons : ${serie.seasons}</p>
        <p> Terminé : ${serie.finished}</p>

        <a href="../liste.html"> <button class="btn btn-danger">Retour à la liste</button> </a>
        `;
    div.classList.add('mx-2');
        content.appendChild(div);
    });
