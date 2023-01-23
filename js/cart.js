//Récupération des données depuis le fichier JSON//
let url= `http://localhost:3000/api/products/`;
fetch (url)
.then ((reponse)=> reponse.json())
.then ((listeDesProduits)=> 
{
    console.log(listeDesProduits);

})

/*pour récupérer le panier sauvegarder dans le localstorage*/ 
