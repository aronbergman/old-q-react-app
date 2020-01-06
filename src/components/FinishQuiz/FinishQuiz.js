import React from 'react';
import classes from './FinishQuiz.module.scss'

export const FinishQuiz = props => {
    return (
        <div className={classes.FinishQuiz}>
            <ul>
                <li>
                    <strong>1. </strong>
                    How are you
                    <i className={'fa fa-times ' + classes.error}/>
                </li>
                <li>
                    <strong>2. </strong>
                    How are you
                    <i className={'fa fa-check ' + classes.success}/>
                </li>
            </ul>

            <p>Правильно 4 из 10</p>

            <div>
                <button>Повторим?</button>
            </div>
        </div>
    )
};