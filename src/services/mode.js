import {KEY_SLASH, KEY_N, KEY_ESCAPE, KEY_D} from 'keycode-js';

export const MODE_NONE = 'none';
export const MODE_SEARCH = 'search';
export const MODE_CREATE = 'create';
export const MODE_SORT_DATE = 'sort-date';

export function getNextModeByKey(current, keyPressed) {
    switch (current) {
        case MODE_NONE:
            if (keyPressed === KEY_SLASH) return MODE_SEARCH;
            if (keyPressed === KEY_N) return MODE_CREATE;
            if (keyPressed === KEY_D) return MODE_SORT_DATE;

            break;

        default:
            if (keyPressed === KEY_ESCAPE) return MODE_NONE;

    }

    return current;
}
