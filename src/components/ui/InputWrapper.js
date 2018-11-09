import React from 'react';
import InputBox from './InputBox';
import SearchBox from './SearchBox';
import SortDateBox from './SortDateBox';
import {MODE_SEARCH, MODE_CREATE, MODE_SORT_DATE} from '../../services/mode';

export default function InputWrapper(props) {
    const {mode, addNew, query, setSearchQuery, setFromDate, setToDate} = props;

    switch (mode) {
        case MODE_CREATE:
            return <InputBox {...{addNew}}/>;

        case MODE_SEARCH:
            return <SearchBox {...{query, setSearchQuery}}/>;

        case MODE_SORT_DATE:
            return <SortDateBox {...{setFromDate, setToDate}}/>;

        default:
            return null;
    }
}
