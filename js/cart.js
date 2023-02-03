/*Pour récupérer le panier sauvegarder dans le localstorage*/
let collectingCart  = JSON.parse(localStorage.getItem("product"))

/*Constante pour un panier vide*/
const blankCart = document.querySelector("cart__items");

/*Fetch de l'API pour récupérer les informations sur le nom, le prix, image ??*/


/*Fonction pour afficher les produits dans la page panier qui sont stockés dans le localStorage*/
function displayCart (){
    if (collectingCart.length > 0){
    collectingCart.forEach((product) => {
        document.getElementById("cart__items").innerHTML += `<article class="cart__item" data-id="${product.kanapId}" data-color="${product.color}">
        <div class="cart__item__img">
          <img src="${product.kanapImg}" alt="${product.kanapAlt}">
        </div><div class="cart__item__content">
          <div class="cart__item__content__description">
            <h2>"${product.name}"</h2>
            <p>"${product.color}"</p>
            <p>"${product.price}"</p>
          </div>
          <div class="cart__item__content__settings">
            <div class="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${product.quantity}">
            </div>
            <div class="cart__item__content__settings__delete">
              <p class="deleteItem">Supprimer</p>
            </div>
          </div>
        </div>
      </article>`;

    })}
}
/*Appel de la fonction d'affichage des produits sur le panier enregistré dans le localStorage*/
displayCart();
/*Fin de l'appel de la fonction d'affichage des produits sur le panier enregistré dans le localStorage*/