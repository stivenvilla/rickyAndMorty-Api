function getCharacters(done){

    const results = fetch('https://rickandmortyapi.com/api/character');

    results
        .then(Response => Response.json())
        .then(data => {
            done(data)
        });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        
        const article = document.createRange().createContextualFragment(
            `
            <article>
             <div class="image-container">
             <img src="${personaje.image}" alt="${personaje.name}">
             </div>

             <h2>${personaje.name}</h2>
            <p>${personaje.status}</p>  

            </article>

            `);

            const main = document.querySelector("main");

            main.append(article);

    });

});