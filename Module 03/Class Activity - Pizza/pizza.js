function start() {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Started preparing pizza... (500ms)");
      res();
    }, 500);
  });
}

const base = function () {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Made the base (1000ms)");
      res();
    }, 1000);
  });
};

const cheese = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Added the sauce and cheese (1500ms)");
      res();
    }, 1500);
  });
};

const toppings = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Added the pizza toppings (1800ms)");
      res();
    }, 1800);
  });
};

const cook = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Cooked the pizza (4000ms)");
      res();
    }, 4000);
  });
};

const ready = () => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("Pizza is ready (1500ms)");
      res();
    }, 1500);
  });
};

// Calling the pizza sequence

async function makePizza() {
  await start();
  await base();
  await cheese();
  await toppings();
  await cook();
  await ready();
}

makePizza().then(() => {
  console.log("Pizza ready for Tommy!");
});
