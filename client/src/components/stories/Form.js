import React from 'react'
import Select from 'react-select'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Form from 'react-bootstrap/FormGroup';

class StoryForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            bookTitle: '',
            bookBody: '',
            genre: '',
            language: '',
            tagName: ''
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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
        const formData = {
            bookTitle: this.state.bookTitle,
            bookBody: this.state.bookBody,
            genre: this.state.genre,
            language: this.state.language,
            tagName: this.state.tagName
        }
        // var formData = new FormData()
        // formData.append("bookTitle", this.state.bookTitle)
        // formData.append("bookBody", this.state.bookBody)
        // formData.append("genre", this.state.genre)
        // formData.append("language", this.state.language)
        // formData.append("tagName", this.state.tagName)

        // console.log("form data in Form.js")
        // console.log(formData.get("bookTitle"))
        // console.log(formData.get("bookBody"))
        // console.log(formData.get("genre"))
        // console.log(formData.get("language"))
        // console.log(formData.get("tagName"))

        this.props.handleSubmit(formData)
        // this.props.dispatch(startAddStory(formData, this.props))
    }

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
                        <input type="text" name="bookTitle" className="form-control" onChange={this.handleTitle}/>
                    </label><br/>
                    <label>
                        Book Body: 
                        <CKEditor
                            editor={ ClassicEditor }
                            // data={this.state.body}
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
                        Genre:
                        <Select
                            isMulti
                            name="colors"
                            options={options1}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleGenre}
                        />
                    </div><br/>
                    <div> 
                        Language:
                        <Select
                            isMulti
                            name="colors"
                            options={options2}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleLanguage}
                        />
                    </div><br/>
                    <div> 
                        Tags:
                        <Select
                            // defaultValue={[options[2], options[3]]}
                            isMulti
                            name="colors"
                            options={options1}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            onChange={this.handleTags}
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