import React from 'react'
import StoryForm from './Form'

class StoryNew extends React.Component{
    render(){
        return(
            <div style={{paddingTop: 100}}>
                <h2>Here the we need to submit to redux</h2>
                <StoryForm/>
            </div>
        )
    }
}

export default StoryNew