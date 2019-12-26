import React, {Component} from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";

import {Provider} from 'react-redux';
import store from "./store";
import Todos from "./components/Todos";

class App extends Component {
    displayCompleted = status => {
        if (status) {
            return this.setState({viewCompleted: true});
        }
        return this.setState({viewCompleted: false});
    };
    renderTabList = () => {
        return (
            <div className="my-5 tab-list">
                <span>
                  Tamamlananlar
                </span>
                <span>
                  Tamamlanmayanlar
                </span>
            </div>
        );
    };
    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    render() {
        return (
            <Provider store={store}>
                <main className="content">
                    <Header/>
                    <h1 className="text-white text-uppercase text-center my-4">Yapılacaklar Listesi</h1>
                    <div className="row ">
                        <div className="col-md-6 col-sm-10 mx-auto p-0">
                            <div className="card p-3">
                                <div className="">
                                    <Modal/>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <Todos>
                                    </Todos>
                                </ul>
                            </div>
                        </div>
                    </div>
                </main>
            </Provider>
        );
    }
}

export default App;