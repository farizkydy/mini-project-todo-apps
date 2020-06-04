import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/style/Header.scss"

class EditProfile extends React.Component {
    state = {
        name: "",
        picture: ""
    }
    componentDidMount() {
        let token = localStorage.getItem("token")
        axios({
            method: "GET",
            url: "https://titan-todoapp.herokuapp.com/api/v1/profiles/",
            headers: {
                Authorization: token
            }
        })
            .then(res => {
                console.log(res, "This is res edit")
                if (res.data.status === "Success") {
                    this.setState({
                        name: res.data.profile.name,
                        picture: res.data.profile.picture
                    })
                }
            })
            .catch(err => {
                console.log(err, "USERS")
            })
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
    render() {
        return (

            <div className="homepage">
                <div className="header">
                    <div className="header-nav">
                        <a href="/"><Link to="/" /><p>Todos</p></a>
                        <button className="btn-signout" onClick={this.handleLogout}>SIGN OUT</button>
                    </div>
                </div>
                <div>
                    <form>
                        <img src={this.state.picture} alt={this.state.name} style={{ height: "5em", width: "5em" }} />
                        <label>Name</label>
                        <input value={this.state.name}></input>
                        <label>Profile Picture</label>
                        <input type="file" ></input>
                        <button>Save</button>
                    </form>
                </div>
            </div >

        )
    }
}

export default EditProfile;