import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

class CreateNewRecipe extends React.Component {
    constructor(props) {
        super(props);

        this.submitForm = this.submitForm.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        console.log(event.target.name);
        console.log(event.target.value);
    }

    submitForm(event) {
        event.preventDefault();
        console.dir(event.target);
    }

    renderField(field) {
        return (
            <div>
                <label className="form-group">{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
            </div>
        );
    }

    renderTextarea(field) {
        return (
            <div>
                <label className="form-group">{field.label}</label>
                <textarea
                    className="form-control"
                    name={field.name}
                    row={field.rows}
                    cols={field.cols}
                    {...field.input}>
                </textarea>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <Field
                    onChange={this.onInputChange}
                    name="title"
                    label="Title"
                    component={this.renderField}
                />
                <Field
                    onChange={this.onInputChange}
                    name="ingredients"
                    label="Ingredients"
                    component={this.renderField}
                />
                <Field
                    onChange={this.onInputChange}
                    name="directions"
                    label="Directions"
                    row="5"
                    cols="10"
                    component={this.renderTextarea}
                />
                <div>
                    <button type="submit">Submit</button>
                    <button type="button">Clear</button>
                </div>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = "Enter a title!";
    }

    if(!values.ingredients) {
        errors.ingredients = "Enter one or more ingredients!";
    }

    if(!values.directions) {
        errors.directions = "Enter some directions!";
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'createNewRecipe'
})(CreateNewRecipe);
