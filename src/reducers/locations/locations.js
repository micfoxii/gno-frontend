const initialState = []

export default (state = initialState, action) => {
    switch(action.type){

        case "GET_LOCATIONS":
            return action.locations
        case "GET_LOCATION":
            return action.location
        default:
            return state
    }
}