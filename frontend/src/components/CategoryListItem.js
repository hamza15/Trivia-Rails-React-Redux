import React, { Component } from 'react'
import { getQuestions } from "../redux/actions/getQuestions"
import { selectedQuestions } from "../redux/actions/selectedQuestions"
import { connect } from "react-redux";

class CategoryListItem extends Component {
  componentDidMount() {
    this.props.getQuestions();
    this.calibrate();
  }

  calibrate() {
        const cat = this.props.selected_category;
        console.log(cat)
        function cleanup (input) {
            
        if (input.name === cat) {
            return input.questions
            }
        }
        console.log(this.props.category_questions)
        let quest_list = this.props.category_questions.map(a => cleanup(a));
        quest_list = quest_list.filter(function( element ) {
        return element !== undefined;
        });
        
        this.props.selectedQuestions(quest_list);
  }

  render() {
    // {this.props.selectedQuestions(this.props.questions, this.props.selected_category);}
    return (
      <div>
          <p>{this.props.selected_category}</p>
          <div className='container'>
            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
              <h2 className="text-2xl" 
              dangerouslySetInnerHTML={{ __html: this.props.selected_questions[0][9].question}}/>

            </div>
          
          <div className='grid grid-cols-2 gap-6 mt-6'>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0][0].choice1}</button>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0][0].choice2}</button>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0][0].choice3}</button>
            <button className="bg-white p-4 text-purple-800 font-semibold rounded shadow">{this.props.selected_questions[0][0].choice4}</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      category_questions: state.questions,
      selected_category: state.selected_category,
      selected_questions: state.selected_questions,
  };
};

export default connect(mapStateToProps, { getQuestions, selectedQuestions})(CategoryListItem)