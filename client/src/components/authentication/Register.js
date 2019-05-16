import React from 'react'
import {connect} from 'react-redux'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username: this.state.username,
            email : this.state.email,
            password: this.state.password
        }
        console.log(formData)
    }

    render(){
        return(
            <div>
                <h1>this is login form </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        username: 
                        <input type="text" name="username" onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Email: 
                        <input type="text" name="email" onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Password: 
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </label><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(Register)