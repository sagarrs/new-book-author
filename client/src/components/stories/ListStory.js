import React from 'react'
import {Link} from 'react-router-dom'

const Story = (props) => {
    return(
        <div>
            <h1>Here's the story</h1>
            <Link to="/story/new">Add new Story</Link>
        </div>
    )
}

export default Story