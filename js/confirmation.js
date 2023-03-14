function confirmationOrder() {
    const orderConfirmation = document.getElementById("orderId");
    let url = new URL(location.href); // déclare la variable pour l'URL de la page actuelle//
    let orderKanap = url.searchParams.get('orderId');


    orderConfirmation.innerHTML = `${orderKanap}`; //ajout du numéro de commande dans le message de validation//
}
//appel de la fonction qui confirme la commande//
confirmationOrder();
//On vide le localStorage après confirmation de la commande//
localStorage.removeItem("product");