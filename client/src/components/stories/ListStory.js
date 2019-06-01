import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {  Row, Col, Card, Button, Form} from 'react-bootstrap'
import download from "../../images/download.jpeg"
import StarRatings from '../../../node_modules/react-star-ratings';

const Story = (props) => {
    // console.log("this is to check the state of books in 'list story'")
    // console.log(props.stories[0])
    // props.stories.map((story) => {
    //     console.log(story[0].bookTitle)
    // })
    return(
        <div className="container-fluid" >
            <div className="row">
                <div className="col-sm-9"> <h2>Listing Books </h2> <br></br>
                <Link to="/story/new" className="btn btn-outline-success">Add new Story</Link><br/><br/>
                    <Row>
                        {
                            props.stories.length == 0 ? (<h2>No Stories found</h2>) : (
                                props.stories.map((str) => {
                                    return (
                                        <div className="col-sm-4">
                                            <Card style={{ width: '20rem' }}> 
                                                <Card.Img variant="Left" src={download}/>
                                                    <Card.Body>
                                                        <Card.Title><b>{str.bookTitle}</b></Card.Title>
                                                            <Card.Text>
                                                            <b> Book Title </b> : {str.bookTitle}<br></br>
                                                            <b> Book Body </b> : {str.bookBody}<br></br>
                                                            <b> Languages </b> : {str.language}<br></br>
                                                            <b> Rating </b> : 
                                                            <StarRatings
                                                                rating={4}
                                                                starRatedColor="blue"
                                                                // changeRating={this.changeRating}
                                                                numberOfStars={5}
                                                                starDimension="20px"
                                                                starSpacing="2px"
                                                                />
                                                            </Card.Text>
                                                            <Link to={`/story/show/${str._id}`} className="btn btn-outline-success">Go to story</Link>
                                                            {/* <Button variant="primary">View Book</Button> */}
                                                        <br></br>
                                                    </Card.Body>
                                            </Card><br></br><br></br>  
                                        </div>
                                    )
                                })
                            )
                        } 
                    </Row>                  
                </div>  
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        stories: state.stories  
    }
}

export default connect(mapStateToProps)(Story)