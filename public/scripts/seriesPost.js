let form = document.querySelector('form');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    collection = { 
        title: document.querySelector('#title').value,
        finished: document.querySelector('#finished').value,
        seasons: document.querySelector('#seasons').value,
        image_url: document.querySelector('#image').value
    };
    let url = "/liste";


    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        mode: "cors",
        cache: "default",
        body: JSON.stringify({
            collection
        })
    }).then((res) => {
            if(res.ok) {
                window.location.href="/pages/liste.html"
                return res.json(); 
            } 
        })
    }
);