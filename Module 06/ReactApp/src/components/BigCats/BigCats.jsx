import { useState } from "react";
import SingleCat from "./SingleCat";
import { AddCatForm } from "./AddCatForm";

let cats = [
    {
        id: 1,
        name: "Cheetah",
        latinName: "Acinonyx jubatus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg",
    },
    {
        id: 2,
        name: "Cougar",
        latinName: "Puma concolor",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg",
    },
    {
        id: 3,
        name: "Jaguar",
        latinName: "Panthera onca",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg",
    },
    {
        id: 4,
        name: "Leopard",
        latinName: "Panthera pardus",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg",
    },
    {
        id: 5,
        name: "Lion",
        latinName: "Panthera leo",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg",
    },
    {
        id: 6,
        name: "Snow leopard",
        latinName: "Panthera uncia",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG",
    },
    {
        id: 7,
        name: "Tiger",
        latinName: "Panthera tigris",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg",
    },
];

const BigCats = (props) => {
    const [currentCats, setCurrentCats] = useState([...cats]);

    const sortList = () => {
        console.log("sortList called");
        const sortedList = [...currentCats].sort((a, b) =>
            a.name > b.name ? 1 : -1
        );
        setCurrentCats(sortedList);
    };

    const reverseList = () => {
        console.log("reverseList called");
        const list = [...currentCats];
        const reversedList = list.reverse();
        setCurrentCats(reversedList);
    };

    const filterList = (filter) => {
        console.log("filterList called");
        console.log(filter);
        const filteredList = [...currentCats].filter((cat) =>
            cat.latinName.includes(filter)
        );
        setCurrentCats(filteredList);
    };

    const resetList = () => {
        console.log("resetList called");
        setCurrentCats(cats);
    };

    const onAddCat = (newCat) => {
        newCat.id = currentCats.length + 1;
        cats.push(newCat);
        setCurrentCats([...cats]);
    };

    const deleteCat = (catId) => {
        cats = cats.filter((cat) => cat.id != catId);
        setCurrentCats([...cats]);
    };

    return (
        <>
            <h1>Big Cats</h1>
            <button onClick={sortList}>Sort A-Z</button>
            <button onClick={reverseList}>Reverse List</button>
            <button onClick={() => filterList("Panthera")}>
                Filter: Panthera
            </button>
            <button onClick={resetList}>Reset List</button>
            <AddCatForm onAddCat={onAddCat}></AddCatForm>
            {currentCats.map((cat) => {
                return (
                    <SingleCat
                        key={cat.id}
                        id={cat.id}
                        name={cat.name}
                        latinName={cat.latinName}
                        image={cat.image}
                        onDelete={deleteCat}></SingleCat>
                );
            })}
        </>
    );
};

export default BigCats;

// (
//   {cats.map((cat) => {
//   return <li key={cat.name}>{cat.name}</li>;
// })
// }}
// )}
