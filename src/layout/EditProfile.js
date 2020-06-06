// import React from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import "../assets/style/Header.scss";

// class EditProfile extends React.Component {
//     state = {
//         name: "",
//         picture: {
//             value: "",
//             file: null
//         }
//     }
//     componentDidMount() {
//         let token = localStorage.getItem("token")
//         axios({
//             method: "GET",
//             url: "https://titan-todoapp.herokuapp.com/api/v1/profiles/",
//             headers: {
//                 Authorization: token
//             }
//         })
//             .then(res => {
//                 // console.log(res, "This is res edit")
//                 if (res.data.status === "Success") {
//                     this.setState({
//                         name: res.data.profile.name,
//                         picture: res.data.profile.picture,
//                     })
//                 }
//             })
//             .catch(err => {
//                 // console.log(err)
//                 window.alert(err)
//             })
//     }

//     handleLogout = (e) => {
//         e.preventDefault()
//         localStorage.removeItem("token");
//         this.props.history.replace("/login")
//     }
//     onChange = e => {
//         e.preventDefault()
//         this.setState({
//             [e.target.id]: e.target.value
//         })
//     }
//     onChangeFile = e => {
//         e.preventDefault()
//         this.setState({
//             picture: {
//                 value: e.target.value,
//                 file: e.target.files[0]
//             }
//         })
//     }

//     saveEdit = e => {
//         e.preventDefault()
//         let token = localStorage.getItem("token")
//         let formData = new FormData()

//         formData.append("name", this.state.name)
//         formData.append("picture", this.state.picture.file)
//         axios({
//             method: "PUT",
//             url: "https://titan-todoapp.herokuapp.com/api/v1/profiles/",
//             headers: {
//                 Authorization: token
//             },
//             data: formData
//         })
//             .then(res => {
//                 // console.log("This is res update", res)
//                 this.props.history.replace("/")
//             })
//             .catch(err => {
//                 // console.log("ERROR", err)
//                 window.alert(err)
//             })

//         // handleLogout = (e) => {
//         //     e.preventDefault()
//         //     localStorage.removeItem("token");
//         //     this.props.history.replace("/login")
//         // }
//     }
//     render() {
//         return (

// <div className="homepage">
//     <div className="header">
//         <div className="header-nav">
//             <a href="/"><Link to="/" /><p>Todos</p></a>
//             <button className="btn-signout" onClick={this.handleLogout}>SIGN OUT</button>
//         </div>
//                 </div>
//                 <div>
//                     <form >
//                         <img src={this.state.picture} alt={this.state.name} style={{ height: "5em", width: "5em" }} type="text" id="name" placeholder="enter your name" onChange={this.onChange} value={this.state.name} />
//                         <label>Profile Picture</label>
//                         <input type="file" style={{ marginRight: "0px" }} id="picture" placeholder="upload your profile picture" onChange={this.onChangeFile}></input>
//                         <label style={{ marginLeft: "0px" }}>Name</label>
//                         <input onClick={this.saveEdit}></input>

//                         <button>Save</button>
//                     </form>
//                 </div>
//             </div >

//         )
//     }
// }

// export default EditProfile;

import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/style/Header.scss";

class EditUser extends React.Component {
    state = {
        name: "",
        picture: {
            value: "",
            file: null
        }
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
                // console.log(res, "This is res edit")
                if (res.data.status === "Success") {
                    this.setState({
                        name: res.data.profile.name,
                        picture: res.data.profile.picture,
                    })
                }
            })
            .catch(err => {
                // console.log(err)
                window.alert(err)
            })
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

    onChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    onChangeFile = e => {
        e.preventDefault()
        this.setState({
            picture: {
                value: e.target.value,
                file: e.target.files[0]
            }
        })
    }

    saveEdit = e => {
        e.preventDefault()
        let token = localStorage.getItem("token")
        let formData = new FormData()

        formData.append("name", this.state.name)
        formData.append("picture", this.state.picture.file)
        axios({
            method: "PUT",
            url: "https://titan-todoapp.herokuapp.com/api/v1/profiles/",
            headers: {
                Authorization: token
            },
            data: formData
        })
            .then(res => {
                // console.log("This is res update", res)
                this.props.history.replace("/")
            })
            .catch(err => {
                // console.log("ERROR", err)
                window.alert(err)
            })
    }
    render() {
        return (
            <React.Fragment>
                <div className="homepage">
                    <div className="header">
                        <div className="header-nav">
                            <a href="/"><Link to="/" /><p>Todos</p></a>
                            <button className="btn-signout" onClick={this.Logout}>SIGN OUT</button>
                        </div>
                        <h1>Edit Your Profile</h1>
                        <form>
                            <label>Name</label>
                            <input type="text" id="name" placeholder="enter your name" onChange={this.onChange} value={this.state.name}></input>
                            <label>Profile Picture</label>
                            <input type="file" id="picture" placeholder="upload your profile picture" onChange={this.onChangeFile}></input>
                            <button onClick={this.saveEdit}>Save</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EditUser;
