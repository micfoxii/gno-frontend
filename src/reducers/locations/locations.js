export default (state = [], action) => {
    switch(action.type){

        case "GET_LOCATIONS":
            return action.locations
        default:
            return state
    }
}