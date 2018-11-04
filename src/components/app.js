import React from 'react';

import SearchBar from '../containers/search_bar';
import RecipesList from '../containers/recipes_list';
import CreateNewRecipe from '../containers/create_recipe';
import RecipeBook from '../containers/recipebook';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <CreateNewRecipe />
            <RecipeBook />
        </div>
    );
  }
}
