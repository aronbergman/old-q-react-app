import React, {Component} from 'react';
import classes from './Drawer.module.scss'
import {Shadow} from '../Shadow/Shadow';
import {NavLink} from 'react-router-dom';

const links = [
    {to: '/', label: 'Quiz List', exact: true},
    {to: '/auth', label: 'Authorization', exact: false},
    {to: '/quiz-creator', label: 'Create test', exact: false}
];

export class Drawer extends Component {
    clickHandler = () => {
        this.props.onToggle();
    };

    renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.active}
                        onClick={this.clickHandler}
                    >{link.label}</NavLink>
                </li>
            )
        })
    }

    render() {
        const cls = [classes.Drawer];

        if (!this.props.isOpen) {
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        <a href="#">
                            {this.renderLinks()}
                        </a>
                    </ul>
                </nav>

                {
                    (this.props.isOpen)
                        ? <Shadow closeMenuToggle={this.props.onToggle}/>
                        : null
                }
            </React.Fragment>

        )
    }
}