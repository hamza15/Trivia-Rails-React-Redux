export const selectedQuestions = (selectedQuestions) => {

    return { type: "SELECTED_QUESTIONS_SUCCESS", payload: selectedQuestions};
}

// export const selectedQuestions = (category) => {
//     return dispatch => {
//         fetch(`http://localhost:3001/categories/${category}`)
//         .then(res => res.json())
//         .then(data => 
//             dispatch({ type: "SELECTED_CATEGORY_SUCCESS", payload: data.map(c => c)}));
//             // console.log(data.data))
//     }
//     // debugger
//     // return { type: "" }
// }