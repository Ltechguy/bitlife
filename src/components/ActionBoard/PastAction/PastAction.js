import React from 'react';
import classes from './css/PastAction.module.css'

const PastAction = ({children}) => {
    return (
        <p className={classes.PastAction}>{children}</p>
    );
}

export default PastAction;