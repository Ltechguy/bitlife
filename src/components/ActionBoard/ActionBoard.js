import React from 'react';
import { useSelector } from 'react-redux';

import classes from './css/ActionBoard.module.css';
import YearParagraph from './YearParagraph/YearParagraph';

const ActionBoard = () => {

    const {age} = useSelector(state => state);
    const {actions} = useSelector(state => state);
    
    let yearActs = [];
    if(actions.length > 0 && age != null) {
        for(let i = 0; i <= age; i++) {
            yearActs.push(
                <YearParagraph key={i} age={i} actions={actions}/>
            )
        }
        yearActs.reverse();
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ActionBoard}>
                {yearActs}
            </div>
        </div>
    );
}

export default (ActionBoard);