import React from 'react';
import PastAction from './PastAction/PastAction';


import classes from './css/ActionBoard.module.css'

const ActionBoard = () => {
    return(
        <div className={classes.Container}>
            <div className={classes.ActionBoard}>

                <p className={classes.Age}>25 y/o:</p>
                <PastAction>I did this!</PastAction>
                <PastAction>I sat on the sofa next to Sarah.</PastAction>
            </div>
        </div>
    );
}

export default ActionBoard;