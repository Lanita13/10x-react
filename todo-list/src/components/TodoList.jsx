import { useState } from "react";

export default function TodoList() {
    const [text, setText] = useState("");
    const [todos, setTodos] = useState([]);


    const deleteTask = (param) => {
        setTodos(todos.filter((item, i) => i !== param
        ))
    }
    const addTodo = () => {
        if(text.trim() === ("")) return;
        setTodos([...todos, text]);
        setText("");
    }

    return (
        <div className="flex flex-col w-100  gap-12 border-gray border-6 p-6 rounded-xl">
            <h1>Todo List</h1>

            <div className="flex flex-col gap-6 ">
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="დავალება" className="bg-lime-200 text-black p-4 rounded-xl" />
                <button onClick={addTodo} className="p-3 bg-lime-100 text-black"> დამატება </button>
            </div>
            <ul className=" p-1  flex flex-col gap-4">
                {todos.map((todo, index) => (
                    <li key={index} className="flex place-content-between gap-24 items-center">
                        {todo}

                        <button onClick={() => deleteTask(index)} className="bg-red-500 p-6">
                          წაშლა
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}