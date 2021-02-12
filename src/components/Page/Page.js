import React from 'react'
import CharInfo from '../CharInfo/CharInfo'
import ActionBoard from '../ActionBoard/ActionBoard'
import Stats from '../Stats/Stats'
import TopBar from '../TopBar/TopBar'

import classes from './css/Page.module.css'
import Interactions from '../Interactions/Interactions'
const Page = () => {
    return (
        <div className={classes.Page}>
            <TopBar/>
            <CharInfo/>
            <Stats/>
            <ActionBoard/>
            <Interactions/>
        </div>
    )
}

export default Page;