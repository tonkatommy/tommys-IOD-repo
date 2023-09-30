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

// Loop through the array of products and add template cards
// populating the data for each card from the json.

const loadProducts = (products) => {
  // const cardRow = document.getElementById("card-row").content.cloneNode(true);
  // if (cardRow.hasChildNodes()) {
  //   while (cardRow.firstChild) {
  //     cardRow.removeChild(cardRow.firstChild);
  //   }
  // }
  document.getElementById("card-row").innerHTML = "";
  products.forEach((product) => {
    // console.log(product.title);
    const cardTemplate = document.getElementById("card-template").content.cloneNode(true);
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
    // Finally Add template to document.
    document.getElementById("card-row").appendChild(cardTemplate);
  });
};

// Function call to load all products.
loadProducts(products);

// Filter function to filter categories

const filterCategories = (category) => {};
