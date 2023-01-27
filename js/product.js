/*Afficher la page du produit*/
function pageProduct (){

const queryStr = window.location.search
const urlSearchParams = new URLSearchParams(queryStr);
const selection = document.querySelector ('color-select');
const id = urlSearchParams.get("id").split("?id=").join("");
/*Récupère l'ID de chaque produit présent dans l'URL*/
console.log(id);

let url= `http://localhost:3000/api/products/${id}`; /*fetch uniquement la partie qu'on veut retenir avec l'ID du canapé concerné*/ 
console.log(url);

fetch (url)
.then(response => response.json())

   .then((cardOfProduct) => {
      console.log(cardOfProduct)
      document.querySelector(".item__img").innerHTML=`<img src="${cardOfProduct.imageUrl}" alt="Photographie d'un canapé">`
      document.getElementById("title").innerHTML=`<h1 id="title">${cardOfProduct.name}</h1>`
      document.getElementById("price").innerHTML=`<span id="price">${cardOfProduct.price}</span>`
      document.getElementById("description").innerHTML=`<p id="description">${cardOfProduct.description}</p>`
      document.getElementById("quantity").innerHMTL=`<input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">${cardOfProduct.quantity}</input>`
      cardOfProduct.colors.forEach(color => document.getElementById("colors").innerHTML+=`<option value="${color}">${color}</option>`)

   }) 
}
/*Appel de la fonction pageProduct*/
pageProduct();
/*Fin de l'affichage de la page du produit*/


/*Local Storage Pour Le Panier*/

function addingProductToCart(){
/*Pour activer le bouton ajouter au panier*/
const buttonAddToCart = document.getElementById("addToCart");

/*Ecouter le bouton Ajouter au panier pour actualiser le storage local*/

addToCart.addEventListener("click"), () =>{

   let dataCart = [];
   let productData = {
   kanapId: id,   
   nameOfKanap: cardOfProduct.title,   
   color : colors.value,
   quantity : Number (quantity.value),
   productImage : cardOfProduct.imageUrl,
   productAltImage : cardOfProduct.altTxt,
   };
}
}
/*Fin de la fonction addingProductToCart*/
/*Appel de la fonction addingProductToCart*/
addingProductToCart();
/*Fin de l'appel de la fonction addingProductToCart*/


/*Fonction pour stocker les données en local*/
function saveCart (){
   dataCart.push(productData);
   localStorage.setItem("productData", JSON.stringify());
   }
   /*Appel de la fonction saveCart*/
   saveCart();
   /*Fin de l'appel de la fonction saveCart*/

   /*Pour ajouter un produit au panier au moment du clique sur le bouton*/
/*
function addingProductsToCart (){}
   
/*Appel de la fonction addingProductsToCart
addingProductsToCart();*/


/*Pour Récupérer Le Panier*/
function collectCart (){
   let collectingCart = JSON.parse(localStorage.getItem("productsInCart"));

/*Si on ajoute un canapé dans le panier*/
if(productStoreInLocalStorage){
   addProductIntoExitingCart(productStoreInLocalStorage,productData);
}
/*Mais si le panier est vide*/
else{
   emptyNewCart(productStoreInLocalStorage, productData);
}
}
  
/*Autrement ça récupérer ce qui est stocké dans le stockage local*/

/*Fin du addEventListener*/
   


  