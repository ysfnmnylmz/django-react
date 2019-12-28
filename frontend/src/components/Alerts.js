import React, {Component, Fragment} from "react";
import {withAlert} from "react-alert";
import {connect} from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
    static propTypes = {
        error: PropTypes.object.isRequired,
        todo_message: PropTypes.object.isRequired,
    };

    componentDidUpdate(prevProps) {
        const {error, alert, todo_message} = this.props;
        if (error !== prevProps.error) {
            if(error.msg.title) alert.error(`Görev başlığı: ${error.msg.title.join()}`);
            if(error.msg.description) alert.error(`Görev tanımı: ${error.msg.description.join()}`);
            if(error.msg.username) alert.error(`Username: ${error.msg.username.join()}`);
            if(error.msg.password) alert.error(`Password: ${error.msg.password.join()}`);
            if(error.msg.non_field_errors) alert.error(`Hata! Şifreniz veya kullanıcı adınız hatalı lütfen tekrar deneyiniz.`);
        }

        if(todo_message !== prevProps.todo_message){
            if(todo_message.todoAdded) alert.success(todo_message.todoAdded);
            if(todo_message.todoDeleted) alert.success(todo_message.todoDeleted);
        }
    }

    render() {
        return <Fragment/>;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    todo_message: state.todo_messages
});
export default connect(mapStateToProps)(withAlert()(Alerts));