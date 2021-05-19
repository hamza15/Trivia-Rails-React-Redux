export const getQuestions = () => {
    return dispatch => {
        fetch('http://localhost:3001/categories')
        .then(res => res.json())
        .then(data => 
            dispatch({ type: "FETCH_QUESTIONS", payload: data.data.map(c => c.attributes)}));
            // console.log(data.data))
    }
}