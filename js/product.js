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


/*LocalStoragePourLePanier*/
/*Pour activer le bouton ajouter au panier*/

const buttonAddToCart = document.getElementById("addToCart");


/*Variables à utiliser*/
addToCart.addEventListener("click"), () =>{
   let dataCart = {
   kanapId: kanapId,   
   nameOfKanap: title,   
   color : colors.value,
   quantity : quantity.value
   };
/* ou let dataCart =[inserer variable à utiliser] pour dire que c'est un tableau*/

   /*Pour ajouter un produit au panier au moment du clique sur le bouton*/
function addingProductsToCart (){


/*renvoie a une erreur si pas d'ajout dans le panier*/
   if(addingProductsTocart == null){
      return [];
      alert ('Le panier est vide');
}

}
/*Appel de la fonction addingProductsToCart*/
addingProductsToCart();


/*Fonction pour stocker les données en local*/

function saveCart (savingActualCart){

}
localStorage.setItem("savingCart", JSON.stringify(savingActualCart));
}
/*Appel de la fonction saveCart*/
saveCart();

/*Pour Récupérer Le Panier*/
function collectCart (collectActualCart){
   let collectingCart = JSON.parse(localStorage.getItem("collectActualCart"));
/*Si le panier est vide, renvoie vers un tableau vide*/
   if(cart == null){
      return [];
   }
/*Autrement ça récupérer ce qui est stocké dans le stockage local*/
else {return JSON.parse(localStorage.getItem("collectActualCart"));

}
}
/*Fin du addEventListener*/
   


  