import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchRecipes, fetchRecipe, updateSort } from '../actions/index';
import SortButtons from './sort_buttons';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ingredients: '',
            page: 1
        }
        this.onIngredientsEntered = this.onIngredientsEntered.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onIngredientsEntered(event) {
        this.setState({ ingredients: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.searchRecipes(this.state.ingredients, this.props.sort, this.state.page);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <div>
                    <input className="form-control"
                        value={this.state.ingredients}
                        placeholder="Start typing ingredients to search for recipes"
                        onChange={this.onIngredientsEntered}
                    />
                </div>
                <div className="input-group-btn">
                    <button tpye="submit" className="btn btn-secondary">Search</button>
                </div>
                <SortButtons />
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        sort: state.userSort
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchRecipes, fetchRecipe, updateSort }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
