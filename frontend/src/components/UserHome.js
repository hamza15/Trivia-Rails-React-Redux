import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

class UserHome extends Component {
    render() {
        // const name = this.props.user.user_info.username.toUpperCase()
        return this.props.user ? (

                <div className='grid grid-cols-1 gap-4 mt-6'>
                <h1 className='text-3xl text-white font-bold'>{this.props.user.user_info.username.toUpperCase()}, are you ready?</h1>
                
                <Link className='text-center bg-purple-700 text-white p-4 font-semibold rounded shadow mt-6' to="/categories">Start Trivia</Link>
                </div>

            
            
        ) : (
            <h2>Loading ....</h2>
          )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user.data,
    };
};

export default connect(mapStateToProps, null)(UserHome)