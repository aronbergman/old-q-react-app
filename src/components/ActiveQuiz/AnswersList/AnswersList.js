import React from 'react';
import {AnswerItem} from './../AnswersList/AnswerItem/AnswerItem'
import classes from './AnswersList.module.scss'

export const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem
                    onAnswerClick={props.onAnswerClick}
                    answer={answer}
                    key={index}
                />
            )
        })}
    </ul>
)