import React from 'react'
import { Route } from "react-router-dom";
import LogInPage from "../components/LogInPage";
import SignUpPage from "../components/SignUpPage";
import Header from "../layout/Header";

const Routes = () => {
    return (
        <div>
            <Route path="/" exact>
                <LogInPage />
                <SignUpPage />
                <Header />
            </Route>
        </div>
    )
}

export default Routes
