


import React, { Component } from "react";
import { FaPlus } from "react-icons/fa";
import "../assets/style/Header.scss";
import axios from "axios";
import Swal from 'sweetalert2';

const baseUrl = "https://titan-todoapp.herokuapp.com/api/v1/todos"
class Add extends React.Component {
    state = {
        todos: [],
        title: "",
        description: "",
        importance: false,
        completion: false,
        due_date: "",
    }
    handleTitleChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addTodo = async (e) => {
        let token = localStorage.getItem("token")
        if (!this.state.title) {
            e.preventDefault();
            Swal.fire({
                text: "Hey you forgot input Todo!"
            })
        } else {
            e.preventDefault();
        }
        const newTodo = {
            title: this.state.title,
            description: this.state.description,
            importance: this.state.importance,
            completion: this.state.completion,
            due_date: this.state.due_date
        }
        let updateTodo = [...this.state.todos, newTodo]
        console.log(updateTodo)
        try {
            const res = await axios.post(`${baseUrl}`, newTodo, {
                headers: {
                    Authorization: token
                }
            })
            console.log(res, "res")
            this.setState({ title: "", description: "", due_date: "" })

            this.props.addTodos()

            Swal.fire({
                text: "Todo added!",
                title: "Cie",
                timer: 2000
            })
        } catch (err) {
            console.log(err)
            Swal.fire({
                icon: 'error',
                text: "eror cuy"
            })
        }
    }






    // onClick = e => {
    //     e.preventDefault();
    //     let token = localStorage.getItem("token")
    //     axios({
    //         method: "POST",
    //         url: "https://titan-todoapp.herokuapp.com/api/v1/todos",
    //         data: {
    //             title: this.state.title,
    //             description: this.state.description,
    //             importance: this.state.importance,
    //             completion: this.state.completion,
    //             due_data: this.state.due_data
    //         },
    //         headers: {
    //             Authorization: token
    //         }
    //     })
    //         .then(res => {
    //             console.log(res)
    //             this.props.getAll()
    //             this.setState({ title: "", description: "" })
    //             console.log(res, "SUCCESS")
    //             alert("Todo success added!")
    //         })
    //         .catch(err => {
    //             console.log(err, "ERROR")
    //             alert("Please try again!")
    //         })
    // }


    // addTodo = (title) => {
    //     let task = {
    //         "title": title,
    //         "dueDate": curDate,
    //         "importanceLevel": 1
    //     }
    //     axios.post(`${baseUrl}/tasks`, task, token)
    //         .then(res => {
    //             setInput({})
    //             doPage(1)
    //             alert('Data successfully added')
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             alert('Data unsuccessfully added! please try again or contact the website admin')
    //         })
    // }

    render() {
        return (
            <div className="taskbord-add">
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        id="title"
                        placeholder="add task..."
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <input
                        type="text"
                        id="description"
                        placeholder="add description"
                        value={this.state.description}
                        onChange={this.handleTitleChange}

                    />
                    <span className="custom-datepicker">
                        <input
                            type="date"
                            id="due_date"
                            placeholder="add deadline"
                            value={this.state.due_data}
                            onChange={this.handleTitleChange}

                        />
                    </span>


                    <button className="btn-add" onClick={this.addTodo}> <FaPlus /></button>
                </form>
            </div>
        )
    }
}

export default Add; 
