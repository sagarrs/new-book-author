const initialBookState = []
const storyReducer = (state = initialBookState, action) => {
    switch(action.type){
        case "ADD_STORY":
            return [...state, action.payload.book]
        default: 
            return [...state]
    }
}

export default storyReducer