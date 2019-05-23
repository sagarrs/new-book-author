import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ShowStory = (props) => {
    return(
        <div style={{paddingTop: 100}}>
            <h1>Edit and Delete here</h1>

            {
                props.stories.map((story) => {
                    return <li key={story[0]._id} id={story[0]._id}>{story[0].bookTitle}</li>
                })
            }

            
            <p className="text-info">Title - dummy</p>
                <blockquote>
                    <p>dummy</p>
                    {/* <footer className="text-muted">Topic : dummy</footer>
                    <footer className="text-muted">Tags - dummy</footer> */}
                </blockquote>
                <div>
                    {/* <img className="home-img" src={`http://localhost:3005/${this.state.story.previewImageUrl}`} /><br/><br/> */}
                </div>
                <input type="button" className="btn btn-outline-success" value="Delete"/>&nbsp;&nbsp;
                <Link to="" className="btn btn-outline-success" >EDIT</Link><br/><br/>
                <Link to="" className="btn btn-outline-success">BACK</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        stories: state.stories
    }
}

export default connect(mapStateToProps)(ShowStory)