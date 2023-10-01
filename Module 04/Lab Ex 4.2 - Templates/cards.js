// function addCard(cardTitle, cardText) {
//   // clone the template
//   const template = document
//     .getElementById("card-template")
//     .content.cloneNode(true);
//   // populate the template
//   template.querySelector(".card-title").innerText = cardTitle;
//   template.querySelector(".card-text").innerText = cardText;
//   // include the populated template into the page
//   document.querySelector("#card-list").appendChild(template);
// }

// const data = [
//   { name: "bob", age: 23 },
//   { name: "alexa", age: 39 },
// ];

// data.forEach((currentItem) => {
//   addCard(currentItem.name, currentItem.age);
// });

const artists = [
  {
    name: "Van Gogh",
    portfolio: [
      {
        title: "portrait",
        url: "https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image",
      },
      {
        title: "sky",
        url: "https://mymodernmet.com/wp/wp-content/uploads/2020/11/White-house-night-van-goh-worldwide-2.jpg",
      },
    ],
  },

  {
    name: "Picasso",
    portfolio: [
      {
        title: "Weeping Woman",
        url: "https://upload.wikimedia.org/wikipedia/en/1/14/Picasso_The_Weeping_Woman_Tate_identifier_T05010_10.jpg",
      },
      {
        title: "Old Guitarist",
        url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Old_guitarist_chicago.jpg/800px-Old_guitarist_chicago.jpg",
      },
    ],
  },

  {
    name: "Rembrandt",
    portfolio: [
      {
        title: "Storm on the Sea of Galilee",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg/800px-Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg",
      },
      {
        title: "Abduction of Europa",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Rembrandt_Harmensz._van_Rijn_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg/1280px-Rembrandt_Harmensz._van_Rijn_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg",
      },
    ],
  },
];

function addArtistCard(artist) {
  //
  if (artist.portfolio.length > 1) {
  }

  // clone the template
  // console.log(artist.portfolio[0].title);
  // const artistTemplate = document
  //   .getElementById("artist-card-template")
  //   .content.cloneNode(true);

  // populate the template

  artist.portfolio.forEach((element) => {
    // console.log(artist.name);
    const artistTemplate = document
      .getElementById("artist-card-template")
      .content.cloneNode(true);
    artistTemplate.querySelector(".card-title").innerText = artist.name;
    artistTemplate.querySelector(".card-text").innerText = element.title;
    artistTemplate.querySelector(".card-img-top").src = element.url;
    // console.log(temp2.querySelector(".card-title").innerText);
    document.querySelector("#card-list").appendChild(artistTemplate);
  });

  // let artistPortfolioTemplate;

  // artist.portfolio.forEach((element) => {
  //   artistPortfolioTemplate = document
  //     .getElementById("artist-portfolio-card-template")
  //     .content.cloneNode(true);

  //   console.log(artistPortfolioTemplate);

  //   console.log(element.title);

  //   artistPortfolioTemplate.querySelector(".artist-card-title").innerText =
  //     element.title;
  //   artistPortfolioTemplate.querySelector(".artist-url").innerText =
  //     element.url;

  //   console.log("after");

  //   artistTemplate
  //     .querySelector(".artist-card-name")
  //     .appendChild(artistPortfolioTemplate);
  // });

  // include the populated template into the page
  // document.querySelector("#card-list").appendChild(artistTemplate);
}

artists.forEach((artist) => {
  addArtistCard(artist);
});
