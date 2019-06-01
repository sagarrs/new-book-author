import React from 'react'
import Select from 'react-select'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Form from 'react-bootstrap/FormGroup';

class StoryForm extends React.Component{
    constructor(props){
        console.log("consstructor")
        console.log(props.stories)
        super(props)
        this.state = {
            bookTitle: props.stories ? props.stories.bookTitle : '',
            bookBody: props.stories ? props.stories.bookBody : '',
            genre: props.stories ? props.stories.genre : '',
            language: props.stories ? props.stories.language : '',
            tagName: props.stories ? props.stories.tagName : '',
            previewImageUrl: null
        }
    }

    handleTitle = (e) => {
        const title = e.target.value
        this.setState(() => ({
            bookTitle: title
        }))
    }

    handleBody = ( ( event, editor ) => {
        const data = editor.getData()
        this.setState(() => ({
            bookBody: data
        }))
    } )

    handleGenre = (e) => {
        const genre = e.map((genre) => {
            return genre.value
        }) 
        this.setState(() => ({
            genre
        }))
    }

    handleLanguage = (e) => {
        const language = e.map((language) => {
            return language.value
        }) 
        this.setState(() => ({
            language
        }))
    }

    handleTags = (e) => {
        const tags = e.map((tag) => {
            return tag.value
        }) 
        this.setState(() => ({
            tagName: tags
        }))
    }

    handleFile = (e) => {
        this.setState({previewImageUrl: e.target.files[0]})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        // const formData = {
        //     bookTitle: this.state.bookTitle,
        //     bookBody: this.state.bookBody,
        //     genre: this.state.genre,
        //     language: this.state.language,
        //     tagName: this.state.tagName
        // }
        var formData = new FormData()
        formData.append("bookTitle", this.state.bookTitle)
        formData.append("bookBody", this.state.bookBody)
        formData.append("genre", this.state.genre)
        formData.append("language", this.state.language)
        formData.append("tagName", this.state.tagName)
        formData.append("previewImageUrl", this.state.previewImageUrl)

        console.log("form data in Form.js")
        console.log(formData.get("bookTitle"))
        console.log(formData.get("bookBody"))
        console.log(formData.get("genre"))
        console.log(formData.get("language"))
        console.log(formData.get("tagName"))
        console.log(formData.get("previewImageUrl"))

        this.props.handleSubmit(formData)

        // this.props.dispatch(startAddStory(formData, this.props))
    }

    // static getDerivedStateFromProps(nextProps, prevState){
    //     console.log("getDerivedStateFromProps")

    //     if(nextProps.stories._id != prevState._id){
    //         return{
    //             bookTitle: nextProps.stories.bookTitle,
    //             bookBody: nextProps.stories.bookBody,
    //             genre: nextProps.stories.genre,
    //             language: nextProps.stories.language,
    //             tagName: nextProps.stories.tagName,
    //         }
    //     }
    // }

    render(){

        const options1 = [
            { value: 'fantasy', label: 'Fantasy' },
            { value: 'sciencefiction', label: 'ScienceFiction' },
            { value: 'romance', label: 'Romance' },
            { value: 'thriller', label: 'Thriller' },
            { value: 'mystery', label: 'Mystery' },
            { value: 'westerns', label: 'Westerns' },
            { value: 'satire', label: 'Satire' },
            { value: 'horror', label: 'Horror' },
            { value: 'mythology', label: 'Mythology' },
            { value: 'shortstory', label: 'ShortStory' }
          ]
        const options2 = [
            { value: 'kannada', label: 'Kannada' },
            { value: 'hindi', label: 'Hindi' },
            { value: 'english', label: 'English' },
          ]

        return(
            <div>
                <h3>This is the form i was talking abt</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Book Title:
                        <input type="text" name="bookTitle" value={this.state.bookTitle} className="form-control" onChange={this.handleTitle}/>
                    </label><br/>
                    <label>
                        Book Body: 
                        <CKEditor
                            editor={ ClassicEditor }
                            data={this.state.bookBody}
                            onInit={ editor => {
                            } }
                            onChange={this.handleBody}
                            onBlur={ editor => {
                            } }
                            onFocus={ editor => {
                            } }
                        />
                    </label><br/>
                    <div> 
                        Image
                        <input type="file" name="previewImageUrl" onChange={this.handleFile}/>
                    </div><br/>
                    <div> 
                        Genre:
                        <Select
                            isMulti
                            name="genre"
                            options={options1}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleGenre}
                            // value={this.state.genre}
                        />
                    </div><br/>
                    <div> 
                        Language:
                        <Select
                            isMulti
                            name="language"
                            options={options2}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleLanguage}
                            // value={this.state.language}
                        />
                    </div><br/>
                    <div> 
                        Tags:
                        <Select
                            isMulti
                            name="tagName"
                            options={options1}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleTags}
                            // value={this.state.tagName}
                        />
                    </div><br/>
                    <label>
                        <input type="Submit" className="btn btn-outline-primary"/>
                    </label>
                </form>
            </div>

            
        )
    }
}

export default StoryForm