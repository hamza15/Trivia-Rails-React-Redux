import React, { Component } from 'react'
import { createUser } from "../redux/actions/userActions"
import { connect } from "react-redux"

class Home extends Component {

    state = {
        username: "",
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state);
        this.props.history.push("/user/home")
    }

    render () {
        return (
            <div>
                <h1 className='text-3xl text-white font-bold'>Welcome to Trivia!</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    />
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
    
}

export default connect(null, { createUser })(Home);