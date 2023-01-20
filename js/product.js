/*afficher la page du produit*/
const queryStr = window.location.search

const urlSearchParams = new URLSearchParams(queryStr);

const selection = document.querySelector ('color-select');


const id = urlSearchParams.get("id").split("?id=").join("");
console.log(id);
let url= `http://localhost:3000/api/products/${id}`;
console.log(url);

fetch (url)
.then(reponse => reponse.json())

   .then((ficheDuProduit) => {
      console.log(ficheDuProduit)
      document.querySelector(".item__img").innerHTML=`<img src="${ficheDuProduit.imageUrl}" alt="Photographie d'un canapé">`
      document.getElementById("title").innerHTML=`<h1 id="title">${ficheDuProduit.name}</h1>`
      document.getElementById("price").innerHTML=`<span id="price">${ficheDuProduit.price}</span>`
      document.getElementById("description").innerHTML=`<p id="description">${ficheDuProduit.description}</p>`
     ficheDuProduit.colors.forEach(color => document.getElementById("colors").innerHTML+=`<option value="${color}">${color}</option>`)
     
    
   })

   /*Sauvegarde du panier*/

   let cart = []
   
   {
      localStorage.setItem("saveCart", JSON.stringify(saveCart));
   }

   function addToCart (produit){
      let cart = getCart
       
      cart.push(produit);
      saveCart(cart);
   }
   /*--> enregistrer sous forme de tableau pour le récupérer dans le fichier cart
   }*/

   addToCart.onclick = () =>{
      localStorage.setItem ("color", colors.value);
      localStorage.setItem ("quantite", quantity.value);}
  
    

