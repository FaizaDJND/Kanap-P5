//afficher la page du produit//
let url= 'http://localhost:3000/api/products';

fetch(url)
 .then(reponse => reponse.json())

 .then((ficheDuProduit) => {
    console.log(ficheDuProduit);

 const queryStr ="NomDuProduit=name&description=description";
 const numberPrice ="price";
 const urlSearchParams = new URLSearchParams(queryStr)
 const nomDuProduit = urlSearchParams.get(title)

 for (const [key, value] of urlSearchParams) {
    console.log (`${key}=> ${value}`)
 }

})


document.getElementById('item').insertAdjacentHTML("beforeend")