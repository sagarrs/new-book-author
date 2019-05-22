import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
import { Form, Col,Button, Card, } from 'react-bootstrap'

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            validated: false,
            message:'',
            notice:''
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

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
          }
          this.setState({ validated: true });
          
        console.log(this.state.validated)

        if(this.state.validated === true){
            axios.post("/users/register", formData)
                .then((user) => {
                    console.log("Success", user)
                    this.setState(() => ({
                        username: "", email: "", password: "",
                        notice: "successfully registered taking you to login screen"
                    }))
                    this.props.history.push("/login")
                })
                .catch((err) => {
                    console.log("Some Error", err)
                })
        }


    }

    render(){
        // return(
        //     <div>
        //         <h1>this is login form </h1>
        //         <form onSubmit={this.handleSubmit}>
        //             <label>
        //                 username: 
        //                 <input type="text" name="username" onChange={this.handleChange}/>
        //             </label><br/>
        //             <label>
        //                 Email: 
        //                 <input type="text" name="email" onChange={this.handleChange}/>
        //             </label><br/>
        //             <label>
        //                 Password: 
        //                 <input type="password" name="password" onChange={this.handleChange}/>
        //             </label><br/>
        //             <input type="submit"/>
        //         </form>
        //     </div>
        // )
        const { validated } = this.state;
        return(
            <div style={{padding:'115px'}}>
                <center>
                    <Card style={{padding:'40px'}}>
                        <center>
                            <h1>Join Author</h1>
                            <p>Create an account to receive great stories in your inbox, personalize your homepage, and follow authors and topics that you love.</p>
                            <h3>Register</h3>
                            {this.state.notice && <p>{this.state.notice}</p>}
                        
                            <Form as={Col} md="6" noValidate validated={validated}>

                                <Form.Group as={Col} md="8" controlId="formBasicUsername">
                                    {/* <Form.Label > Username </Form.Label> */}
                                    <Form.Control type="text" value={this.state.username} onChange={this.handleChange} name="username" placeholder="Enter Username" required/>
                                    <Form.Control.Feedback type="invalid">
                                        Please Enter Username
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                    {/* <Form.Label> Email </Form.Label> */}
                                    <Form.Control type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Enter email" required />
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
                                    Submit
                                </Button>

                            </Form>
                            <br></br>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                            <p>To make Author work, we log user data and share it with service providers. Click “Submit” above to accept Author’s Terms of Service & Privacy Policy.</p>
                        </center>
                    </Card>
                </center>
            </div>
        )
    }
}

export default connect()(Register)