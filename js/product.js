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
pageProduct();
/*Fin de l'affichage de la page du produit*/


/*LocalStoragePourLePanier*/

   /*Pour ajouter un produit au panier au moment du clique sur le bouton*/
function addingProductsToCart (){
const button = document.getElementById("addToCart");
const color = document.querySelector('colors');
optionColor = color.value;
const quantity = document.querySelector('quantity');
optionQuantity = Number (quantity.value);

addToCart.addEventListener("click"), () =>{



}}

addingProductsToCart();


localStorage.setItem("saveCart", JSON.stringify(saveCart))

   /*let cart = []
   
   {
      ;
   }


/*PourRécupérerLePanier
   function getCart(produit){
      let cart = getCart
       
      cart.push(produit);
      saveCart(cart);

   let cart = localStorage.getItem("cart");
   
/*Si le panier est vide, renvoie vers un tableau vide*
 if(cart == null){
       return [];
 }
 else {return JSON.parse(localStorage.getItem("cart"));

 }}*/




  