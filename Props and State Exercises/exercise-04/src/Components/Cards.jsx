import React, {useState} from "react";
import { RiDeleteBin2Line, RiPencilLine } from "@remixicon/react";

const Cards = ({value, completed, deleted, submitted, editing}) => {
    const {title, id, isCompleted, isEditing} = value
    const [editedname, setEditedname] = useState(title);

    return (
        <div className="w-[420px] bg-white border border-gray-200 rounded-xl shadow-sm p-4 flex items-center justify-between hover:shadow-md transition mb-10">

            {/* Left side */}
            <div className="flex items-center gap-3">

                {/* Checkbox */}
                <input
                    type="checkbox"
                    checked={isCompleted}
                    onChange={() => completed(id)}
                    className="w-4 h-4 accent-blue-500"
                />

                {isEditing ? (
                    <input
                        type="text"
                        value={editedname}
                        onChange={(e) => setEditedname(e.target.value)}
                        className="px-2 py-1 border rounded outline-none"
                    />
                ) : (
                    <p className={`text-gray-800 ${isCompleted ? 'line-through' : ""} font-medium`}>
                        {title}
                    </p>
                )}

            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">

                {isEditing ? (
                    <button
                        onClick={() => submitted(id, editedname)}
                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                    >
                        Save
                    </button>
                ) : (
                    <>
                        <button
                            className="text-blue-500 hover:text-blue-600 transition"
                            onClick={() => editing(id)}
                        >
                            <RiPencilLine size={20} />
                        </button>

                        <button
                            className="text-red-500 hover:text-red-600 transition"
                            onClick={() => deleted(id)}
                        >
                            <RiDeleteBin2Line size={20} />
                        </button>
                    </>
                )}

            </div>

        </div>
    );
};

export default Cards;