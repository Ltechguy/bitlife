import React from 'react';

import classes from './css/TopBar.module.css';
const TopBar = () => {
    return(
        <header className={classes.TopBar}>
            <p>ShittyLife</p>
            <div className={classes.Menu}>
                <div className={classes.MenuIcon}></div>
                <div className={classes.MenuIcon}></div>
                <div className={classes.MenuIcon}></div>
            </div>
        </header>
    );
}

export default TopBar;