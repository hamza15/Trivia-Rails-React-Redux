import React, { Component } from 'react'
import Questionaire from "./Questionaire"
import { getQuestions } from "../redux/actions/getQuestions"
import { selectedQuestions } from "../redux/actions/selectedQuestions"
import { connect } from "react-redux";

class CategoryListItem extends Component {
  state = {
    index: 0,
    score: 0,
    showAnswers: false
  }

  componentWillMount() {
    fetch(`http://localhost:3001/categories/${this.props.selected_category}`)
        .then(res => res.json())
        .then(data => 
          // console.log(data.data.content)
          this.props.selectedQuestions(data.data.content)
          );
  }

  handleAnswer = (answer) => {

    if(!this.state.showAnswers) {
      let quest_list = this.props.selected_questions
      if (answer === quest_list[this.state.index].answer) {
        let newScore = this.state.score + 1
        this.setState({
          score: newScore
        })
      }
    }
    
    this.setState({
      showAnswers: true
    })
  };

  handleNextQuestion = () => {

    this.setState({
      showAnswers: false
    })

    const newIndex = this.state.index + 1
    this.setState({
      index: newIndex
    })
    
  }

  handleReplay = () => {
    this.props.history.push(`/user/home`)
  }
  

  render() {
    const quest_list = this.props.selected_questions
    return  this.state.index >= quest_list.length ? (
      <div>
        <h1 className='text-3xl text-white font-bold'> Your score was {this.state.score} </h1>
        <button className={'bg-purple-700 text-white p-4 font-semibold rounded shadown mt-6'} onClick={this.handleReplay}>play again</button>
      </div>
    ) : quest_list.length > 0 ? (
        <div>
            <div className='container'>
              <Questionaire data={quest_list[this.state.index]} handleNextQuestion={this.handleNextQuestion} handleAnswer={this.handleAnswer} showAnswers={this.state.showAnswers} />

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

export default connect(mapStateToProps, { getQuestions, selectedQuestions})(CategoryListItem)