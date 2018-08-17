import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderRecipes(recipe) {
        const id = recipe.recipe_id;
        const title = recipe.title;
        console.dir(recipe.recipe_id);
        return (
            <div key={id}>
                {title}
            </div>
        );
    }

    render() {
        return (
            <div>
                {_.map(this.props.recipes.map(this.renderRecipes))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    };
}

export default connect(mapStateToProps)(RecipesList);
