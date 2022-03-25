let headers = new Headers();
let url = "/liste";
let options = { 
    method: 'GET',
    headers: headers,
    mode: 'cors',
    cache: 'default'
};

fetch(url, options)
    .then((res) => {
        if(res.ok) {
            return res.json(); 
        } 
    })
    .then((response => {
        let content = document.querySelector('.content');
        let button = document.querySelector('.buttons');
        content.classList.add('d-flex', 'flex-row', 'justify-content-center', 'align-items-center',);
        response.forEach(elt => {
            let id = elt.id;
            let image_url = elt.image_url;
            let title = elt.title;
            let finished = elt.finished;
            if(finished == "true") {
                finished = 'Oui';
            } else {
                finished = "En cours";
            }
            let seasons = elt.seasons;

            let div = document.createElement('div');
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src="${image_url}" class="card-img-top" alt="${title}">
            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <p class="card-text"> Terminé : ${finished} <br> Nombre de saisons : ${seasons}</p>
              <a href="/pages/serie/${id}.html" class="btn btn-primary">Voir plus</a>
            </div>
          </div>`;


          div.classList.add('mx-2');
            content.appendChild(div);
        });
    })
);