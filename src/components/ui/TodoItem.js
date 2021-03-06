import React from 'react';
import CheckBox from './CheckBox';
import {dateToString} from '../../util/common'

export default function TodoItem(props) {
    const {data, changeStatus} = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed === true ? 'completed' : 'pending');
    const date = dateToString(data.finishDate);

    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange}/> {data.text} - {date}
                </label>
            </div>
        </li>
    );
}
