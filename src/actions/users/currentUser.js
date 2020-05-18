// SYNC 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


//ASYNC

// export const login = credentials => {
//     return dispatch => {
//         return fetch("http://localhost:3000/users)
//     }
// }

export const login = credentials => {
    console.log("login credentials: ", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(resp => resp.json())
        .then( user => {
            if (user.error) {
                alert(user.error)
            } else {
                dispatch(setCurrentUser())
            }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {

}