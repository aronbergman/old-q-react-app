import React, {Component} from 'react'
import classes from './Auth.module.scss'
import {Button} from '../../components/UI/Button/Button'
import {Input} from '../../components/UI/Input/Input'

export default class Auth extends Component {

    loginHandler = () => {
    };

    registerHandler = () => {
    };

    submitHandler = event => {
        event.preventDefault()
    };

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                        <Input label="Email"/>
                        <Input label="Password"
                        isInvalid="TEST"/>

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>

                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}