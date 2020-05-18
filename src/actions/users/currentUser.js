// SYNC 
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser => {
    return {
        type: "CLEAR_CURRENT_USER"
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
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}

export const logout = () => {
    return(dispatch) => {
        dispatch(clearCurrentUser())
        return fetch('http://localhost:3001/logout', {
            credentials: 'include',
            method: 'DELETE'
        })
    }
}
export const getCurrentUser = credentials => {
    console.log("login credentials: ", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/login", {
            credentials: "include",
            method: "GET",
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
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}
