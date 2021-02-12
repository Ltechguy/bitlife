import React from 'react'

import classes from './css/SecondaryButton.module.css'

const SecondaryButton = ({children}) => {
    return(
        <div className={classes.SecondaryButton}>
            <p>{children}</p>
        </div>
    );
}

export default SecondaryButton;