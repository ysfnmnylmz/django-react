import React, {Fragment} from "react";
import Modal from "./Modal";
import Todos from "./Todos";
import Header from "./Header";

export default function Dashboard() {
    return (
        <Fragment>
            <main className="content">
                <h1 className="text-white text-uppercase text-center my-4">Yapılacaklar Listesi</h1>
                <div className="row ">
                    <div className="col-md-6 col-sm-10 mx-auto p-0">
                        <div className="card p-3">
                            <div>
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
        </Fragment>
    )

}