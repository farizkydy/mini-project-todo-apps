import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../assets/style/Header.scss";
import { FaPlus, FaStar, FaTrash, FaPencilAlt, FaUserNinja, FaCheckSquare } from "react-icons/fa";

class Header extends React.Component {

    render() {
        return (
            <div className="homepage">
                <div className="header">
                    <div className="header-nav">
                        <p>Todos</p>
                        <button className="btn-signout">Sign Out</button>
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
                        <div className="taskbord-add">
                            <input
                                type="text"
                                placeholder="add task..."
                            />
                            <button> <FaPlus /></button>
                        </div>
                        <div className="taskboard-todo">
                            <div className="todo-title">
                                <h6>Task</h6>
                                <h6>Important</h6>
                            </div>
                            <div className="todo-list">
                                <FaCheckSquare className="completed"
                                />
                                <p>Reading a book</p>
                                <FaStar className="important" />
                                <FaPencilAlt className="edit" />
                                <FaTrash className="delete" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;