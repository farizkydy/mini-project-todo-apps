import React from 'react';
import { FaPlus, FaStar, FaTrash, FaPencilAlt, FaUserNinja, FaCheckSquare } from "react-icons/fa";

const ListTodo = ({ todo, removeTodo }) => {

    const res = todo.map(item =>
        <div key={item.id} className="todo-list">

            <FaCheckSquare className="completed"
            />
            <p>{item.title}</p>
            <button className="btn-important" > <FaStar /></button>
            <button className="btn-edit"><FaPencilAlt className="edit" /></button>
            <button className="btn-delete" onClick={() => { removeTodo(item.id) }}> <FaTrash className="delete" /></button>

        </div>

    )
    return (
        <div>
            {res}
        </div>
    )
}


export default ListTodo;