const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "FIXIE",
    price: 1999,
    colors: [
      {
        code: "White",
        img: "./img/fixie.jpg",
      },
      {
        code: "Orange",
        img: "./img/product/orenfixie.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "BMX",
    price: 1800,
    colors: [
      {
        code: "Black",
        img: "./img/product/bmx2.webp",
      },
      {
        code: "green",
        img: "./img/product/greenbmx2.webp",
      },
    ],
  },
  {
    id: 3,
    title: "EVEE BIKE",
    price: 2900,
    colors: [
      {
        code: "lightgray",
        img: "./img/product/ev bike.webp",
      },
      {
      },
    ],
  },
  {
    id: 4,
    title: "GRAVEL BIKE",
    price: 1600,
    colors: [
      {
        code: "black",
        img: "./img/product/gravel.webp",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "MOUNTAIN BIKE",
    price: 1999,
    colors: [
      {
        code: "gray",
        img: "./img/product/mountain bike.webp",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
  {
    id: 4,
    title: "ROAD BIKE",
    price: 999,
    colors: [
      {
        code: "black",
        img: "./img/product/roadd.webp",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "RM" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});