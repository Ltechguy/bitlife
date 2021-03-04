import React from 'react';
import {useDispatch} from 'react-redux'
import * as actions from '../../../store/actions/actionTypes'

import classes from './css/AgeButton.module.css';
const AgeButton = () => {
const dispatch = useDispatch();
    return (
        <div 
            className={classes.AgeButton}
            onClick={()=>dispatch({type: actions.INCREMENT_AGE})}>
                Age
        </div>
    )
}

export default AgeButton;