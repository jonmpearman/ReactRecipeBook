import React from 'react';

export default (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <img src={props.imageUrl} />
            </div>
            <div>
                <a href={props.sourceUrl}>View Full Recipe</a>
            </div>
        </div>
    );
}
