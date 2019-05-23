import React from 'react'
import StoryForm from './Form'
import {connect} from 'react-redux'
import {startAddStory} from '../../redux/actions/story'

class StoryNew extends React.Component{
    handleSubmit = (formData) => {
        this.props.dispatch(startAddStory(formData, this.props))
    }

    render(){
        return(
            <div style={{paddingTop: 100}}>
                <h2>Here the we need to submit to redux</h2>
                <StoryForm handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

export default connect()(StoryNew)