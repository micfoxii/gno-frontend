// SYNC

export const getLocations = locations => {
    return {
        type: "GET_LOCATIONS",
        locations
    }
}


//ASYNC

export const fetchLocations = () => {
    console.log("Fetching Locations")
    return dispatch => { 
        return fetch("http://localhost:3001/locations", {
        // credentials: "include",
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
        .then(resp => resp.json())
        .then(response => {
            // debugger
            if (response.error) {
                alert(response.error)
            } else {
                console.log(response)
                // debugger
                dispatch(getLocations(response))
            }
        })
        .catch(console.log)
    }
}
