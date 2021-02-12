import React from 'react';
import AgeButton from './AgeButton/AgeButton';
import SecondaryButtons from './SecondaryButtons/SecondaryButtons';

import classes from './css/Interactions.module.css'
const Interactions = () => {
    return (
        <div className = {classes.Interactions}>
            <AgeButton/>
            <SecondaryButtons/>
        </div>
    );
}

export default Interactions;