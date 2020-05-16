export default (state=null, action) => {
    switch (action.type) {
        case "SET_CURRENT_LOCATION":
            return action.user
        case "CLEAR_CURRENT_LOCATION":
            return null
        default: 
            return state
    }
}