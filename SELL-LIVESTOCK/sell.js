document.querySelector("form").addEventListener("submit", postLivestock)


    function postLivestock(e){
        e.preventDefault()

let species = document.getElementById("species")
let breed= document.getElementById("breed")
let age = document.getElementById("age")
let weight = document.getElementById("weight")
let healthStatus = document.getElementById("healthStatus")
let price = document.getElementById("price")
let location = document.getElementById("location")
let contact = document.getElementById("contact")
let images = document.getElementById("images")
let additionalInfo = document.getElementById("additionalInfo")

const objectLivestock ={
    image : images.value,
    breed : breed.value,
    description : additionalInfo.value,
    weight : weight.value,
    price : price.value,
    contact : contact.value,
    location : location.value,
    species : species.value,
    


}


        fetch("http://localhost:3000/LatestLivestock",{
            method:'POST',
            header:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(objectLivestock)
        })
        .then(response => response.json())
       .then(alert("Livestock Details submitted, now wait for buyer!!"))
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


