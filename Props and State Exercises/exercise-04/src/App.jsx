import React, { useState } from 'react'
import Cards from "./Components/Cards.jsx";

const App = () => {

    const [todos, setTodos] = useState([]);
    const [formdata, setformdata] = useState({
        title: "",
    });

    // add todo
    const submithandler = (e) => {
        e.preventDefault();

        const newtodo = {
            id: Date.now(),
            title: formdata.title,
            isCompleted: false,
            isEditing: false
        };

        setTodos(prev => [...prev, newtodo]);
        setformdata({ title: "" });
    };

    // delete todo
    const deletehandler = (id) => {
        setTodos(prev => prev.filter(todo => todo.id !== id));
    };

    // toggle complete
    const completedhandler = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
            )
        );
    };

    // start editing
    const editinghandler = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, isEditing: true }
                    : { ...todo, isEditing: false }
            )
        );
    };

    // save edited title
    const saveEditHandler = (id, newTitle) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id
                    ? { ...todo, title: newTitle, isEditing: false }
                    : todo
            )
        );
    };

    return (
        <div className="flex justify-center items-center flex-col h-screen w-screen bg-gray-100">

            <form
                className="bg-white shadow-lg rounded-xl p-6 flex gap-4 w-[400px] mb-30"
                onSubmit={submithandler}
            >

                <input
                    type="text"
                    placeholder="Enter todo title..."
                    value={formdata.title}
                    onChange={(e) => setformdata({ title: e.target.value })}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                    Add
                </button>

            </form>

            {todos.map((item) => (
                <Cards
                    key={item.id}
                    value={item}
                    completed={completedhandler}
                    editing={editinghandler}
                    deleted={deletehandler}
                    submitted={saveEditHandler}
                />
            ))}

        </div>
    );
};

export default App;