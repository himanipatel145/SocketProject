import React from 'react';
import { ChatPage, Homepage } from './pages';
import { Switch, Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
    //get state
    return (
        {
            //check state user ? <Route {...props} /> : <Redirect to="homepage" />
        }
    )
}

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            {/* <ProtectedRoute path='/chat' to={ChatPage} /> */}
        </Switch>
    )
}

export default Routes;

