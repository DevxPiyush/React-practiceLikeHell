import React, { useState } from "react";
import Cards from "./components/Cards.jsx";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    age: "",
  });

  const submithandler = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: formdata.name,
      age: formdata.age
    };
    setUsers((prev) => [...prev, newUser]);
    setFormdata({name: "", age: ""})
  };

  const handledelete = (id) => {
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  return (
    <div
      className={
        "flex  h-screen w-screen p-10 items-center justify-center flex-col gap-10"
      }
    >

      <form className={'flex flex-col gap-10 '} onSubmit={submithandler}>
      <input
        type="text"
        name="name"
        value={formdata.name}
        placeholder={"enter your name"}
        className={"px-4 py-3 bg-gray-300"}
        onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
      />
      <input
        type="number"
        name="age"
        value={formdata.age}
        placeholder={"enter your age"}
        className={"px-4 py-3 bg-gray-300"}
        onChange={(e) => setFormdata({ ...formdata, age: e.target.value })}
      />

      <input
        type="submit"
        className={"px-4 py-2 text-white bg-blue-500 rounded-2xl"}
        // onSubmit={submithandler}
      />
      </form>

      {users.map( (user) =>
      <Cards
          key={user.id}
          values={user}
          handleDelete={handledelete}
      />
      )}
    </div>
  );
};
export default App;
