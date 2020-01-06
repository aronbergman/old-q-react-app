import React from 'react';
import classes from './Shadow.module.scss'

export const Shadow = props => {
    const cls = [classes.Shadow];

    if (props.isOpen) {
        cls.push(classes.open)
    }
    return (
        <div 
            className={cls.join(' ')}
            onClick={props.closeMenuToggle}
        />
    )
};