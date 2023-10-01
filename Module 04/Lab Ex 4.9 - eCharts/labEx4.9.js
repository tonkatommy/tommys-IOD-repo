// Initialise the echarts instance based on the prepared div
let myChart = echarts.init(document.getElementById("main"));

// Specify the configuration items and data for the chart
let options = {};

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    // use this JSON to find and set correct option data for the chart
    let catCount = {};

    json.map((cat) => {
      let tempCat = cat.category;
      if (!catCount[tempCat]) {
        catCount[tempCat] = 1;
      } else {
        catCount[tempCat]++;
      }
    });
    console.log(catCount);
    options = {
      title: { text: "Fake Store Categories" },
      xAxis: {
        data: Object.keys(catCount),
      },
      yAxis: {},
      series: [
        {
          name: "# products",
          type: "bar",
          data: Object.values,
        },
      ],
    };
  })
  .then(() => {
    // Display the chart
    myChart.setOption(options);
  });
