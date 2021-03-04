import React, { useEffect, useState } from 'react'

import PastAction from '../PastAction/PastAction'
import classes from './css/YearParagraph.module.css'

const YearParagraph = (props) => {

    let [loaded, setLoaded] = useState(false)
    let [Acts, setActs] = useState(null);

    useEffect(()=>{
        if(!loaded) setActs(props.actions)
        else setLoaded(true);
    }, [])

    

    let acts = null;
    if(Acts != null) acts = Acts.map(act=><PastAction>{act.action}</PastAction>);

    return (
        <div>
            <p className={classes.Age}>{props.age} year-old</p>
            {acts}
        </div>
    )
}

export default YearParagraph;