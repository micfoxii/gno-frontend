const initialState = []

export default (state = initialState, action) => {
    switch(action.type){

        case "GET_DESTINATIONS":
            return action.destinations
        case "GET_DESTINATION":
            return action.destination
        default:
            return state
    }
}