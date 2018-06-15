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
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
            </form>
        )
    }
}

// redux form to redux conect
export default reduxForm({
    form: 'PostNewForm',

})(PostsNew);

//PostsEdit.js