import React from 'react';
import {MODE_NONE, MODE_CREATE, MODE_SEARCH, MODE_SORT_DATE} from '../../services/mode';

export default function ButtonWrapper(props) {
    const {mode, changeMode} = props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;
    const isSortDateMode = () => mode === MODE_SORT_DATE;

    return (
        <div>
            <a title="Add New"
               className={'button add ' + (isCreateMode() ? 'selected' : '')}
               onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}/>
            <a title="Search"
               className={'button search ' + (isSearchMode() ? 'selected' : '')}
               onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}/>
            <a title="Sort"
               className={'button sort ' + (isSortDateMode() ? 'selected' : '')}
               onClick={() => changeMode(isSortDateMode() ? MODE_NONE : MODE_SORT_DATE)}/>
        </div>
    );
}
