import jwt from "jsonwebtoken";

function verifyToken() {
    let token = localStorage.getItem("token");
    if (!token) return false;

    let jwtkey = process.env.REACT_APP_KEY;

    try {
        jwt.verify(token, jwtkey)
        return true
    } catch (err) {
        console.log(err, "ERROR")
        return false
    }

}

export default verifyToken;