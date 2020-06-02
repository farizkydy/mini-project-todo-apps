import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Add from "./Add";
// import ListTodo from "./ListTodo";
import "../assets/style/Header.scss";
import { FaPlus, FaStar, FaTrash, FaPencilAlt, FaUserNinja, FaCheckSquare } from "react-icons/fa";
import axios from "axios";
import ListTodo from "./ListTodo";

// const baseUrl = "https://titan-todoapp.herokuapp.com/api/v1/todos/"

// class TodoPage extends React.Component {
//     state = {
//         todos: [],
//     }
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



// removeTodo = async id => {
//     try {
//         await axios({
//             method: "DELETE",
//             url: "https://titan-todoapp.herokuapp.com/api/v1/todos/1",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: "Bearer " + JSON.parse(localStorage.getItem("userData")).token
//             }
//         });
//         this.getDataTask()
//     } catch (err) {
//         console.log(err)
//     }
// };

class TodoPage extends React.Component {
    state = {
        newTodo: [{
            id: 0,
            completed: false,
            important: false,
            title: "bla bla bla"
        }],
    }
    newTodo = data => {
        const len = this.state.Todos.length
        const newTodo = {
            id: len + 1,
            title: data,
            completed: false
        }

        console.log(newTodo)
        this.setState({
            newLists: [...this.state.Todos, newTodo]
        })
    }
    removeTodo = (id) => {
        this.setState({
            newLists: this.state.Todos.filter(list => list.id !== id)
        })
        console.log(id)
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
                        <p>Todos</p>
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
                                <li><Link to="/" className="link">Important</Link></li>
                                <li><Link to="/" className="link">Completed</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="contents">
                        <Add add={this.newTodo} />
                        <div className="taskboard-todo">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Important</h6>
                            </div>
                            <div className="todo-list">
                                <ListTodo todo={this.state.newTodo} remove={this.removeTodo} />
                            </div>
                        </div>
                    </div>
                </div >
            </div>

        );
    }
}
export default TodoPage;


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
