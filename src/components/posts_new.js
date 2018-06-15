import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input className="form-control"
                    {...field.input}
                />
            </div>
        )
    }

    render(){
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
            </form>
        )
    }
}

function validate(values){
    // console.log(values) -> {title:'asdf', categories:'asdf'}
    // validate inputs from 'values';
    const errors ={};

    if (!values.title || values.title.length < 3){
        errors.title = "Enter a title at least 3 characters!";
    }
    if (!values.categories){
        errors.categories = "Enter a title at least 3 characters!";
    }
    if (!values.content){
        errors.content = "Enter a title at least 3 characters!";
    }

    //if errors is empty submit,
    //if errors has any properties, redux assumes that the form is invalide
    return errors
}

// redux form to redux conect
export default reduxForm({
    validate,
    form: 'PostNewForm',

})(PostsNew);

//PostsEdit.js