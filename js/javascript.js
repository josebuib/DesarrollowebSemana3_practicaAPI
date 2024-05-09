
let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`
  
    fetch(url)
        // Le da formato a la informacion de la API
        .then(res => res.json())
        // Procesar los datos
        .then( data => {

            console.log(data.drinks)

            let html = ` <div class="row text-center">`
            for (const coctel of data.drinks) {
                html += `
                           <div class="border border-primary rounded character col-3 mt-3 mb-3 ms-1">
                               <img src="${coctel.strDrinkThumb}" class="img-fluid">
                               <div>
                                   <h5> <b> ${coctel.strCategory} - ${coctel.strGlass} </b> </h5>
                                   <p>${coctel.strInstructionsES}</p>
                               </div>
                               <ul class="list-group list-group-flush">
                                   <li class="list-group-item">${coctel.strIngredient1}</li>
                                   <li class="list-group-item">${coctel.strIngredient2}</li>
                                   <li class="list-group-item">${coctel.strIngredient3}</li>
                               </ul>
                               <div class="m-2">
                                   <a href="${coctel.strDrinkThumb}" class="card-link">Enlace de Imagen</a>
                               </div>
                           </div>`
           }
           html += `</div>`
           
              
   
   
   
               document.getElementById("charContent").innerHTML = html
       })
   

     


