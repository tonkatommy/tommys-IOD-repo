const axios = require("axios");
const fs = require("fs");

const options = {
  method: "GET",
  url: "https://watch-database1.p.rapidapi.com/all-family-by/brandname/Apple",
  headers: {
    "X-RapidAPI-Key": "61452dd577msh0f6004d4e1c9613p14e0adjsn62e67002c729",
    "X-RapidAPI-Host": "watch-database1.p.rapidapi.com",
  },
};

async function saveData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    fs.writeFile(
      "./apple-families.json",
      JSON.stringify(response.data),
      (err) => {
        console.log(`FileSystem: ${err}`);
      }
    );
  } catch (error) {
    console.error(`try-catch: ${error}`);
  }
}

saveData();
