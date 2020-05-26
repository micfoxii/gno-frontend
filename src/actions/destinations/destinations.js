// SYNC

export const getDestinations = destinations => {
    return {
        type: "GET_DESTINATIONS",
        destinations
    }
}

export const getDestination = destination => {
    return {
        type: "GET_DESTINATION",
        destination
    }
}

//ASYNC

export const fetchDestinations = () => {
    console.log("Fetching Destinations")
    return dispatch => { 
        return fetch("http://localhost:3001/destinations", {
        credentials: "include",
        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
        .then(resp => resp.json())
        .then(destinations => {
            // debugger
            if (destinations.error) {
                alert(destinations.error)
            } else {
                console.log("destinations response:", destinations)
                // debugger
                dispatch(getDestinations(destinations.data))
            }
        })
        .catch(console.log)
    }
}

export const fetchDestination = (destinationData) => {
    return dispatch => {
        return fetch( `http://localhost:3001/locations/${destinationData.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(dest => {
            if (dest.error){
                alert(dest.error)
            } else {
                dispatch(getDestination(dest.data))
            }
        })
        .catch(console.log)
    }
}
