const initialState = []

export default (state = initialState, action) => {
    switch(action.type){

        case "GET_LOCATIONS":
            return action.locations
        default:
            return state
    }
}