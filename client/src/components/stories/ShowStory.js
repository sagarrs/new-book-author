import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ShowStory = (props) => {
    props.stories.forEach(element => {
        element.find((ele) => {
            if(ele._id == props.match.params.id){
                console.log(ele)
            }
        })
    })
    
    return(
        <div style={{paddingTop: 100}}>
            <h1>Edit and Delete here</h1>

            {
                props.stories.forEach(element => {
                        return(
                            element.find((ele) => {
                                if(ele._id == props.match.params.id){
                                    console.log(ele.bookBody)
                                }
                            })
                        )
                    })
            } 

            {/* {
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
            }  */}

            
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

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        // clients: state.clients.find(client => client.id == id)
        stories: state.stories,
    }
}

export default connect(mapStateToProps)(ShowStory)