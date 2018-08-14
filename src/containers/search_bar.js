import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="input-group">
                <div>
                    <input className="form-control" />
                </div>
                <div className="input-group-btn">
                    <button tpye="submit" className="btn btn-secondary">Search</button>
                </div>
            </form>
        );
    }
}

export default SearchBar
