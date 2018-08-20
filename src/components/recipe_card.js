import React from 'react';

class RecipeCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    <img src={this.props.imageUrl} />
                </div>
                <div>
                    <a href={this.props.sourceUrl}>View Full Recipe</a>
                </div>
            </div>
        );
    }
}

export default RecipeCard;
