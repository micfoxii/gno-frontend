export default (state = [], action) => {
    switch(action.type){

        case "GET_LOCATIONS":
            return action.locations
        case "SET_LOCATION":
            return action.location
        default:
            return state
    }
}