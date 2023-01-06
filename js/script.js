//Afficher les produits sur la page d'accueil//

let url= 'http://localhost:3000/api/products';

fetch(url)
 .then(reponse => reponse.json())

 .then((produits) => {
console.log(produits);

   for(let data of produits) {     
        // displayProducts();
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