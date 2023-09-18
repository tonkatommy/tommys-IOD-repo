const cards = [
  {
    title: "GroB-Gerau",
    text: "ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis",
    btnText: "Go Here",
    imgUrl: "img/card-bg-1.jpg",
  },
  {
    title: "Baracaldo",
    text: "tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing",
    btnText: "Buy Now",
    imgUrl: "img/card-bg-2.jpg",
  },
  {
    title: "Astore",
    text: "arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam",
    btnText: "Follow",
    imgUrl: "img/card-bg-3.jpg",
  },
  {
    title: "Telde",
    text: "Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet",
    btnText: "Follow",
    imgUrl: "img/card-bg-4.jpg",
  },
  {
    title: "Noicattaro",
    text: "vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis",
    btnText: "Read More",
    imgUrl: "img/card-bg-5.jpg",
  },
  {
    title: "Logan City",
    text: "felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis,",
    btnText: "Follow",
    imgUrl: "img/card-bg-6.jpg",
  },
  {
    title: "Alanya",
    text: "pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    btnText: "Go Here",
    imgUrl: "img/card-bg-7.jpg",
  },
  {
    title: "Kavaratti",
    text: "blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna",
    btnText: "Contact",
    imgUrl: "img/card-bg-8.jpg",
  },
];

const addCard = (card) => {
  // clone the template
  const cardTemplate = document
    .getElementById("card-template")
    .content.cloneNode(true);

  // populate the template
  cardTemplate.querySelector(".card-img-top").src = card.imgUrl;
  cardTemplate.querySelector(".card-title").innerText = card.title;
  cardTemplate.querySelector(".card-text").innerText = card.text;
  cardTemplate.querySelector(".my-btn-text").innerText = card.btnText;

  document.querySelector("#my-card-row").appendChild(cardTemplate);
};

cards.forEach((card) => {
  addCard(card);
});
