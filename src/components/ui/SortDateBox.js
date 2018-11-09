import React from 'react';
import enhance from '../hoc/wrapInputBox';

function SortDateBox(props) {
    const {setFromDate, setToDate} = props;

    return (
        <div className="row container">
            <p className="rightSpace">From</p>
            <input className="rightSpace" onChange={e => setFromDate(e.target.value)} type="date" placeholder="Search"/>
            <p className="rightSpace">To</p>
            <input className="rightSpace" onChange={e => setToDate(e.target.value)} type="date" placeholder="Search"/>
        </div>
    );
}

export default enhance(SortDateBox);
