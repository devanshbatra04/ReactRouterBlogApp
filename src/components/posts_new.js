import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field){
        return(
            <div>
                <input
                    {...field.input}
                />
            </div>
        )
    }
    render(){
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField}
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