import React, { Component } from 'react'
import { createUser } from "../redux/actions/userActions"
import { connect } from "react-redux"

class UserForm extends Component {

    state = {
        username: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state)
    }

    render () {
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
        )
    }
    
}

export default connect(null, { createUser })(UserForm);