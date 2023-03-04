//Pour récupérer le panier sauvegarder dans le localstorage//
let collectingCart = JSON.parse(localStorage.getItem("product"));

//Constante pour un panier vide//
const blankCart = document.querySelector("#cart__items");

//Fonction pour récupérer les informations manquantes//
async function productData(id) {
  let url = `http://localhost:3000/api/products/${id}`;
  let data = await fetch(url);
  return await data.json(); //Retour vers les données qui sont fetché//
}

//Fonction pour afficher les produits dans la page panier qui sont stockés dans le localStorage//
async function displayCart() {
  if (localStorage.getItem("product")) {
    if (collectingCart.length > 0) {
      collectingCart.forEach(async (product) => {
        //Appel de la fonction qui cherche les produits sélectionnés dans l'API//
        const productFromApi = await productData(product.kanapId);

        document.getElementById(
          "cart__items"
        ).innerHTML += `<article class="cart__item" data-id="${product.kanapId}" data-color="${product.color}">
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
      collectingCart = [];
      alert("Le panier est vide");
    }
  }
}

//Fonction pour afficher la quantité total du panier//
async function totalQuantityCart() {
  let totalQuantity = 0;
  for (let product of collectingCart) {
    totalQuantity = totalQuantity + parseInt(product.quantity);
  }
  document.getElementById("totalQuantity").textContent = totalQuantity;
}

//Fonction pour afficher le prix total du panier//
async function totalPriceCart(displayCart) {
  let total = 0;
  for (let product of collectingCart) {
    const productFromApi = await productData(product.kanapId);
    total = total + parseInt(productFromApi.price) * parseInt(product.quantity);
  }
  document.getElementById("totalPrice").textContent = total;
}

//Fonction pour changer la quantité d'un produit//
function editQuantity() {
  let itemQuantity = document.querySelectorAll(".itemQuantity");

  itemQuantity.forEach((input) => {
    //ecoute de l'évenement pour changer la quantité//
    input.addEventListener("change", async (evenement) => {
      let inputQuantity = evenement.target;
      let inputQuantityClosest = inputQuantity.closest(".cart__item");
      let productId = inputQuantityClosest.dataset.id;
      let productColor = inputQuantityClosest.dataset.color;
      let cart = JSON.parse(localStorage.getItem("product"));
      
      let product = cart.find((cartProduct) => {
        //Si la condition est vrai retourne sur la condition//
        return (
          productId == cartProduct.kanapId && productColor == cartProduct.color
        );
      });
      product.quantity = Number(inputQuantity.value);
      localStorage.setItem("product", JSON.stringify(cart));
      totalQuantityCart();
      totalPriceCart();
      location.reload();
    });
  });
}

//Fonction pour supprimer un produit//
function deleteProduct() {
  const buttonDelete = document.querySelectorAll(".deleteItem");
  buttonDelete.forEach((item) => {
    item.addEventListener("click", async (evenement) => {
      //Récupére l'ID + couleur du produit concerné dans le local storage//
      //On cible dans le parent le plus proche l'id et la couleur//
      const deleteItem = evenement.target.closest(".cart__item").dataset.id;
      const deleteItemColor =
        evenement.target.closest(".cart__item").dataset.color;
      evenement.target.closest(".cart__item").remove();
      let collecting = await JSON.parse(localStorage.getItem("product"));
      console.log(collecting);
      const searchDeletingProduct = collecting.findIndex((item) => {
        return item.id != deleteItem || item.color != deleteItemColor;
      });
  
      //on ouvre la variable pour supprimer l'élément qu'on a ciblé//
      collecting.splice(searchDeletingProduct, 1);
      localStorage.setItem("product", JSON.stringify(collecting));
      alert("Le produit a bien été supprimé du panier");
      location.reload();
    });
    totalQuantityCart();
    totalPriceCart();
  });
}

//------------------ Formulaire----------------------//

//Constantes pour les coordonnées du formulaire//
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const adress = document.getElementById("address");
const city = document.getElementById("city");
const email = document.getElementById("email");

//Variables Constantes pour les messages d'erreurs//
const firstNameError = document.querySelector("#firstNameErrorMsg");
const lastNameError = document.querySelector("#lastNameErrorMsg");
const adressError = document.querySelector("#addressErrorMsg");
const cityError = document.querySelector("#cityErrorMsg");
const emailError = document.querySelector("#emailErrorMsg");

//Constantes pour les RegExp du formulaire//
const firstNameReg = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const lastNameReg = firstNameReg;
const adressReg = /^[#.0-9a-zA-ZÀ-ÿ\s,-]{2,60}$/;
const cityReg = firstNameReg;
const emailReg =
  /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

//Ecoute du bouton Order au clique//
const orderButton = document.querySelector("#order");

orderButton.addEventListener("click", async (e) => {
  e.preventDefault; //évite de recharger la page par défaut//
  //Variables pour récupérer les input du formulaire//
  let firstNameBox = firstName.value;
  let lastNameBox = lastName.value;
  let adressBox = adress.value;
  let cityBox = city.value;
  let emailBox = email.value;
  valideOrder(firstNameBox, lastNameBox, adressBox, cityBox, emailBox);
});
//Conditions de validation du formulaire si mal renseigné avec les messages d'erreurs pour chaque RegExp//
function valideOrder(firstName, lastName, adress, city, email) {
  let collectOrder = JSON.parse(localStorage.getItem("product"));
  let formOk = true;
  if (!firstNameReg.test(firstName) || firstName === null) {
    firstNameError.innerHTML = "Veuillez renseigner un prénom valide";
    formOk = false;
  } else {
    firstNameError.innerHTML = "";
  }
  if (!lastNameReg.test(lastName) || lastName === null) {
    lastNameError.innerHTML = "Veuillez renseigner un nom de famille valide";
    formOk = false
  } else {
    lastNameError.innerHTML = "";
  }
  if (!adressReg.test(adress)  || adress === null) {
    adressError.innerHTML = "Veuillez renseigner une adresse valide";
    formOk = false;
  } else {
    adressError.innerHTML = "";
  }
  if (!cityReg.test(city) || city === null) {
    cityError.innerHTML = "Veuillez renseigner une ville valide";
    formOk = false;
  } else {
    cityError.innerHTML = "";
  }
  if (!emailReg.test(email) || email === null) {
    emailError.innerHTML = "Veuillez renseigner une adresse email valide";
    formOk = false;
  } 
  else {
    emailError.innerHTML = "";
  }
  // Si le formulaire est bien renseigné avec des données valides//
  if (formOk) {
    var contactDetails = {
      firstName: firstName,
      lastName: lastName,
      address: adress,
      city: city,
      email: email,
    };
    alert("Formulaire OK");
  
  //Créer un tableau vide pour récupérer les produits du panier depuis le localStorage//
  let idProduct = [];
  //Methode POST pour ne prendre que l'ID des produits du localStorage
  for (let kanapId of collectOrder) {
    idProduct.push(kanapId.kanapId);
  }
  //Infos de la commande//
  let finalOrder = { contact: contactDetails, products: idProduct };
  //Récupère toute la commande avec fetch POST vers API//
  const orderId = fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    body: JSON.stringify(finalOrder),
    headers: {
      "content-type": "application/json",
    },
  });
  //Réponse de l'API//
  orderId.then(async (response) => {
    responseFromApi = await response.json();
    window.location.href = `confirmation.html?orderId=${responseFromApi.orderId}`;
    console.log(responseFromApi.orderId);
  });
}
}

/*Appel des toutes les  fonctions pour l'affichage des produits stockés dans le localStorage*/
async function main() {
  await displayCart();
  await totalQuantityCart();
  await totalPriceCart();
  await editQuantity(collectingCart);
  await deleteProduct(collectingCart);
}
main();
/*Fin de l'appel des fonction pour l'afficahe des produits stockés dans le localStorage*/