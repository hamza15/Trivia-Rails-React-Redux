import React, { Component } from 'react'
import Questionaire from "./Questionaire"
import { getQuestions } from "../redux/actions/getQuestions"
import { selectedQuestions } from "../redux/actions/selectedQuestions"
import { connect } from "react-redux";

class CategoryListItem extends Component {
  state = {
    index: 0,
    score: 0,
    gameEnded: false
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
    
    const newIndex = this.state.index + 1
    this.setState({
      index: newIndex
    })

    let quest_list = this.props.selected_questions
    if (answer === quest_list[this.state.index].answer) {
      let newScore = this.state.score + 1
      this.setState({
        score: newScore
      })
    }

    if(newIndex >= quest_list.length) {
      this.setState({
        gameEnded: true
      })
    }
  };
  

  render() {
    const quest_list = this.props.selected_questions
    return  this.state.gameEnded ? (
      <h1 className='text-3xl text-white font-bold'> Your score was {this.state.score} </h1>
    ) : quest_list.length > 0 ? (
        <div>
            <p>{this.props.selected_category}</p>
            <div className='container'>
              <Questionaire data={quest_list[this.state.index]} handleAnswer={this.handleAnswer}/>

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