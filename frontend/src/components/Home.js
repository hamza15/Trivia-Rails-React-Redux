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
                <form 
                className='grid grid-cols-1 gap-2 mt-6'
                onSubmit={this.handleSubmit}>
                    <label>Username: </label>
                    <input
                    className={'text-black'}
                    type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                    required
                    />
                    <button className={'bg-purple-700 text-white p-4 font-semibold rounded shadown mt-6'} type="submit">Log In</button>
                </form>
            </div>
        )
    }
    
}

export default connect(null, { createUser })(Home);