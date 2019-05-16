const initialUserState = {}
const usersReducer = (state = initialUserState, action) => {
    switch(action.type){
        case "ADD_USER":
            console.log(action.payload)
            return {...action.payload}
        case "REMOVE_USER":
            console.log("payload is here")
            return action.payload
        default: 
            return {...state}
    }
}

export default usersReducer