import React, { useState } from "react";
import Cards from "./Components/cards.jsx";

const App = () => {
  const initialUsers = [
    { id: 1, name: "Piyush", editing: false },
    { id: 2, name: "Rohan", editing: false },
    { id: 3, name: "Amit", editing: false },
  ];

  const [edit, setEdit] = useState(initialUsers);

  // edit function
  const handleedit = (id) => {
    setEdit((previous) => {
      return previous.map((item) =>
        item.id === id
          ? { ...item, editing: true }
          : { ...item, editing: false },
      );
    });
  };

  // upon editing it is important to save as well
  const handlesave = (id, newName) => {
    setEdit((previous) =>
      previous.map((item) =>
        item.id === id ? { ...item, name: newName, editing: false } : item,
      ),
    );
  };

  return (
    <div className={`flex items-center justify-center m-10`}>
      {edit.map((item) => (
        <Cards
          values={item}
          //   key={index}
          handleedit={handleedit}
          handlesave={handlesave}
        />
      ))}
    </div>
  );
};
export default App;
