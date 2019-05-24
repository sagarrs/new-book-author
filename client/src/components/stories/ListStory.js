import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Story = (props) => {
    console.log("this is to check the state of books in 'list story'")
    console.log(props.stories[0])
    // props.stories.map((story) => {
    //     console.log(story[0].bookTitle)
    // })
    return(
        <div style={{paddingTop: 100}}>
            <h1>Here's the story </h1>
            {/* {
                props.stories.map((story) => {
                    return <li key={story[0]._id} id={story[0]._id}>{story[0].bookTitle}</li>
                })
            } */}

            <div className="card">
                <div className="card-header">
                    Stories
                </div>
                <div className="card-body">
                    {
                        props.stories[0] == "" ? (<h2>No Stories found</h2>) : (
                            props.stories.map((story) => {
                                return (
                                    story.map((str) => {
                                        return (
                                            <div key={str._id}>
                                                <h5 className="card-title">{str.bookTitle}</h5>
                                                <p className="card-text" key={str._id}>{str.bookBody}</p><br/>
                                                <Link to={`/story/show/${str._id}`} className="btn btn-outline-success">Go to story</Link><br/>
                                            </div>
                                        )
                                    })
                                )
                            })
                        )
                    } 
                </div>
            </div><br/>

            <Link to="/story/new" className="btn btn-outline-success">Add new Story</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        stories: state.stories  
    }
}

export default connect(mapStateToProps)(Story)