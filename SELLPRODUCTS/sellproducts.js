document.querySelector("form").addEventListener("submit", postProduct)


    function postProduct(e){
        e.preventDefault()

let productName = document.getElementById("productName")
let productDescription = document.getElementById("productDescription")
let productPrice = document.getElementById("productPrice")
let productQuantity = document.getElementById("productQuantity")
let images = document.getElementById("images")


const objectProduct ={
   
    breed : productName.value,
    description : productDescription.value,
    price : productPrice.value,
    weight : productQuantity.value,
    image : images.value,
    

}


        fetch("http://localhost:3000/LatestProduct",{
            method:'POST',
            header:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(objectProduct)
        })
        .then(response => response.json())
       .then(alert("Products Details submitted, now wait for buyer!!"))
    }



function addProduct(product){
    console.log(product)
  //   let row = document.getElementById("card")
  //   let div = document.createElement("div")
  //   div.classList.add("col-3")
  //   div.innerHTML = `<div class="card">
  //   <img src="${movie.Poster}" class="card-img-top" alt="..." height="300px">
  //   <div class="card-body">
  //     <h5 class="card-title hind-bold ">${movie.Title}</h5>
  //     <p class="card-text hind-light">${movie.Plot}.</p>
  //     <a href="${movie.href}" class="btn btn-primary">Watch</a>
  //     <button class="btn bg-danger"><i class="fa fa-trash"></i> Trash</button>
  //   </div>
  // </div>`
  

  // row.appendChild(div)

  // div.querySelector("button").addEventListener("click", function(){
    

  //   deleteData(product.id)



  // })

  

  
  
}

  // function deleteData(id){
   
  //   fetch(`http://localhost:3000/Latest/${id}`, {
  //           method:'DELETE',
  //           header:{
  //               'content-Type':'application/json'
  //           }
  //       })
  //       .then(response => response.json())

  // }




// function getContent(movies){
//     fetch("http://localhost:3000/movies")
//     .then(response => response.json())
//     .then(movies =>{
//         movies.forEach(addmovie)
       
//     })
    
// }






// document.addEventListener("DOMContentLoaded", function(){
//  getContent();



// })


