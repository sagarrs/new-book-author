import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ShowStory = (props) => {
    console.log(props.stories)
    var arr1d = [].concat(...props.stories)
    var arr = arr1d.find((arr) => {
            return(
                arr._id == props.match.params.id
            )
        })
    console.log(arr)

    const items = []
   
    for(let key in arr){
        console.log(arr[key])
        items.push(<p>{arr[key]}</p>)
    }
    
    return(
        <div style={{paddingTop: 100}}>
            <h1>Edit and Delete here </h1>
            {items}
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        stories: state.stories,
    }
}

export default connect(mapStateToProps)(ShowStory)