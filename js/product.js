/*Variables constantes pour chercher le produit avec son id*/
const queryStr = window.location.search
const urlSearchParams = new URLSearchParams(queryStr);
const selection = document.querySelector ('color-select');
const id = urlSearchParams.get("id");

/*Afficher la page du produit*/
function pageProduct (){
/*Récupère l'ID de chaque produit présent dans l'URL*/
console.log(id);

let url= `http://localhost:3000/api/products/${id}`;
console.log(url);
/*fetch uniquement la partie qu'on veut retenir avec l'ID du canapé concerné*/ 
fetch (url)
.then(response => response.json())
/*Afficher le produit dans le DOM*/
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
/*Variable constante pour activer le bouton ajouter au panier*/
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
/*Si on ajoute un produit au panier*/
 if (productExitingInLocalStorage) {
   addProductOnExistingCart(productExitingInLocalStorage, productData);  
/*incrémenter la quantité d'un canapé qui existe déjà dans le panier*/
   
 } else {
   dataCart.push(productData);
};
  /*Appel de la fonction saveCart*/
saveCart(dataCart);
/*Fin de l'appel de la fonction saveCart*/
})

}
/*Appel de la fonction addingProductToCart*/
addingProductToCart();
/*Fin de l'appel de la fonction addingProductToCart*/

/*Fonction pour sauvegarder le panier*/
function saveCart (dataCart){
   localStorage.setItem("product", JSON.stringify(dataCart));
   }


/*Fonction si le produit existe déjà dans le panier*/
/*Note à moi-même, vérifier cela avec mon mentor*/
function addProductOnExistingCart (productExitingInLocalStorage, productData){
   const seachProductInLocalStorage  = productExitingInLocalStorage.find (saveCart);
      if (seachProductInLocalStorage){
         let addSameProductQuantity =
         parsInt(productData(quantity)) + ParsInt(seachProductInLocalStorage.productData(quantity))
         searchProductInLocalStorage.productData(quantity)= addSameProductQuantity;
         localStorage.setItem("product", JSON.stringify(dataCart))
      }

       else {
         productExitingInLocalStorage.push(productData);
         localStorage.setItem("product", JSON.stringify(productExitingInLocalStorage));

       }
      }

/*Pour Récupérer Le Panier*/
function collectCart (){
   let collectingCart = JSON.parse(localStorage.getItem("product"))
   return collectingCart
}

  

/*Fin du addEventListener*/
   


  