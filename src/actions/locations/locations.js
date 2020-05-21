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
        credentials: "include",
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(getLocations(response.data))
            }
        })
        .catch(console.log)
    }
}
