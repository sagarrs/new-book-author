import axios from '../../config/axios'

// add book
export const addStory = (book) => {
    return{
        type: "ADD_STORY",
        payload: {
            book
        }
    }
}

export const startAddStory = (formData, props) => {
    return(dispatch) => {
        axios.post("/books", formData)
            .then((response) => {
                dispatch(getBook())
                // dispatch(addStory(response.data))
                props.history.push("/story")
            })
            .catch((err) => {
                console.log("error in books action", err)
            })
    }
}

export const getBook = () => {
    return (dispatch) => {
        axios.get('/books/account', {headers: {'x-auth': localStorage.getItem('token')}})
            .then((response) => {
                console.log("this is in stories action")
                console.log(response.data)
                dispatch(addStory(response.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

// remove book

// edit book