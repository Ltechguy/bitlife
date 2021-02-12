import React from 'react'
import SecondaryButton from './SecondaryButton/SecondaryButton'

import classes from './css/SecondaryButtons.module.css';



const SecondaryButtons = () => {
    return (
        <div className={classes.SecondaryButtons}>
            <SecondaryButton>Jobs</SecondaryButton>
            <SecondaryButton>Relations</SecondaryButton>
            <SecondaryButton>Actions</SecondaryButton>
            <SecondaryButton>Assets</SecondaryButton>
        </div>
    );
}

export default SecondaryButtons;