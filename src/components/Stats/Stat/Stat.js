import React, {useState, useEffect} from 'react';

import classes from './css/Stat.module.css'


const Stat = (props) => {

const radius = 52;
const circumference = radius * 2 * Math.PI;

let [offset, setOffset] = useState(0);

useEffect(()=>{
    setProgress(props.percentage);
})

const setProgress = (percent) => {
     setOffset(circumference - percent / 100 * circumference);
}

let circle = (
        <circle
            style={{
                strokeDasharray: `${circumference} ${circumference}`,
                strokeDashoffset: `${offset}`,
            }}
            className={classes.ProgressRingCircle}
            r={radius}
            cx="60"
            cy="60"
        />
    );

    return (
        <div className={classes.Container}>
            <div className={classes.OutsideCircle}>
                <svg
                width="120"
                height="120">
                    {circle}
                </svg>
                <p>{props.percentage}%</p>
            </div>

            <div className={classes.StatTitle}>{props.stat}</div>
        </div>

    )
}

export default Stat;