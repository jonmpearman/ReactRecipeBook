import React from 'react';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="">
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input type="radio" id={this.props.id} value={this.props.value} name={this.props.name} defaultChecked={this.props.defaultChecked}/>
            </div>
        );
    }
}

export default RadioButton;
