// education array of objects

let products = [
    {
      image: put url link ,
      size:  3,
      desc: "Golfer-T/Denim shorts outfit",
      price: "R1200",
      button: "Buy now",
    },
    {
     image:  ,
      size:   3,
      desc: "Crop-T/Denim Rip jeans outfit.",
      price: "R1600",
      button:"Buy now"
    },
    {
      image: ,
      size:   3,
      desc: "Crop-T/Denim Rip jeans outfit.",
      price: "R1800",
      button:"Buy now"
    },
    {
      image:  ,
      size:  3,
      desc: "Crew Neck/Denim jeans outfit.Bag included.",
      price: "R4500",
      button:"Buy now"
    },
    {
      image:  ,
      size:  4,
      desc: "Nike Limited Edition Purple Emojie Sneaker.",
      price: "R6500",
      button:"Buy now"
    },
    {
        image:  ,
        size: 4,
        desc: "Nike Rose Pink Sneaker.",
        price: "R4500",
        button:"Buy now"
      },
      { 
        image:  ,
        size: 3,
        desc: "Crew Neck Base Ball outfit..",
        price: "R2500",
        button:"Buy now"
      },
      { 
        image:  ,
        size: 3,
        desc: "White Burberrys-T/Denim jeans outfit.",
        price: "R2000",
        button:"Buy now"
      },
      { 
        image:  ,
        size: 3,
        desc: "Cardigan Jersey/Denim jeans outfit.",
        price: "R2500",
        button:"Buy now"
      },
      {
        image:  ,
        size: 3,
        desc: "LV Crew Neck/Corduroy Pants outfit.",
        price: "R7500",
        button:"Buy now"
      },
      { 
        image: ,
        size: 4,
        desc: "Spartan Dunks Sneaker.",
        price: "R4500",
        button:"Buy now"
      },
      {
        image:  ,
        size: 4,
        desc: "University Blue Dunks Sneaker.",
        price: "R4500",
        button:"Buy now"
      },
      {
        image: ,
        size: "4",
        desc: "Travis Scott Limited Edition Nike Motcha Sneaker.",
        price: "R22000",
        button:"Buy now"
      },
  ];
  
  let disProducts = document.querySelector(".products .row");
  products.forEach((product) => {
    disProducts.innerHTML += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-${product.size} my-4">
        <div class="card">
            <img src="https://i.postimg.cc/rFjGhG7D/shoe3.jpg" class="card-img-top" style="padding: 0.6rem;" height="450" alt="...">
            <div class="card-body">
            <h5 class="card-title">R&G</h5>
            <p class="card-text">${product.desc}</p>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
        </div>
    </div>`
  });