/*Pour récupérer le panier sauvegarder dans le localstorage*/
let collectingCart  = JSON.parse(localStorage.getItem("product"))

/*Constante pour un panier vide*/
const blankCart = document.querySelector("#cart__items");

/*Fonction pour récupérer les informations manquantes*/
async function productData (id){
let url = `http://localhost:3000/api/products/${id}`;
let data = await fetch (url)
return await data.json() //Retour vers les données qui sont fetché//
}

/*Fonction pour afficher les produits dans la page panier qui sont stockés dans le localStorage*/
async function displayCart (){
  if (localStorage.getItem("product")){
    if (collectingCart.length > 0){

    collectingCart.forEach(async(product) =>  {
  /*Appel de la fonction qui cherche les produits sélectionnés dans l'API*/
const productFromApi = await productData(product.kanapId);

        document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id=${product.kanapId}} data-color=${product.color}>
        <div class="cart__item__img">
          <img src=${productFromApi.imageUrl} alt=${productFromApi.altTxt}>
        </div><div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>Modèle: ${productFromApi.name}</h2>
            <p>Couleur: ${product.color}</p>
            <p>Prix: ${productFromApi.price}€</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${product.quantity}>
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>`;

    });
  } else {
    collectingCart =[];
    alert ("Le panier est vide")
    
  }
}
}
/*Appel des fonctions pour l'affichage des produits stockés dans le localStorage*/
displayCart();
totalQuantityCart();
totalPriceCart();
/*Fin de l'appel des fonction pour l'afficahe des produits stockés dans le localStorage*/

/*Fonction pour afficher la quantité total du panier*/
async function totalQuantityCart(){
  let totalQuantity = 0;
  for (let product of collectingCart){
    totalQuantity = totalQuantity + (parseInt(product.quantity))
  }
  console.log(totalQuantity);
 document.getElementById("totalQuantity").textContent = totalQuantity;
}

/*Fonction pour afficher le prix total du panier*/
async function totalPriceCart(displayCart) {
  let total = 0;
  for (let product of collectingCart){
   const productFromApi = await productData(product.kanapId);
    total = total + (parseInt(productFromApi.price) * parseInt(product.quantity))
  }
  console.log (total);
 document.getElementById("totalPrice").textContent = total;
}

/*Fonction pour changer la quantité d'un produit*/
async function editQuantity (displayCart){
  const quantity = await displayCart;
  let itemQuantity = document.querySelectorAll(".itemQuantity");

  itemQuantity.forEach( item => {
  let newQuantityProduct= "";

    item.addEventListener("change",(events))
    {

      console.log(events);
  }   
  });
localStorage.setItem("product", JSON.stringify(collectingCart));
totalQuantityCart();
totalPriceCart();
}

/*Fonction pour supprimer un produit*/
function deleteProduct () {
  let buttonDelete = document.querySelectorAll(".deleteItem");
}
