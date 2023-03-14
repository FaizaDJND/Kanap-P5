//Afficher les produits sur la page d'accueil//
function products() {
    let url = 'http://localhost:3000/api/products';

    // Fetch de l'API//
    fetch(url)
        .then(response => response.json())

        .then((products) => {
            for (let data of products) {
                //affichage des données pour les produits//
                let display = ``
                display += `<a href="./product.html?id=${data._id}">
                       <article>
                           <img src=${data.imageUrl} alt="${data.altTxt}">
                           <h3 class="productName">${data.name}</h3>
                           <p class="productDescription">${data.description}</p>
                       </article>
                   </a>`


                document.getElementById('items').insertAdjacentHTML("beforeend", display)

            }
        })
}
//appel de la fonction Products//
products();
//Fin affichage des produits sur la page d'accueil//