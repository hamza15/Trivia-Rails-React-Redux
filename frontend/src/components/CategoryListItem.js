import React, { Component } from 'react'
import { getQuestions } from "../redux/actions/getQuestions"
import { selectedQuestions } from "../redux/actions/selectedQuestions"
import { connect } from "react-redux";

class CategoryListItem extends Component {

  componentWillMount() {
    fetch(`http://localhost:3001/categories/${this.props.selected_category}`)
        .then(res => res.json())
        .then(data => 
          // console.log(data.data.content)
          this.props.selectedQuestions(data.data.content)
          );
  }

  render() {

    return this.props.selected_questions.length > 0 ? (
      <div>
          <p>{this.props.selected_category}</p>
          <div className='container'>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
              <h2 className="text-2xl" 
              dangerouslySetInnerHTML={{ __html: this.props.selected_questions[0].question}}/>

            </div>
          
          <div className='grid grid-cols-2 gap-6 mt-6'>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0].choice1}</button>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0].choice2}</button>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0].choice3}</button>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0].choice4}</button>
          </div>
        </div>
      </div>
    ) : (
      <h2>Loading ....</h2>
    )
  }
}

const mapStateToProps = state => {
  
  return {
      selected_category: state.selected_category,
      selected_questions: state.selected_questions,
  };
};

export default connect(mapStateToProps, { getQuestions, selectedQuestions })(CategoryListItem)