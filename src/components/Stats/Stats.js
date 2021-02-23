import React, {useEffect, useState} from 'react';
import Stat from './Stat/Stat'

import classes from './css/Stats.module.css'

const Stats = (props) => {

    const [percentage, setPercentage] = useState(0);

    let ranNum = () => {
        return Math.round(Math.random() * 100);
    }
    
    useEffect(()=>{
        setPercentage(ranNum());
    }, [])
    
    return (
        <div className={classes.Stats}>
            <Stat stat="Happy" percentage={percentage}/>
            <Stat stat="Smart" percentage={25}/>
            <Stat stat="Look" percentage={40}/>
            <Stat stat="Health" percentage={80}/>
        </div>
    )
}

export default Stats;