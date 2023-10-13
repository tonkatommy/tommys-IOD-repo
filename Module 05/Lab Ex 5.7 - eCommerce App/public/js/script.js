import axios from "https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm";

// Declare a global variable used to store the products json array
// This is used for my filter function to filter the categories.
let products;

// Filter function to filter categories
const filtCat = (category) => {
  let filteredProducts = [];
  let dropdownText = "All Items";

  if (category === "all") {
    filteredProducts = products;
  } else {
    dropdownText = titleCase(category);
    products.forEach((product) => {
      if (product.category === category) {
        filteredProducts.push(product);
      }
    });
  }

  document.getElementById("dropdown-menu-btn").innerHTML = dropdownText;
  document.getElementById("category-list-title").innerHTML = dropdownText;
  loadProducts(filteredProducts);
};

// A simple function to convert a sentence to Title Case
const titleCase = (sentence) => {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

// function: showModal
// Passing in a product id will display a modal containing the
// product information.
const showModal = (productId) => {
  // Clear the modal div
  document.getElementById("modalRow").innerHTML = "";
  // Find the product by id
  const product = products.find((value, index) => index === productId - 1);
  // Clone the modal template
  const modalTemplate = document.getElementById("modalTemplate").content.cloneNode(true);
  // Set modal title to product title
  modalTemplate.querySelector(".modal-title").innerHTML = product.title;
  // Set modal description
  modalTemplate.querySelector(".modal-body").innerHTML = product.description;
  // Add the modal to the document
  document.getElementById("modalRow").appendChild(modalTemplate);
  // Show the Modal
  const productModal = new bootstrap.Modal("#productModal");
  productModal.show();
};

// function: loadProducts
// Loops through the array of products passed to it and adds
// template cards populating the data for each card from the json.
const loadProducts = async (products) => {
  // First clear all the cards
  document.getElementById("card-row").innerHTML = "";

  // Loop through each product and add a card
  products.forEach((product) => {
    // Clone the node
    const cardTemplate = document.getElementById("card-template").content.cloneNode(true);
    // Set values, card img src, img alt, title & text
    cardTemplate.querySelector(".card-img-top").src = product.image;
    cardTemplate.querySelector(".card-img-top").alt = product.title;
    cardTemplate.querySelector(".card-title").innerHTML = product.title;
    cardTemplate.querySelector(".card-text").innerHTML = `$${product.price.toFixed(2)}`;

    // Adjust stars to match rating
    // Get each product rating rounded.
    const prodRating = Math.round(product.rating.rate);
    // Loop to set stars related to rating
    // I used a for loop to loop through each 'star' div and apply the
    // correct class according to the value of 'rating'.
    for (let starNum = 1; starNum < 6; starNum++) {
      if (starNum < prodRating) {
        cardTemplate.querySelector(`.star${starNum}`).classList.add("bi-star-fill");
      } else {
        cardTemplate.querySelector(`.star${starNum}`).classList.add("bi-star");
      }
    }

    // Set the category badge
    // Using a switch to determine the category I set the badge variable
    // to the correct font awesome class to display the correct badge.
    // Clear the badge variable first
    let badge = "";
    // Check product category
    switch (product.category) {
      case "men's clothing":
        badge = "fa-mars";
        break;
      case "women's clothing":
        badge = "fa-venus";
        break;
      case "jewelery":
        badge = "fa-gem";
        break;
      case "electronics":
        badge = "fa-microchip";
        break;
      default:
        badge = "fa-tag";
        break;
    }

    // Apply the correct icon class for Font Awesome.
    cardTemplate.querySelector(".category-badge").classList.add(badge);

    // Add event listener to the view more link
    // On click it will call the showModal function
    cardTemplate.querySelector(".view-more-link").addEventListener(
      "click",
      () => {
        showModal(product.id);
      },
      false
    );

    // Finally Add template to the card row in the document.
    document.getElementById("card-row").appendChild(cardTemplate);
  });
};

// Function call to load all products.
// Using axios to get the data
axios
  .get("/shop/products")
  .then((response) => {
    products = response.data;
    loadProducts(products);
  })
  .catch((error) => console.log(error));

// Load the category links
const loadCategories = (categories) => {
  const linkTemplate = document.getElementById("dropdown-item-template").content.cloneNode(true);
  linkTemplate.querySelector(".dropdown-item").innerHTML = "All Items";
  linkTemplate.querySelector(".dropdown-item").addEventListener(
    "click",
    () => {
      filtCat("all");
    },
    false
  );
  document.getElementById("dropdown-menu-list").appendChild(linkTemplate);
  categories.forEach((category) => {
    // Clone the template node
    const linkTemplate = document.getElementById("dropdown-item-template").content.cloneNode(true);
    // Convert the catergory to title case
    const titleCaseString = titleCase(category);
    // Set the link text to the title case category
    linkTemplate.querySelector(".dropdown-item").innerHTML = titleCaseString;
    // Add an event listener to call the function
    linkTemplate.querySelector(".dropdown-item").addEventListener(
      "click",
      () => {
        filtCat(category);
      },
      false
    );
    // Add the template to the dropdown menu
    document.getElementById("dropdown-menu-list").appendChild(linkTemplate);
  });
};

// Using axios to get the category data
axios
  .get("/shop/categories")
  .then((response) => {
    // load the categories
    loadCategories(response.data);
  })
  .catch((error) => console.log(error));
