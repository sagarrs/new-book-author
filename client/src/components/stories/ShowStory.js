import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ShowStory = (props) => {
    console.log(props.stories)
    // var arr1d = [].concat(...props.stories)
    // var arr = props.stories.find((arr) => {
    //         return(
    //             arr._id == props.match.params.id
    //         )
    //     })
    // console.log(arr)

    // const items = []
   
    // for(let key in arr){
    //     console.log(arr[key])
    //     items.push(<p>{arr[key]}</p>)
    // }
    
    return(
        <div style={{paddingTop: 100}}>
            <h1>Edit and Delete here </h1>
            {/* <p>{arr.bookTitle}</p> */}
            {
                props.stories.map((story) => {
                    if(story._id == props.match.params.id){
                        return(
                            <div key={story._id}>
                                <p>{story.bookTitle}</p>
                                <p>{story.bookBody}</p>
                                <Link to={`/story/edit/${props.match.params.id}`} className="btn btn-outline-success">Edit</Link>&nbsp;&nbsp;
                                <Link to="" className="btn btn-outline-success">Delete</Link>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        stories: state.stories
        // stories: state.stories.find(story => story._id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(ShowStory)