//Récupération des données depuis le fichier JSON//
let url= `http://localhost:3000/api/products/`;
fetch (url)
.then ((reponse)=> reponse.json())
.then ((listeDesProduits)=> 
{
    console.log(listeDesProduits);

}) 


/*stockage des informations dans le localstorage
window.localStorage.setItem


.then ((data) => {
    document.getElementById ("cart__items").innerHTML +=
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}"></article>;

})
panier.forEach(choixDuproduit => 
   
    const panier = (localStorage.getItem("panier"))*/