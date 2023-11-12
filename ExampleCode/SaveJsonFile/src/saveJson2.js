const axios = require("axios");
const fs = require("fs");

axios({
  method: "GET",
  url: "https://watch-database1.p.rapidapi.com/all-models-by/brandname/TAG%20Heuer/family/Formula 1",
  headers: {
    "X-RapidAPI-Key": "61452dd577msh0f6004d4e1c9613p14e0adjsn62e67002c729",
    "X-RapidAPI-Host": "watch-database1.p.rapidapi.com",
  },
  responseType: "stream",
})
  .then(function (response) {
    // console.log(response.data);
    response.data.pipe(fs.createWriteStream("Formula 1.json"));
  })
  .catch((err) => {
    console.log(err);
  });
