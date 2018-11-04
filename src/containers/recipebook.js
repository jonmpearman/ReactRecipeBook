import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

class RecipeBook extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.ingredients}</div>
                <div>{this.props.directions}</div>
                <div>{this.props.title}</div>
            </div>
        );
    }
}

const selector = formValueSelector('createNewRecipe');

function mapStateToProps(state) {
    return {
        ingredients: selector(state, 'ingredients'),
        directions: selector(state, 'directions'),
        title: selector(state, 'title')
    };
}

export default connect(mapStateToProps)(RecipeBook);
