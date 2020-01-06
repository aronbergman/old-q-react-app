import React, {Component} from 'react';
import classes from './Layout.module.scss'
import {MenuToggle} from '../../components/Navigation/MenuToggle/MenuToggle';
import {Drawer} from '../../components/Navigation/Drawer/Drawer';

export default class Layout extends Component {
    state = {
        menu: false
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    };

    render() {
        return (
            <div className={classes.Layout}>

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <Drawer
                    isOpen={this.state.menu}/>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}