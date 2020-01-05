import React from 'react';
import classes from './AnswerItem.module.scss'

export const AnswerItem = props => {
    return (
        <li className={classes.AnswerItem}>
            {props.answer.text}
        </li>
    )
}