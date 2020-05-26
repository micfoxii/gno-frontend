// SYNC

export const getLocations = locations => {
    return {
        type: "GET_LOCATIONS",
        locations
    }
}

export const getLocation = loc => {
    return {
        type: "GET_LOCATION",
        loc
    }
}

//ASYNC

export const fetchLocations = () => {
    console.log("dispatch: Fetching Locations")
    return dispatch => { 
        return fetch("http://localhost:3001/locations", {
        credentials: "include",
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
        .then(resp => resp.json())
        .then(locations => {
            // debugger
            if (locations.error) {
                alert(locations.error)
            } else {
                console.log("Locations Response:", locations)
                // debugger
                dispatch(getLocations(locations.data))
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
