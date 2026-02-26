import React, {useState} from "react";
import Cards from "./components/Cards.jsx";

const App = () => {

  const productsData = [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://plus.unsplash.com/premium_photo-1772065873904-e6b60d3be0e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      price: 2499,
      inCart: false,
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      image: "https://images.unsplash.com/photo-1770347277163-ea9dc1b1ebc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      price: 3499,
      inCart: false,
    },
    {
      id: 3,
      name: "Gaming Mouse",
      image: "https://images.unsplash.com/photo-1770630927895-2057aa3a5673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      price: 1499,
      inCart: false,
    },
    {
      id: 4,
      name: "4K Monitor",
      image: "",
      price: 18999,
      inCart: false,
    },
    {
      id: 5,
      name: "USB-C Hub",
      image: "",
      price: 1299,
      inCart: false,
    },
  ];

  const [cards, setCards] = useState(productsData);

  const cartstatus = (cardsIndex) => {
    setCards((previous) =>
    previous.map((items,index) =>
      index === cardsIndex ? {...items, inCart: !items.inCart} : items
    )
    )
  }

  return <div className={`h-screen  w-screen bg-zinc-100 flex items-center justify-center`}>
    {cards.map((items,index) =>
    <Cards
     values = {items}
     index = {index}
     key = {index}
     setincart = {cartstatus}
    />
    )}
  </div>;
};

export default App;
