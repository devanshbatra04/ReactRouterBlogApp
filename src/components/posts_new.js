import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field){
        return(
            <div className="form-group has-danger">
                <label>{field.label}</label>
                <input className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {
                        field.meta.touched ? field.meta.error : ''
                    }
                </div>
            </div>
        )
    }
    onSubmit(values){
        console.log(values);
    }
    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
                <button type="submit" className="btn btn-primary">Submit</button>
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