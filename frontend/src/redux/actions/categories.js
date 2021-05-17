export const getCategories = () => {
    return dispatch => {
        fetch('http://localhost:3001/categories')
        .then(res => res.json())
        .then(data => 
            dispatch({ type: "FETCH_CATEGORIES", payload: data.data.map(c => c.attributes.name)}));
            // console.log(data.data))
    }
}