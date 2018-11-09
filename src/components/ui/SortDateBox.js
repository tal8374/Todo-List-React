import React from 'react';
import enhance from '../hoc/wrapInputBox';
import classes from "./SortDateBox.css";

function SortDateBox(props) {
    const { value, handleChange, handleKeyUp } = props;

    return (
        <div className={classes.row}>
            <p className={classes.space}>From</p>
            <input className={classes.space} type="date"></input>
            <p className={classes.space}>To - </p>
            <input className={classes.space} type="date"></input>
        </div>
    );
}

export default enhance(SortDateBox);
