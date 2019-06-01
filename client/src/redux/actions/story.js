import axios from '../../config/axios'

// add book
export const addStory = (book) => {
    console.log("in action")
    console.log(book)
    return{
        type: "ADD_STORY",
        payload: {
            book
        }
    }
}

export const setStory = (book) => {
    return{
        type: "SET_STORY",
        payload: book
    }
}

export const startAddStory = (formData, props) => {
    return(dispatch) => {
        axios.post("/books", formData)
            .then((response) => {
                // dispatch(getBook())
                dispatch(addStory(response.data))
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
                dispatch(setStory(response.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

// remove book
export const removeStory = (id) => {
    return {
        type: 'REMOVE_STORY',
        payload: {
            id
        }
    }
}

export const startRemoveStory = (id, props) => {
    return (dispatch) => {
        axios.delete(`/books/${id}`)
            .then((response) => {
                dispatch(removeStory(id))
                props.history.push("/story")
            })
    }
}

// edit book

export const editStory = (book) => {
    return{
        type: 'EDIT_STORY',
        payload: book
    }
}

export const startEditStory = (formData, id, props) => {
    // console.log(formData.get("bookTitle"))
    // console.log(formData.get("bookBody"))
    // console.log(formData.get("genre"))
    // console.log(formData.get("language"))
    // console.log(formData.get("tagName"))
    // console.log(formData.get("previewImageUrl"))

    // console.log(id)
    // console.log(props)
    const customForm = {
        bookTitle: formData.get("bookTitle"),
        bookBody: formData.get("bookBody"),
        genre: formData.get("genre"),
        language: formData.get("language"),
        tagName: formData.get("tagName"),
        previewImageUrl: formData.get("previewImageUrl")
    }
    console.log("++++++ customForm +++++++++")
    console.log(customForm)

    return (dispatch) => {
        axios.put(`/books/${id}`, customForm)
            .then(response => {
                console.log("in response data")
                console.log(response.data)
                dispatch(editStory(response.data))
                props.history.push("/story")
            })
    }
}