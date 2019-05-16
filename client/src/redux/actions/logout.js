import axios from "../../config/axios";

export const removeUser = () => {
    return {
        type: "REMOVE_USER",
        payload: {}
    }
}

export const startLogout = () => {
    return(dispatch) =>{
        axios.delete('/users/logout')
            .then((response) => {
                console.log("loggedout")
                axios.defaults.headers['x-auth'] = ''
                localStorage.clear()
                dispatch(removeUser())
            })
            .catch((err) => {
                console.log(err)
            })
    }
}