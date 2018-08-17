import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import RadioButton from '../components/radio_button';
import { updateSort } from '../actions/index';

class SortButtons extends React.Component {
    constructor(props) {
        super(props);

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(`SortButtons onInputChange ${event.target.value}`);
        this.props.updateSort(event.target.value);
    }

    render() {
        return (
            <fieldset onChange={this.onInputChange} className="">
                <RadioButton label="Rating" id="rating" value="r" name="sort" defaultChecked="checked" />
                <RadioButton label="Trending" id="trending" value="t" name="sort"/>
            </fieldset>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ updateSort }, dispatch);
}

export default connect(null, mapDispatchToProps)(SortButtons);
