import React from "react";
import { Link } from "react-router-dom";
// import Add from "./Add";
// import ListTodo from "./ListTodo";
import "../assets/style/Header.scss";
import { FaStar, FaTrash, FaUserNinja, } from "react-icons/fa";
import axios from "axios";
import Swal from 'sweetalert2';

// class TodoPage extends React.Component {
// state = {
//     todos: [],
//     name: "",
//     picture: ""
// }
// getAllTodos = () => {
//     let token = localStorage.getItem("token")
//     console.log(token, "this is token")
//     axios({
//         method: "GET",
//         url: "https://titan-todoapp.herokuapp.com/api/v1/todos",
//         headers: {
//             Authorization: token
//         }
//     })
//         .then(res => {
//             console.log(res, "This is res")
//             if (res.data.status === "Success") {
//                 this.setState({
//                     todos: res.data.todos
//                 })
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }
// getUser = () => {
//     let token = localStorage.getItem("token")
//     axios({
//         method: "GET",
//         url: "https://titan-todoapp.herokuapp.com/api/v1/profiles/",
//         headers: {
//             Authorization: token
//         }
//     })
//         .then(res => {
//             console.log(res, "This is res users")
//             if (res.data.status === "Success") {
//                 this.setState({
//                     name: res.data.profile.name,
//                     picture: res.data.profile.picture
//                 })
//             }
//         })
//         .catch(err => {
//             console.log(err, "USERS")
//         })
// }
// componentDidMount() {
//     this.getUser()
//     this.getAllTodos    ()
// }
// // Logout = e => {
// //     e.preventDefault();
// //     localStorage.removeItem("token");
// //     this.props.history.replace("/login")
// // }
// removeTodo = id => {
//     let token = localStorage.getItem("token")
//     axios({
//         method: "DELETE",
//         url: `https://titan-todoapp.herokuapp.com/api/v1/todos/${id}`,
//         headers: {
//             Authorization: token
//         }
//     })
//         .then(
//             this.setState({ todos: this.state.todos.filter(item => item.id !== id) })
//         )
//         .catch(err => {
//             console.log(err)
//         })
// }


const baseUrl = "https://titan-todoapp.herokuapp.com/api/v1"
let token;

class Importance extends React.Component {
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
            console.log(res)
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

    componentDidMount() {
        this.getAllTodos()
        this.getUser()
        this.checkToken()
    }
    checkToken = e => {
        let token = localStorage.getItem("token")
        if (!token) {
            this.props.history.replace("/login")
        }
    }
    Logout = e => {
        e.preventDefault();
        localStorage.removeItem("token");
        this.props.history.replace("/login")
    }
    Home = e => {
        e.preventDefault()
        this.props.history.push("/")
    }






    //     // addTodo = async () => {

    //     //     this.setState({ isLoading: true })

    //     //     const res = await axios.post(`${baseUrl}`, {
    //     //         title: this.state.title,
    //     //         completed: false
    //     //     })

    //     //     this.setState({
    //     //         todos: [res.data, ...this.state.tile],
    //     //         isLoading: false,
    //     //         title: ""
    //     //     })
    //     // }
    //     componentDidMount() {
    //         this.getDataTask();
    //     }

    //     getDataTask = async () => {
    //         await axios({
    //             method: "GET",
    //             url: "https://titan-todoapp.herokuapp.com/api/v1/todos/",
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Authorization:
    //                     "Bearer " + JSON.parse(localStorage.getItem("userData")).token
    //             }
    //         })
    //             .then(res => {
    //                 this.setState({
    //                     todos: res.data.data.docs
    //                 });
    //                 console.log(res.data.data);
    //             })
    //             .catch(err => console.log(err));
    //     };






    // class TodoPage extends React.Component {
    //     state = {
    //         newTodo: [{
    //             id: 0,
    //             completed: false,
    //             important: false,
    //             title: "bla bla bla"
    //         }],
    //     }
    //     newTodo = data => {
    //         const len = this.state.Todos.length
    //         const newTodo = {
    //             id: len + 1,
    //             title: data,
    //             completed: false
    //         }

    //         console.log(newTodo)
    //         this.setState({
    //             newLists: [...this.state.Todos, newTodo]
    //         })
    //     }
    //     removeTodo = (id) => {
    //         this.setState({
    //             newLists: this.state.Todos.filter(list => list.id !== id)
    //         })
    //         console.log(id)
    //     }


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
                        <a href="/"><Link to="/" /><p>Todos</p></a>
                        <button className="btn-signout" onClick={this.handleLogout}>SIGN OUT</button>
                    </div>
                </div>
                <div className="content">
                    <div className="taskboard-left">
                        <div className="taskboard-left__profile">
                            <FaUserNinja className="taskboard-left__image" style={{ height: "3em" }} />
                            <div className="taskboard-left__profile__edit-profile">
                                <h3>Your Name</h3>
                                <Link to="/" className="link">Edit profile</Link>
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
                        {/* <Add addTodos={this.getAllTodos} /> */}

                        <div className="taskboard-todo">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Important</h6>
                            </div>

                            {this.state.todos.map(item => {
                                return (
                                    <div key={item.id} className="todo-list">
                                        <input id="box" className="completed" type="checkbox" required />

                                        <p>{item.title}</p>
                                        <button className="btn-important" > <FaStar /></button>
                                        {/* <button className="btn-edit"><FaPencilAlt className="edit" /></button> */}
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
export default Importance;


// class TodoPage extends React.Component {
//     state={
//         Todos:[{
//             id:0,
//             completed:false,
//             important:false,
//             title:"bla bla bla"
//         }],
//     }
//     newTodo = data => {
//         const len = this.state.Todos.length
//         const newTodo = {
//             id:len + 1,
//             title:data,
//             completed:false
//         }

//         console.log(newTodo)
//         this.setState({
//             newLists:[...this.state.Todos, newTodo]
//         })
//     }
//     removeTodo = (id) => {
//         this.setState({
//             newLists: this.state.Todos.filter(list => list.id !==id)
//         })
//         console.log(id)
//     }
