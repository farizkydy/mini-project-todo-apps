import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "../assets/style/Login.scss";
import axios from 'axios';
import Swal from 'sweetalert2';

// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };
// const tailLayout = {
//     wrapperCol: { offset: 8, span: 16 },
// };

class LogInPage extends React.Component {
    state = {
        email: "",
        password: ""

    }

    // componentDidMount() {
    //     let token = verifyToken()
    //     if (token) this.props.history.replace('/')
    // }

    handleOnchange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginClick = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url: "https://titan-todoapp.herokuapp.com/api/v1/users/login",
            data: {
                email: this.state.email,
                password: this.state.password
            }
        })
            .then(res => {
                console.log("res", res)
                if (res.data.status === "Success") {
                    // Simpen Token di local storage
                    localStorage.setItem('token', res.data.token)
                    Swal.fire({
                        icon: 'success',
                        text: 'Selamat datang di Todo!'
                    })
                    // Redirect user ke home
                    this.props.history.push("/")
                } else {
                    // Handle Error yang masuk ke then
                }
            })
            .catch(err => {
                console.log(err)
                Swal.fire({
                    icon: "error",
                    text: err.response.data.message
                })
            })

    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="layout-form">
                        <div className="layout-form__text-wrapper">
                            <p style={{ margin: "18px 0 0 15px" }}>Todos</p>
                            <h3>Hello, Friend!</h3>
                            <p style={{ margin: " 0 10px" }}>Enter your personal details and</p>
                            <p style={{ margin: " 10px 20px" }}>start your journey with us</p>
                            <button><Link to="/signup">Sign up</Link></button>
                        </div>
                        <div className="layout-form__content">
                            <h2>Sign in to Task Manager</h2>
                            <ul>
                                <li><Link to="/"><img src={require("../assets/images/212.svg")} alt="socmed" /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/g+.svg")} alt="socmed" /></Link></li>
                                <li> <Link to="/"><img src={require("../assets/images/li.jpg")} alt="socmed" /></Link></li>
                            </ul>
                            <p className="small-text">or use your email account</p>
                            <form>
                                <input style={{ margin: "10px" }} type="email" id="email" value={this.state.email} onChange={this.handleOnchange} placeholder="Enter your Email"></input>
                                <input style={{ margin: "10px" }} type="password" id="password" value={this.state.password} onChange={this.handleOnchange} placeholder="Enter your Password"></input>
                                <button onClick={this.handleLoginClick}>SIGN IN</button>
                            </form>


                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default LogInPage;