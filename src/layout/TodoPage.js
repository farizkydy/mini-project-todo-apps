import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";
// import ListTodo from "./ListTodo";
import "../assets/style/Header.scss";
import { FaPlus, FaStar, FaTrash, FaPencilAlt, FaUserNinja, FaCheckSquare } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';




const baseUrl = "https://titan-todoapp.herokuapp.com/api/v1"
let token;

class TodoPage extends React.Component {
    state = {
        todos: [],
    }

    getAllTodos = async () => {
        console.log("getData")
        token = localStorage.getItem("token")
        try {
            const res = await axios.get(`${baseUrl}/todos`, {
                headers: {
                    Authorization: token
                }
            })
                .then(res => {
                    console.log(res, "This is res")
                    if (res.data.status === "Success") {
                        this.setState({
                            todos: res.data.todos.rows
                        })
                    }
                })

        } catch (error) {
            console.log(error)
        }
    }
    removeTodo = async id => {
        token = localStorage.getItem("token")
        try {
            const res = await axios.delete(`${baseUrl}/todos/${id}`, {
                headers: {
                    Authorization: token
                }
            })
            if (res.data.status === "Success") {
                this.setState({ todos: this.state.todos.filter(item => item.id !== id) })
                Swal.fire({

                    icon: "success",
                    text: "Successfully deleted!",
                    title: "Auto close alert!",
                    timer: 2000
                })
            }
        } catch (error) {
            console.log(error)
            Swal.fire({

                icon: "Error",
                text: "Unsuccessfully deleted!",
            })
        }
    }
    updateImportance = async importance => {
        this.setState({ isLoading: true })
        const token = localStorage.getItem('token')
        const importanceTask = {
            importance: "true"
        }
        const notImportanceTask = {
            importance: "false"
        }
        try {
            const res = await axios.put(`${baseUrl}/importance`, importance ? notImportanceTask : importanceTask, {
                headers: {
                    Authorization: token,
                }
            })
            console.log(res)
            this.props.getAll()
            this.setState({ isLoading: false })
        }
        catch (err) {
            console.log(err)
            this.setState({ isLoading: false })
        }
    }
    getUser = async () => {
        token = localStorage.getItem("token")
        try {
            const res = await axios.get(`${baseUrl}/profiles`, {
                headers: {
                    Authorization: token,
                }
            })
            console.log(res, "This is res user")
            if (res.data.status === "Success") {
                this.setState({
                    name: res.data.profile.name,
                    picture: res.data.profile.picture
                })
            }
        } catch (err) {
            console.log(err, "User")
        }
    }
    checkToken = e => {
        let token = localStorage.getItem("token")
        if (!token) {
            this.props.history.replace("/login")
        }
    }
    Edit = e => {
        e.preventDefault()
        this.props.history.push("/edituser")
    }

    componentDidMount() {
        this.getAllTodos()
        this.getUser()
        this.checkToken()
    }



    handleLogout = (e) => {
        e.preventDefault()
        localStorage.removeItem("token");
        this.props.history.replace("/login")
    }


    render() {
        return (
            <div className="homepage">
                <div className="header">
                    <div className="header-nav">
                        <a href="#"><Link to="/" /><p>Todos</p></a>
                        <button className="btn-signout" onClick={this.handleLogout}>SIGN OUT</button>
                    </div>
                </div>
                <div className="content">
                    <div className="taskboard-left">
                        <div className="taskboard-left__profile">
                            <img src={this.state.picture} alt={this.state.name} style={{ height: "3em", width: "3em" }} />
                            {/* <FaUserNinja className="taskboard-left__image" style={{ height: "3em" }} /> */}
                            {/* <h3>{this.state.name}</h3> */}
                            <div className="taskboard-left__profile__edit-profile">
                                <h3>{this.state.name}</h3>
                                <Link to="/editprofile" className="link" style={{ marginLeft: "10px" }}>Edit profile</Link>
                            </div>
                        </div>
                        <div className="taskboard-list">
                            <ul>
                                <li><Link to="/" className="link">My Day</Link></li>
                                <li><Link to="/importance" className="link">Important</Link></li>
                                <li><Link to="/completed" className="link">Completed</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contents">
                        <Add addTodos={this.getAllTodos} />

                        <div className="taskboard-todo">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Deadline</h6>
                                <h6>Important</h6>
                            </div>

                            {this.state.todos.map(item => {
                                return (
                                    <div key={item.id} className="todo-list">
                                        <input id="box" className="completed" type="checkbox" required />

                                        <p>{item.title}</p>
                                        <p style={{ fontSize: "10px", width: "12%", marginRight: "5px", marginLeft: "13px" }}>{item.due_date}</p>
                                        <button className="btn-important" > <FaStar /></button>
                                        <button className="btn-edit"><FaPencilAlt className="edit" /></button>
                                        <button className="btn-delete" onClick={() => { this.removeTodo(item.id) }}> <FaTrash className="delete" /></button>


                                    </div>
                                )
                            })}

                        </div>

                    </div>
                </div >
            </div>

        );
    }
}
export default TodoPage;



