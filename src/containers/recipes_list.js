import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import RecipeCard from '../components/recipe_card';

class RecipesList extends React.Component {
    constructor(props) {
        super(props);

        // this.renderCard = this.renderCard.bind(this);
    }

    render() {
        return (
            <div>
                {this.props.recipes.map((recipes) => {
                    console.dir(recipes.recipes);

                    return (recipes.recipes.map((recipe) => {
                        const id = recipe.recipe_id;
                        const title = recipe.title;
                        const imageUrl = recipe.image_url;
                        const sourceUrl = recipe.source_url;

                        console.dir(recipe);

                        return (
                            <div key={id}>
                                <RecipeCard
                                    title={title}
                                    imageUrl={imageUrl}
                                    sourceUrl={sourceUrl}
                                />
                            </div>
                        );
                    }));
                })}
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
