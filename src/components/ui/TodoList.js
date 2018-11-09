import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import {applyFilter, search, filterByDate} from '../../services/filter';

export default function TodoList(props) {
    const {list, filter, mode, query, date} = props.data;
    const {addNew, changeFilter, changeStatus, changeMode, setSearchQuery, setFromDate, setToDate} = props.actions;
    const count = list.length;
    const filteredByOptions = applyFilter(list, filter);
    const filteredByDate = filterByDate(filteredByOptions, date);
    const items = search(filteredByDate, query);

    return (
        <div className="container">
            <div className="row">
                <div className="todolist">
                    <Header {...{addNew, mode, query, setSearchQuery, setFromDate, setToDate}}/>
                    <FilteredList {...{items, changeStatus}}/>
                    <Footer {...{count, filter, changeFilter, mode, changeMode}}/>
                    <Info {...{mode}}/>
                </div>
            </div>
        </div>
    );
}
