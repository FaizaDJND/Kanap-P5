/*Afficher la page du produit*/
const queryStr = window.location.search
const urlSearchParams = new URLSearchParams(queryStr);
const selection = document.querySelector ('color-select');
const id = urlSearchParams.get("id").split("?id=").join("");

function pageProduct (){
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
addToCart.addEventListener("click", () =>{

   let dataCart = collectCart()||[];/*Si le panier est vide renvoie à un tableau vide*/
   let productData = {
   kanapId: id,     
   color : colors.value,
   quantity : Number (quantity.value),
   };

let productExitingInLocalStorage = JSON.parse (localStorage.getItem("product"));

 if (productExitingInLocalStorage) {
   addProductOnExistingCart(productExitingInLocalStorage, productData);
//incrémenter la quantité d'un canapé qui existe déjà dans le panier//
   
 } else {
   dataCart.push(productData);
};

saveCart(dataCart);
})}
/*Fin de la fonction addingProductToCart*/
/*Appel de la fonction addingProductToCart*/
addingProductToCart();
/*Fin de l'appel de la fonction addingProductToCart*/

/*Fonction pour sauvegarder le panier*/
function saveCart (dataCart){
   localStorage.setItem("product", JSON.stringify(dataCart));
   }
   /*Appel de la fonction saveCart*/
 
   /*Fin de l'appel de la fonction saveCart*/

/*Fonction si le produit existe déjç dans le panier
function addProductOnExistingCart (productExitingInLocalStorage, productData){
   const findproduct = productExitingInLocalStorage.find
}*/



   /*Pour ajouter un produit au panier au moment du clique sur le bouton*/
/*
function addingProductsToCart (){}
   
/*Appel de la fonction addingProductsToCart
addingProductsToCart();*/


/*Pour Récupérer Le Panier*/
function collectCart (){
   let collectingCart = JSON.parse(localStorage.getItem("product"))
   return collectingCart
}

  

/*Fin du addEventListener*/
   


  