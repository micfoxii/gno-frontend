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
    return dispatch => {

        return fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    }
}