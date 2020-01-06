import React from 'react';
import classes from './ActiveQuiz.module.scss'
import {AnswersList} from './AnswersList/AnswersList'

export const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
            <strong>1. </strong>
                {props.question}
            </span>
            <small>{props.answerNumber} из {props.quizLength}</small>
        </p>

        <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
        />
    </div>
);