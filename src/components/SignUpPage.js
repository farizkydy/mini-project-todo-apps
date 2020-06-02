import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Signup.scss";
import { Form, Input, Button, Checkbox } from 'antd';
import verifyToken from "../route/verifyToken";
import axios from 'axios';
import Swal from 'sweetalert2';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class SignUpPage extends React.Component {
    state = {
        name: "",
        email: "",
        password: "",
        // loading: false
    }

    handleOnChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        // e.preventDefault();
        // let token = localStorage.getItem('token')

        // // this.setState({ loading: true })
        // axios({
        //     method: "POST",
        //     url: "https://titan-todoapp.herokuapp.com/api/v1/users/register",
        //     headers: {
        //         Authorization: token
        //     },
        //     data: {
        //         name: this.state.name,
        //         email: this.state.email,
        //         password: this.state.password
        //     }
        // })
        //     .then(res => {
        //         console.log("res", res)
        //         this.setState({ loading: false })

        //         if (res.data.status === "Success") {
        //             console.log("SUCCESS")
        //             this.props.history.replace("/")

        //             Swal.fire({
        //                 icon: 'success',
        //                 text: 'user berhasil ditambahkan!'
        //             })
        //             // .then(() => {
        //             //     this.props.history.replace("/login")
        //             // })
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err.data, "EROR")
        //         // this.setState({ loading: false })

        //         Swal.fire({
        //             icon: 'error',
        //             text: err.response.data.message
        //         })
        //     })
        e.preventDefault();
        let token = localStorage.getItem("token")
        axios({
            method: "POST",
            url: "https://titan-todoapp.herokuapp.com/api/v1/users/register",
            headers: {
                Authorization: token
            },
            data: {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(res => {
                if (res.data.status === "Success") {
                    console.log("SUCCESS")
                    this.props.history.replace("/")
                }
            })
            .catch(err => {
                console.log(err.data, "ERROR")
            })

    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-form">
                        <div className="layout-form__text-wrapper">
                            <p style={{ margin: "18px 0 0 15px" }}>Todos</p>
                            <h3 style={{ textAlign: "center" }}>Welcome Back!</h3>
                            <p style={{ textAlign: "center" }}>To keep connected with us please login with your personal info</p>

                            <button><Link to="/login">Sign in</Link></button>
                        </div>
                        <div className="layout-form__content">
                            <h2>Sign in to Task Manager</h2>
                            <ul>
                                <li><Link to="/"><img src={require("../assets/images/212.svg")} /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/g+.svg")} /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/li.jpg")} /></Link></li>
                            </ul>
                            <p className="small-text">or use your email for registration</p>
                            <form>
                                <input style={{ margin: "10px" }} type="text" id="name" value={this.state.name} onChange={this.handleOnChange} placeholder="Enter your Name"></input>
                                <input style={{ margin: "10px" }} type="email" id="email" value={this.state.email} onChange={this.handleOnChange} placeholder="Enter your Email"></input>
                                <input style={{ margin: "10px" }} type="password" id="password" value={this.state.password} onChange={this.handleOnChange} placeholder="Enter your Password"></input>
                                <button onClick={this.handleSubmit}>SIGN UP  </button>
                            </form>

                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default SignUpPage;