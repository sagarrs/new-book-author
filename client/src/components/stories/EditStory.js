import React from 'react'
import StoryForm from './Form'
import {connect} from 'react-redux'
import {startEditStory} from '../../redux/actions/story'

const EditStory = (props) => {
    // console.log(props.stories)
    const stories = Object.assign({}, props.stories)
    // console.log(stories.bookTitle)
    // or do below
    // if(props.stories){
    //     console.log(props.stories.bookTitle)
    // }
    const handleSubmit = (formData) => {
            console.log("[][][][][][][][][][][][][][][][][][][][][][][][")            
            props.dispatch(startEditStory(formData, stories._id, props))
        }

    if(props.stories){
        return(
            <div style={{paddingTop: 100}}>
                <h1>Edit madappa</h1>
                <StoryForm handleSubmit={handleSubmit} stories={props.stories}/>
            </div>
        )
    }else{
        return(
            <div>
                <p>nothing here</p>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return{
        stories: state.stories.find((story) => {
            return story._id === id 
        })
    }
}

export default connect(mapStateToProps)(EditStory)