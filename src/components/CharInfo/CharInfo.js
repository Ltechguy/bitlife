import React from 'react';
import Avatar from './Avatar/Avatar';
import CharDetails from './CharDetails/CharDetails';

import classes from './css/CharInfo.module.css'

const CharInfo = () => {
    return (
        <div className={classes.CharInfo}>
            <Avatar/>
            <CharDetails/>
        </div>
    );
}

export default CharInfo;