export const createUser = (newUser) => {
    return dispatch => {
        fetch('http://localhost:3001/users', {
            method: "POST",
            headers: {
                Accepts: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: newUser}),
        })
        .then(res => res.json())
        .then(data => dispatch({type: 'CREATE_USER_SUCCESS', payload: data})
            // {
            //     if (data.data.login_status.status === "existing") {
            //         console.log("Existing customer found")
            //     }
            //     else {
            //         console.log("New customer")
            //     }
            // }
        )
    }
}