import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {addTodos} from "../actions/todos";

export class CustomModal extends Component {
    state = {
        title: '',
        description: '',
        completed: false,
    };
    static propTypes = {
        addTodos: PropTypes.func.isRequired
    }
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        const {title, description, completed} = this.state;
        const todo = {title, description, completed};
        this.props.addTodos(todo);
    };

    render() {
        let {title, description, completed} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2> Yapılacak Görev </h2>
                <form>
                    <div className="form-group">
                        <label>Başlık</label>
                        <input
                            className="form-control"
                            type="text"
                            name="title"
                            onChange={this.onChange}
                            placeholder="Görev Başlığı gir"
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tanım</label>
                        <input
                            className="form-control"
                            type="text"
                            name="description"
                            onChange={this.onChange}
                            placeholder="Görev Tanımı gir"
                            value={description}
                        />
                    </div>
                </form>
                <div className="form-group">
                    <button
                        onClick={this.onSubmit}
                        className="btn btn-primary btn-sm"
                        type="submit">
                        Ekle
                    </button>
                </div>
            </div>
        );
    }
}

export default connect(null, {addTodos})(CustomModal);