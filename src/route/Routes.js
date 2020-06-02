import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import LogInPage from "../components/LogInPage";
import SignUpPage from "../components/SignUpPage";
// import { Switch } from 'antd';
import TodoPage from '../layout/TodoPage';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={TodoPage} exact />
                    <Route path="/signup" component={SignUpPage} exact />
                    <Route path="/login" component={LogInPage} exact />
                    <Route component={() => "404 Not Found"} />
                    {/* <LogInPage />
                    <SignUpPage />
                    <TodoPage /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Routes;
