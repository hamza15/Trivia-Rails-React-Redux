import React, { Component } from 'react'
import { getCategories } from "../redux/actions/categories";
import { connect } from "react-redux";

class Categories extends Component {
    componentDidMount() {
        this.props.getCategories();
    }
    render() {
        return (
            <div>
                <h1>Categories List</h1>
                {this.props.categories.map(a => 
                <li>{a}</li>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
    };
};

export default connect(mapStateToProps, { getCategories })(Categories)