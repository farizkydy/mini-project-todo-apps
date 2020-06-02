// import React, { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import "../assets/style/Header.scss";
// const Add = ({ add }) => {
//     const [title, setTitle] = useState("")

//     const change = e => {
//         setTitle(e.target.value)
//     }
//     const submit = e => {
//         e.preventDefault();
//         add(title)
//     }
//     return (
// <div className="taskbord-add">
//     <form onSubmit={submit}>
//         <input
//             type="text"
//             placeholder="add task..."
//             value={title} onChange={change}
//         />
//         <button className="btn-add" onClick={submit}> <FaPlus /></button>
//     </form>
//         </div>
//     )
// }
// export default Add;


import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import "../assets/style/Header.scss";

class Add extends Component {
    state = {
        title: "",
        description: "",
        due_date: "2020-05-26"
    }
    handleTitleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    addTodo = async (e) => {
        e.preventDefault()
        try {
            let res = await fetch("https://titan-todoapp.herokuapp.com/api/v1/todos/", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json",
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("userData")).token
                },
                body: JSON.stringify({
                    "title": this.state.title,
                    "description": this.state.description,
                    "due_date": this.state.due_date
                })
            })
            this.setState({ title: "", description: "" })
            await res.json()
            this.this.props.reloadTask()
        } catch (err) {
            console.log(err)
        }
    }
    render() {
        return (
            <div className="taskbord-add">
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        placeholder="add task..."
                        value={this.state.name} onChange={this.handleTitleChange}
                    />
                    <button className="btn-add" onClick={this.addTodo}> <FaPlus /></button>
                </form>
            </div>
        )
    }
}

export default Add; 
