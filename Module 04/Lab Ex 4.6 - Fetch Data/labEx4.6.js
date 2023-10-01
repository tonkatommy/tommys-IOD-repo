const fetchData = (url) => {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Fetch Unsuccessful");
      }
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach((item) => {
        addNewsItem(item);
      });
    });
};

const addNewsItem = (newsItem) => {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = newsItem.title;
  template.querySelector(".card-text").innerText = newsItem.body;
  document.querySelector("#news-row").appendChild(template);
};

const newsItems = fetchData(
  "https://jsonplaceholder.typicode.com/posts?_limit=12"
);
