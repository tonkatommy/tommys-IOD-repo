/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Make a request for a user with a given ID
const products = await axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    // handle success
    // console.log(response);
    return response.data;
  })
  .then((json) => {
    console.log(json);
    return json;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

const categories = await axios
  .get("https://fakestoreapi.com/products/categories")
  .then((response) => {
    // handle success
    // console.log(response);
    return response.data;
  })
  .then((json) => {
    console.log(json);
    return json;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

const titleCase = (sentence) => {
  return sentence
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

const showModal = (productId) => {
  // Clear the modal div
  document.getElementById("modalRow").innerHTML = "";
  // Find the product by id
  const product = products.find((value, index) => index === productId - 1);
  const modalTemplate = document.getElementById("modalTemplate").content.cloneNode(true);

  console.log(modalTemplate.querySelector(".modal-title").innerHTML);
  // Set modal title to product title
  modalTemplate.querySelector(".modal-title").innerHTML = product.title;
  modalTemplate.querySelector(".modal-body").innerHTML = product.description;

  // Add the modal to the document
  document.getElementById("modalRow").appendChild(modalTemplate);

  // Show the Modal
  const productModal = new bootstrap.Modal("#productModal");
  productModal.show();

  // console.log(product.description);
};

// Loops through the array of products and adds template cards
// populating the data for each card from the json.
const loadProducts = (products) => {
  // First clear all the cards
  document.getElementById("card-row").innerHTML = "";

  // Loop through each product and add a card
  products.forEach((product) => {
    // console.log(product.title);

    // Clone the node
    const cardTemplate = document.getElementById("card-template").content.cloneNode(true);
    // Set values
    cardTemplate.querySelector(".card-img-top").src = product.image;
    cardTemplate.querySelector(".card-img-top").alt = product.title;
    cardTemplate.querySelector(".card-title").innerHTML = product.title;
    cardTemplate.querySelector(".card-text").innerHTML = `$${product.price.toFixed(2)}`;

    // Adjust stars to match rating
    // Get each product rating rounded.
    const prodRating = Math.round(product.rating.rate);
    // Loop to set stars related to rating
    // I used a for loop to loop through each 'star' div and apply the
    // correct start according to the value of 'rating'.
    for (let starNum = 1; starNum < 6; starNum++) {
      if (starNum < prodRating) {
        cardTemplate.querySelector(`.star${starNum}`).classList.add("bi-star-fill");
      } else {
        cardTemplate.querySelector(`.star${starNum}`).classList.add("bi-star");
      }
    }

    // Set the category badge
    let badge = "";
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
        badge = "";
        break;
    }
    // Check if badge has a value.
    if (badge) {
      // Apply the correct icon class for Font Awesome.
      cardTemplate.querySelector(".category-badge").classList.add(badge);
    } else {
      // If there is no category then hide the icon.
      cardTemplate.querySelector(".badge").classList.add("visually-hidden");
    }

    // Add event listener to the view more link
    cardTemplate.querySelector(".view-more-link").addEventListener(
      "click",
      () => {
        // console.log("clicked");
        showModal(product.id);
      },
      false
    );

    // Finally Add template to document.
    document.getElementById("card-row").appendChild(cardTemplate);
  });
};

// Function call to load all products.
loadProducts(products);

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

loadCategories(categories);

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
    console.log(filteredProducts);
  }

  document.getElementById("dropdown-menu-btn").innerHTML = dropdownText;
  document.getElementById("category-list-title").innerHTML = dropdownText;
  loadProducts(filteredProducts);
};
