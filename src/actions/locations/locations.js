// SYNC

export const getLocations = locations => {
    return {
        type: "GET_LOCATIONS",
        locations
    }
}


//ASYNC

export function fetchLocations() {
    return fetch("http://localhost:3001/locations", {

        method: "GET",
        headers: {
        "Content-Type": "application/json"
        },
    })
        .then(resp => resp.json())
        .then(locations => {
            if (locations.error) {
                alert(locations.error)
            } else {
                dispatchEvent(getLocations(locations.data))
            }
        })
        .catch(console.log)
    }
