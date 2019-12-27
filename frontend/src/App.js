import React, {Component, Fragment} from "react";
import {HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Todos from "./components/Todos";
import Modal from "./components/Modal";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Login from "./components/accounts/Login";
import Register from "./components/accounts/Register";
import PrivateRoute from "./components/commons/PrivateRoute";

import {Provider} from 'react-redux';
import store from "./store";
import {loadUser} from "./actions/auth";

class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser());
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header/>
                        <Switch>
                            <PrivateRoute exact path="/" component={Dashboard}/>
                            <Route exact path="/register" component={Register}/>
                            <Route exact path="/login" component={Login}/>
                        </Switch>
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;