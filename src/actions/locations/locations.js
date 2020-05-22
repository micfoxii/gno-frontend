// SYNC

export const getLocations = locations => {
    return {
        type: "GET_LOCATIONS",
        locations
    }
}

export const getLocation = location => {
    return {
        type: "GET_LOCATION",
        location
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

export const fetchLocation = (locationData) => {
    return dispatch => {
        return fetch( `http://localhost:3001/locations/${locationData.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(loc => {
            if (loc.error){
                alert(loc.error)
            } else {
                dispatch(getLocation(loc.data))
            }
        })
        .catch(console.log)
    }
}
