//Récupération des données depuis le fichier JSON//
let url= `http://localhost:3000/api/products/`;
fetch (url)
.then ((reponse)=> reponse.json())
.then ((listeDesProduits)=> 
{
    console.log(listeDesProduits);

})

/*pour récupérer le panier sauvegarder dans le localstorage*/ 
function getCart () {
    let cart = localStorage.getItem("cart");
    cart = {cart__items}

  if(cart == null){
        return [];
  }
  else {return json.parse(localStorage.getItem("cart"));

  }}

/*
${localStorage.getItem ("color")}*/

/*stockage des informations dans le localstorage
window.localStorage.setItem


.then ((data) => {
    document.getElementById ("cart__items").innerHTML +=
    <article class="cart__item" data-id="{product-ID}" data-color="{product-color}"></article>;

})
panier.forEach(choixDuproduit => 
   
    const panier = (localStorage.getItem("panier"))*/