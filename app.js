var carObject = {
    vehicle: "Car",
    imageUrl: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80",
    farePerKilo: 3,
    capacity: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro tempore quas, et a atque sed libero fugit aliquid pariatur."
};
var bikeObject = {
    vehicle: "Bike",
    imageUrl: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 2,
    capacity: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro tempore quas, et a atque sed libero fugit aliquid pariatur."
};
var busObject = {
    vehicle: "Bus",
    imageUrl: "https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    farePerKilo: 3,
    capacity: 40,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro tempore quas, et a atque sed libero fugit aliquid pariatur."
};

function displayServices(service){
    const mainSection = document.getElementById("main-section")

    const div = document.createElement("div")

    div.innerHTML=`
    
    <div class="card mt-3 mx-auto" style="max-width: 800px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src=${service.imageUrl} class="img-fluid rounded-start h-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Transport Mood ${service.vehicle}</h5>
                  <p class="card-text">${service.description}</p>
                  <p class="card-text"><small class="text-body-secondary">Fare per kilo: ${service.farePerKilo}</small>  <small class="text-body-secondary">Capacity: ${service.capacity}</small></p>
                </div>
              </div>
            </div>
          </div>
    
    `
    mainSection.appendChild(div)
}

displayServices(carObject)
displayServices(busObject)
displayServices(bikeObject)