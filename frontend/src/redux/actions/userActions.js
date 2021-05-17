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
        .then(data => console.log(data.data.user_info))
    }
}