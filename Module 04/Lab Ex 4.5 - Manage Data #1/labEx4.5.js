import * as news from "./news.js";

const newsItems = news.news;
const maxNews = 6;

function addNewsItem(newsItem) {
  const template = document
    .getElementById("card-template")
    .content.cloneNode(true);
  template.querySelector(".card-title").innerText = newsItem.title;
  template.querySelector(".card-text").innerText = newsItem.content;
  document.querySelector("#my-news-items").appendChild(template);
}

const loadNews = (newsItems) => {
  let element = document.querySelector("#my-news-items");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  newsItems.forEach((newsItem) => {
    addNewsItem(newsItem);
  });
};

const updateNews = () => {
  return new Promise(() => {
    setInterval(() => {
      if (newsItems.length > maxNews) {
        newsItems.pop(newsItems.length);
      }
      loadNews(newsItems);
    }, 5000);
  });
};

loadNews(newsItems);
updateNews();

// event listener for the save news button
document.querySelector("#btn-save-news").addEventListener("click", () => {
  // save input to variables and clear input field
  const newsTitle = document.querySelector("#titleInput").value;
  document.querySelector("#titleInput").value = "";
  const newsText = document.querySelector("#newsInput").value;
  document.querySelector("#newsInput").value = "";
  // create a new news item
  const newItem = {
    id: nextId(newsItems),
    title: newsTitle,
    content: newsText,
  };
  // add new item to start of array
  newsItems.unshift(newItem);
  // check that news array doesn't exceed max items
  while (newsItems.length > maxNews) {
    newsItems.pop();
  }
});

// function to get the next ID number
const nextId = (newsItems) => {
  const sortedArr = newsItems.slice().sort((a, b) => {
    a.id - b.id;
  });
  let lastId = 0;
  sortedArr.forEach((newsItem) => {
    if (newsItem.id != lastId + 1) {
      // found a gap, use this id
      return lastId + 1;
    }
    lastId = newsItem.id;
  });
  // no gaps found, use lat id + 1
  return lastId + 1;
};
