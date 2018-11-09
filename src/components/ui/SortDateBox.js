import React from 'react';
import enhance from '../hoc/wrapInputBox';
import classes from "./SortDateBox.css";

function SortDateBox(props) {
    const {setFromDate, setToDate} = props;

    return (
        <div className={classes.row}>
            <p className={classes.rightSpace}>From</p>
            <input className={classes.rightSpace} onChange={e => setFromDate(e.target.value)} type="date" />
            <p className={classes.rightSpace}>To - </p>
            <input className={classes.rightSpace} onChange={e => setToDate(e.target.value)} type="date" />
        </div>
    );
}

export default enhance(SortDateBox);
