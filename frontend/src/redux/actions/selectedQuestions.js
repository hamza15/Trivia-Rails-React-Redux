export const selectedQuestions = (selectedQuestions) => {

    return { type: "SELECTED_QUESTIONS_SUCCESS", payload: selectedQuestions};
}

// export const selectedQuestions = (questions, category) => {
// return dispatch => {
//     function cleanup (input) {
            
//         if (input.name === category) {
//             return input.questions
//             }
//     }
//         // console.log(this.props.category_questions)
//         // console.log(this.props.selected_category)
//     console.log(questions)
//     let quest_list = questions.map(a => cleanup(a));
//     quest_list = quest_list.filter(function( element ) {
//     return element !== undefined;
//     });

//     dispatch({ type: "SELECTED_QUESTIONS_SUCCESS", payload: quest_list});
//         // console.log(data.data))
// }
// }