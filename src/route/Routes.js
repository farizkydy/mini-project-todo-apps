import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";
import LogInPage from "../components/LogInPage";
import SignUpPage from "../components/SignUpPage";
import Importance from "../layout/Importance";
import Completed from "../layout/Completed";
// import { Switch } from 'antd';
import TodoPage from '../layout/TodoPage';
import EditProfile from '../layout/EditProfile';

const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" component={TodoPage} exact />
                    <Route path="/signup" component={SignUpPage} exact />
                    <Route path="/login" component={LogInPage} exact />
                    <Route path="/importance" component={Importance} exact />
                    <Route path="/completed" component={Completed} exact />
                    <Route path="/editprofile" component={EditProfile} exact />
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
