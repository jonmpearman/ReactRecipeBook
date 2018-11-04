import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { searchRecipesReducer, fetchRecipeReducer } from './reducer_recipes';
import SortReducer from './reducer_sort';

const rootReducer = combineReducers({
    recipes: searchRecipesReducer,
    recipe: fetchRecipeReducer,
    userSort: SortReducer,
    form: formReducer
});

export default rootReducer;
