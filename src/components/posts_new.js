import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost} from "../actions";

class PostsNew extends Component {

    renderField(field){
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return(
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {
                        touched ? error : ''
                    }
                </div>
            </div>
        )
    }
    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push("/");
        });
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
                <Link to="/" className="btn btn-danger">Cancel</Link>
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

})(
    connect(null, {createPost})(PostsNew)
);

//PostsEdit.js