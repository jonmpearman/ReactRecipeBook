import React from 'react';

import SearchBar from '../containers/search_bar';
import RecipesList from '../containers/recipes_list';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <SearchBar />
            <RecipesList />
        </div>
    );
  }
}
