import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import verifyToken from "./verifyToken";

function PrivateRoute(props) {
    let { component: Component, ...rest } = props;
    // Verifikasi token
    let token = verifyToken();
    return (
        <Route
            {...rest}
            render={(props) => {

                return token ?
                    <Component {...props} /> :
                    <Redirect to="/" />
            }}
        />
    )
}
export default PrivateRoute;