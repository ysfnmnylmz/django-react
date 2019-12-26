import React, {Component} from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getTodos, deleteTodos, compTodo} from "../actions/todos";

export class Todos extends Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        getTodos: PropTypes.func.isRequired,
        deleteTodos: PropTypes.func.isRequired,
        compTodo: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getTodos();
    }

    render() {
        return (
            <div>
                <h2>Todos</h2>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Başlık</th>
                        <th>Tanım</th>
                        <th>Tamamlandı?</th>
                        <th>Aksiyonlar</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? "Evet" : "Hayır"}</td>
                            <td>
                                <button className="btn btn-success btn-sm mr-2">Düzenle</button>
                                <button
                                    onClick={this.props.compTodo.bind(this, todo)}
                                    className="btn btn-warning btn-sm mr-2">Tamamlandı
                                </button>
                                <button
                                    onClick={this.props.deleteTodos.bind(this, todo.id)}
                                    className="btn btn-danger btn-sm mr-2">Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, {getTodos, deleteTodos, compTodo})(Todos);