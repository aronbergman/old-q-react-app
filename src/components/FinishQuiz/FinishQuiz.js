import React from 'react';
import classes from './FinishQuiz.module.scss'
import {Button} from './../UI/Button/Button'
import {Link} from 'react-router-dom';

export const FinishQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }

        return total
    }, 0);
    return (
        <div className={classes.FinishQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ];

                    return (
                        <li key={index}>
                            <strong>{index + 1} </strong>
                            {quizItem.question}
                            <i className={cls.join(' ')}/>
                        </li>
                    )
                })}
            </ul>

            <p>Правильно {successCount} из {props.quiz.length}</p>

            <div>
                <Button
                    type={'primary'}
                    onClick={props.onRetry}
                >
                    Повторим?
                </Button>
                <Link to={'/'}>
                    <Button
                        type={'success'}
                    >
                        Перейти к списку тестов
                    </Button>
                </Link>
            </div>
        </div>
    )
};