import { FETCH_RECIPE, SEARCH_RECIPES } from '../actions/index';

// export default function(state = [], action) {
//     switch(action.type) {
//         case SEARCH_RECIPES:
//             return [action.payload.data, ...state];
//         case FETCH_RECIPE:
//             return action.payload.data;
//     }
//     return state;
// }

export function searchRecipesReducer(state = [], action) {
    switch(action.type) {
        case SEARCH_RECIPES:
            return [action.payload.data, ...state];
    }
    return state;
}

export function fetchRecipeReducer(state = {}, action) {
    switch(action.type) {
        case FETCH_RECIPE:
            return action.payload.data;
    }
    return state;
}
