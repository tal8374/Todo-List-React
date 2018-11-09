import {stringInclues} from '../util/common';

export const FILTER_ALL = 'all';
export const FILTER_ACTIVE = 'active';
export const FILTER_COMPLETED = 'completed';
export const FILTER_TODAY = 'today';

export function applyFilter(list, filter) {
    switch (filter) {
        case FILTER_COMPLETED:
            return list.filter(item => item.completed === true);

        case FILTER_ACTIVE:
            return list.filter(item => item.completed !== true);

        default:
            return list;
    }
}

export function filterByDate(list, date) {
    if(!date.fromDate || !date.toDate) {
        return list;
    }
    console.log(list[0]);
    console.log(list[0].date);
    console.log(list[0].finishDate);
    console.log(date);

    return list.filter(item => item.finishDate >= date.fromDate && item.finishDate <= date.toDate);
}

export function search(list, query) {
    let q = query.trim().toLowerCase();

    return list.filter(({text}) => stringInclues(text.toLowerCase(), q));
}


export function getOptions() {
    return {
        [FILTER_ALL]: 'All',
        [FILTER_ACTIVE]: 'Active',
        [FILTER_COMPLETED]: 'Completed',
        [FILTER_TODAY]: 'Today'
    };
}
