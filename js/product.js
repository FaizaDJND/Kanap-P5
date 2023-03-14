//Variables constantes pour chercher le produit avec son id//
const queryStr = window.location.search
const urlSearchParams = new URLSearchParams(queryStr);
const selection = document.querySelector('color-select');
const id = urlSearchParams.get("id");

//Afficher la page du produit//
function pageProduct() {
   //Récupère l'ID de chaque produit présent dans l'URL//
   let url = `http://localhost:3000/api/products/${id}`;
   //fetch uniquement la partie qu'on veut retenir avec l'ID du canapé concerné//
   fetch(url)
      .then(response => response.json())
      //Afficher le produit dans le DOM//
      .then((cardOfProduct) => {
         document.querySelector(".item__img").innerHTML = `<img src="${cardOfProduct.imageUrl}" alt="Photographie d'un canapé">`
         document.getElementById("title").textContent = cardOfProduct.name
         document.getElementById("price").innerHTML = `<span id="price">${cardOfProduct.price}</span>`
         document.getElementById("description").textContent = cardOfProduct.description
         document.getElementById("quantity").innerHMTL = `<input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">${cardOfProduct.quantity}</input>`
         cardOfProduct.colors.forEach(color => document.getElementById("colors").innerHTML += `<option value="${color}">${color}</option>`)

      })
}
//Appel de la fonction pageProduct//
pageProduct();
//Fin de l'affichage de la page du produit//


//------------------------------Local Storage Pour Le Panier--------------------------//

function addingProductToCart() {
   //Variable qui stock le pointeur sur le bouton, écoute au clique//
   const buttonAddToCart = document.getElementById("addToCart");

   //Ecouter le bouton Ajouter au panier au clique pour actualiser le storage local//
  buttonAddToCart.addEventListener("click", () => {

      let dataCart = collectCart() || [];/*Si le panier est vide renvoie à un tableau vide*/
      let productData = {
         kanapId: id,
         color: colors.value,
         quantity: Number(quantity.value),
      };


      //Pour limiter la quantité du produit avec message d'alerte//
      if (quantity.value > 0 && quantity.value <= 100 && quantity.value != 0) {
      } else {
         alert("La quantité demandée n'est pas valide. Nos produits sont limités. Merci de sélectionner une quantité entre 1 et 100.");
         return false
      }

      //Si on ajoute un produit au panier avec message d'alerte//
      if (dataCart.length > 0 && dataCart.length <= 100) {
         alert("Le produit a bien été rajouté dans votre panier")

         addProductOnExistingCart(dataCart, productData);
         //incrémenter la quantité d'un canapé qui existe déjà dans le panier//

      } else {
         dataCart.push(productData);
         alert('Le produit a bien été ajouté dans votre panier')
      };

      //Appel de la fonction saveCart//
      saveCart(dataCart);
      //Fin de l'appel de la fonction saveCart//
   });
}
//Appel de la fonction addingProductToCart//
addingProductToCart();
//Fin de l'appel de la fonction addingProductToCart//

//Fonction pour sauvegarder le panier//
function saveCart(dataCart) {
   localStorage.setItem("product", JSON.stringify(dataCart));
}

//Fonction si le produit existe déjà dans le panier et modifier la quantité//
function addProductOnExistingCart(productExistingInLocalStorage, productData) {
   let searchProductInLocalStorage = productExistingInLocalStorage.find(item => item.id === productData.id && item.color === productData.color);
   if (searchProductInLocalStorage != undefined &&
      quantity.value > 0 && quantity.value <= 100 && parseInt(searchProductInLocalStorage.quantity) +
      parseInt(productData.quantity) <= 100) {
      searchProductInLocalStorage.quantity = parseInt(searchProductInLocalStorage.quantity) +
         parseInt(productData.quantity);
   }

   else {
      productExistingInLocalStorage.push(productData);
   }

}

//Pour Récupérer Le Panier//
function collectCart() {
   let collectingCart = JSON.parse(localStorage.getItem("product"))
   return collectingCart
}

//Fin de l'écoute au clique//



