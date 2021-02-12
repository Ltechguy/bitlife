import React, {Fragment} from 'react';

import classes from './css/Stat.module.css'

const Stat = ({stat, percentage}) => {
    return (
    <>
        <div className={classes.BigCircle}>
            <svg height="95" width="95">
                <circle cx="47.5" cy="47" r="38"/>
                <circle cx="47.5" cy="47" r="38"/>
            </svg> 
            <div className={classes.MiddleCircle}>
                <div className={classes.SmallCircle}>
                        <p data-number={percentage}>%</p>
                    </div>

                    <div className={classes.TextBox}>
                        <p>{stat}</p>
                    </div>
            </div>
        </div>
    </>

    )
}

export default Stat;