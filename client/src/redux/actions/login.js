import axios from '../../config/axios'

export const addUser = (user) => {
    return{
        type: "ADD_USER",
        payload: user
    }
}

export const startLogin = (formData, props) => {
    return (dispatch) => {  
        axios.post("/users/login", formData)
            .then((response) => {
                // console.log("success", response.data)
                axios.defaults.headers['x-auth'] = response.data.token
                localStorage.setItem("token", response.data.token)
                // dispatch(addUser(response.data.user))
                dispatch(getUser())
                props.history.push("/story")
                // this.props.handleIsAuthenticated(true)
                // this.setState(() => ({
                //     redirect: true
                // }))
            })
            .catch((err) => {
                console.log("Login Error",err.response.data)
                // this.setState(() => ({
                //     notice: err.response.data.notice
                // }))
            })
    }
}

export const getUser = () => {
    return (dispatch) => {
        axios.get('/users/account')
            .then((response) => {
                dispatch(addUser(response.data))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}