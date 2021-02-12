import React from 'react';

import classes from './css/CharDetails.module.css'

const CharDetails = () => {
    return (
        <div className={classes.CharDetails}>
            <p className={classes.Name}>Francesco Iacono</p>
            <p>Profession</p>
            <p>$ 999,999.00</p>
        </div>
    )
}

export default CharDetails;