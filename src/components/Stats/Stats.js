import React from 'react';
import Stat from './Stat/Stat'

import classes from './css/Stats.module.css'

const Stats = () => {
    return (
        <div className={classes.Stats}>
            <Stat stat="Happy" percentage="38"/>
            <Stat stat="Smart" percentage="68"/>
            <Stat stat="Look" percentage="20"/>
            <Stat stat="Health" percentage="86"/>
        </div>
    )
}

export default Stats;