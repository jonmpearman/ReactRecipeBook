import { SORT } from '../actions/index';

export default function(state = 'r', action) {
    switch(action.type) {
        case SORT:
            return action.sort;
    }
    return state;
}
