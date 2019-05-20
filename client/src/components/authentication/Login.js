import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../../redux/actions/login'
import { Link, Redirect } from 'react-router-dom'
import { Form, Col,Button, Card } from 'react-bootstrap'

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            notice: '',
            redirect: false,
            validated: false
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
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });

        if(this.state.validated === true){
            // this .props is needed for history.push so that we can redirect to other page
            this.props.dispatch(startLogin(formData, this.props))
        }
    }

    render(){
        // return(
        //     <div>
        //         <h1>this is login form </h1>
        //         <form onSubmit={this.handleSubmit}>
        //             <label>
        //                 Email: 
        //                 <input type="text" name="email" onChange={this.handleChange}/>
        //             </label><br/>
        //             <label>
        //                 Password: 
        //                 <input type="password" name="password" onChange={this.handleChange}/>
        //             </label><br/><br/>
        //             <input type="submit"/>
        //         </form>
        //     </div>
        // )

        const { validated } = this.state;
        //console.log(this.props)
        if(this.state.redirect) {
            return <Redirect to="/home" />
        }
        return (
            <div style={{padding:'140px'}}>
            <center>
                <Card style={{padding:'40px'}}>
              
                    <center>
                        <h1>Welcome back.</h1>
                        <p>Login to get personalized story recommendations, follow authors and topics you love, and interact with stories.</p>
                        <h2>Login</h2>
                        { this.state.notice && <p> { this.state.notice } </p> }
                        <Form as={Col} md="6" noValidate validated={validated}>

                            <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                {/* <Form.Label> Email </Form.Label> */}
                                <Form.Control type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Your email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Email
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="8" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Password
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Continue
                            </Button>

                        </Form>
                        <br></br>

                        <p>No Account ? <Link to="/register">Create one</Link></p>
                        <p>To make Author work, we log user data and share it with service providers. Click “Submit” above to accept Author’s Terms of Service & Privacy Policy.</p>
                    </center>
                </Card>
            </center>             
            </div>
        )
    }
}

export default connect()(LoginForm)