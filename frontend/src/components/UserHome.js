import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class UserHome extends Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                <h1>User's Home</h1>
            
                <Link to="/categories">Start Trivia</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.data,
    };
};

export default connect(mapStateToProps, null)(UserHome)