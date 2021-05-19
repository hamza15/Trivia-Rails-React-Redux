import React, { Component } from 'react'
import { getQuestions } from "../redux/actions/getQuestions"
import { connect } from "react-redux";

class CategoryListItem extends Component {
  componentDidMount() {
    this.props.getQuestions();
  }

  render() {

    const cat = this.props.selected_category;
    function cleanup (input) {
      if (input.name === cat) {
        return input.questions
      }
    }
    this.props.category_questions.map(a => console.log(cleanup(a)));
    
    return (
      <div>
          <p>Start SELECTED_STATE's questionaire</p>
          {this.props.questions}
          <p>{this.props.selected_category}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      category_questions: state.questions,
      selected_category: state.selected_category,
  };
};

export default connect(mapStateToProps, { getQuestions })(CategoryListItem)