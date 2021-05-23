import React, { Component } from 'react'
import { getCategories } from "../redux/actions/categories"
import { selectedQuestions } from "../redux/actions/selectedQuestions"
import { selectCategory } from "../redux/actions/selectCategory"
import { getQuestions } from "../redux/actions/getQuestions"
import { connect } from "react-redux";

class Categories extends Component {
    componentDidMount() {
        this.props.getCategories();
        this.props.getQuestions();
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.selectCategory(event.target.innerHTML);
        const your_category = event.target.innerHTML.toLowerCase();
        this.props.history.push(`/category/${your_category}`)
        // <Link to={`/category/${this.props.selected_category}`}></Link>
    }

    render() {
        return (
            <div>
                <h1>Categories List</h1>
                {this.props.categories.map(a => 
                    <button
                    onClick={this.handleClick}
                    >
                        {a}
                    </button>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        categories: state.categories,
        selected_category: state.selected_category,
        selected_questions: state.selected_questions,
        category_questions: state.questions,
    };
};

export default connect(mapStateToProps, { getCategories, getQuestions, selectCategory, selectedQuestions })(Categories)