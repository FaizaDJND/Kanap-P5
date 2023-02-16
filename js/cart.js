/*Pour récupérer le panier sauvegarder dans le localstorage*/
let collectingCart  = JSON.parse(localStorage.getItem("product"))

/*Constante pour un panier vide*/
const blankCart = document.querySelector("#cart__items");

/*Fonction pour récupérer les informations manquantes*/
async function productData (id){
let url = `http://localhost:3000/api/products/${id}`;
let data = await fetch (url)
return await data.json() //Retour vers les données qui sont fetché//
console.log(data);
}

/*Fonction pour afficher les produits dans la page panier qui sont stockés dans le localStorage*/
async function displayCart (){
  if (localStorage.getItem("product")){
    if (collectingCart.length > 0){

    collectingCart.forEach(async(product) =>  {
  /*Appel de la fonction qui cherche les produits sélectionnés dans l'API*/
const productFromApi = await productData(product.kanapId);

        document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${product.kanapId}" data-color="${product.color}">
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
              <input type="number" id=${product.kanapId} class="itemQuantity" name="itemQuantity" min="1" max="100" value=${product.quantity}>
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
async function main () {
await displayCart();
await totalQuantityCart();
await totalPriceCart();
await editQuantity(collectingCart);
await deleteProduct(collectingCart);
};
main ();
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
function editQuantity (){
  let itemQuantity = document.querySelectorAll(".itemQuantity");

  itemQuantity.forEach((input) => {
  //ecoute de l'évenement pour changer la quantité//
    input.addEventListener("change", async (evenement) => {
        let inputQuantity = evenement.target
        console.log(inputQuantity)
        let inputQuantityClosest = inputQuantity.closest(".cart__item")
        console.log(inputQuantityClosest)
        let productId = inputQuantityClosest.dataset.id
        console.log(productId)
        let productColor = inputQuantityClosest.dataset.color
        console.log(productColor)
        let cart =  JSON.parse(localStorage.getItem("product"))
        console.log(cart)
        let product = cart.find((cartProduct) => {
        //Si la condition est vrai retourne sur la condition//
          return productId == cartProduct.kanapId && productColor == cartProduct.color
        })
        console.log(cart)
        product.quantity = Number (inputQuantity.value)
        console.log (cart)
        localStorage.setItem("product", JSON.stringify(cart));
                /*totalQuantityCart();
                  totalPriceCart();*/
      });
    })
}

/*Fonction pour supprimer un produit*/
function deleteProduct () {
const buttonDelete = document.querySelectorAll(".deleteItem") 
buttonDelete.forEach((item)=> {
  item.addEventListener("click", async (evenement) =>
  {
  //Récupére l'ID + couleur du produit concerné dans le local storage//
  //On cible dans le parent le plus proche l'id et la couleur//
const deleteItem = evenement.target.closest(".cart__item").dataset.id;
const deleteItemColor = evenement.target.closest(".cart__item").dataset.color;
evenement.target.closest(".cart__item").remove();
let collecting  = await JSON.parse(localStorage.getItem("product"))
console.log(collecting)
const searchDeletingProduct = collecting.findIndex((item) => {
  return item.id != deleteItem || item.color != deleteItemColor
})
console.log(searchDeletingProduct)
//on ouvre la variable pour supprimer l'élément qu'on a ciblé//
collecting.splice(searchDeletingProduct,1)
  localStorage.setItem("product", JSON.stringify(collecting))
  alert ("Le produit a bien été supprimé du panier");
  })
  totalQuantityCart();
  totalPriceCart();
 
});
}

// Formulaire//
//Constante pour le formulaire//
const name = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const adress = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");
