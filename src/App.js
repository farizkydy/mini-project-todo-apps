import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./route/Routes";

// const authContext = {
//   signIn: async (email, password) => {
//     let token;
//     token = null
//     try {
//       const response = await Axios.post("https://titan-todoapp.herokuapp.com/api/v1/users/login", {
//         email: email,
//         password: password
//       })
//       const data = await AsyncStorage.setItem("userToken", response.data.data.Token)
//         .then(token = response.data.data.Token)
//     } catch (error) {
//       console.log(error);
//     }
//     console.log(token)
//     return setUserToken(token)
//   }
// }

const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>

  )
}

export default App;
