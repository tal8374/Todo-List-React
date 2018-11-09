import React from 'react';
import {MODE_NONE, MODE_CREATE, MODE_SEARCH, MODE_SORT} from '../../services/mode';

export default function ButtonWrapper(props) {
    const {mode, changeMode} = props;
    const isCreateMode = () => mode === MODE_CREATE;
    const isSearchMode = () => mode === MODE_SEARCH;
    const isSortMode = () => mode === MODE_SORT;

    return (
        <div>
            <a title="Add New"
               className={'button add ' + (isCreateMode() ? 'selected' : '')}
               onClick={() => changeMode(isCreateMode() ? MODE_NONE : MODE_CREATE)}/>
            <a title="Search"
               className={'button search ' + (isSearchMode() ? 'selected' : '')}
               onClick={() => changeMode(isSearchMode() ? MODE_NONE : MODE_SEARCH)}/>
            <a title="Sort"
               className={'button sort ' + (isSortMode() ? 'selected' : '')}
               onClick={() => changeMode(isSortMode() ? MODE_NONE : MODE_SORT)}/>
        </div>
    );
}
