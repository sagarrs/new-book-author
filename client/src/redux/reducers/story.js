const initialBookState = []
const storyReducer = (state = initialBookState, action) => {
    switch(action.type){
        case "SET_STORY":
            return [...action.payload]
        case "ADD_STORY":
            return [...state, action.payload.book]
        case "REMOVE_STORY":
            return state.filter(story => story._id != action.payload.id)
        case "EDIT_STORY":
            return state.map(story => {
                if(story._id === action.payload._id){
                    return {...story, ...action.payload}
                }else{
                    return {...story}
                }
            })
        default: 
            return [...state]
    }
}

export default storyReducer