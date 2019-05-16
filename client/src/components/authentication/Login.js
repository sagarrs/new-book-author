import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../../redux/actions/login'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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
            email : this.state.email,
            password: this.state.password
        }
        // console.log(formData)
        // this .props is needed for history.push so that we can redirect to other page
        this.props.dispatch(startLogin(formData, this.props))
    }

    render(){
        return(
            <div>
                <h1>this is login form </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input type="text" name="email" onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Password: 
                        <input type="password" name="password" onChange={this.handleChange}/>
                    </label><br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect()(LoginForm)