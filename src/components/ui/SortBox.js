import React from 'react';

import classes from './SortBox.css'

export default function SortBox(props) {
    const {query, setSearchQuery} = props;

    return (
        <div className={classes.row}>
            <p className={classes.space}>From</p>
            <input className={classes.space} type="date"></input>
            <p className={classes.space}>To - </p>
            <input className={classes.space} type="date"></input>
        </div>
    );
}
