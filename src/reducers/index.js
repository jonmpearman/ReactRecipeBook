import { combineReducers } from 'redux';

import { searchRecipesReducer, fetchRecipeReducer } from './reducer_recipes';
import SortReducer from './reducer_sort';

const rootReducer = combineReducers({
    recipes: searchRecipesReducer,
    recipe: fetchRecipeReducer,
    userSort: SortReducer
});

export default rootReducer;
