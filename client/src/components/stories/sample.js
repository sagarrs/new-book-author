import React from 'react' 
import {Row, Form, Col, Button, Card, Popover, OverlayTrigger} from 'react-bootstrap'
// import axios from '../../config/axios'
 import CreatableSelect from 'react-select/lib/Creatable';
import Help from '@material-ui/icons/Help';
// import Help from '@material-ui/icons/Help';

import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class NewStory extends React.Component {
    constructor() {
        super() 
        this.state = {
          title:'',
          description: '',
          
          tags:'',
          Tags:[],
          genres:[{id:1, name:'Horror'},{id:2, name:'Action'},{id:3, name:'Adventure'}],
          genreId:'',
          languages:[{id:1, name:'English'},{id:2, name:'Hindi'},{id:3, name:'Kannada'}],
          langaugeId:'',
          targetId:'',
          targets:[{id:1, name:'Middle Grade (8-13 years)'},{id:2, name:'Young Agult (13-18 years)'},{id:3, name:'New Adult (18-25 years)'},
          {id:4, name:'Adults (25+ years of age)'}],
          rating:'',
          files: [{
            source: 'index.html',
            options: {
                type: 'local'
            }
        }]
            
       
        }
    }
    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }
    
    render() {
        const popover = (
            <Popover id="popover-basic" title="Add a story description">
             Stories with descriptions get 100x more reads than ones without<br></br>
                Write a short description that will excite your readers and hook them in

            </Popover>
          );
          
          const Example = () => (
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Help ></Help>
            </OverlayTrigger>
          ); 
      
        return (
            <div className = 'container-fluid' style={{paddingTop:'120px'}}>
            <Row>
                <div className="col-sm-4" >
                <b><center><h2>Add Image</h2> </center></b>
                <FilePond ref={ref => this.pond = ref}
                          files={this.state.files}
                          allowMultiple={true}
                          maxFiles={3} 
                          server="/api"
                          oninit={() => this.handleInit() }
                          onupdatefiles={fileItems => {
                              // Set currently active file objects to this.state
                              this.setState({
                                  files: fileItems.map(fileItem => fileItem.file)
                              });
                          }}>
                </FilePond>
                </div>


                <div className="col-sm-8" >
               
               <Card>
                    <Card.Header>Story Details</Card.Header>
                    {/* <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body> */}
                  <br></br>
               <Form as={Col} md="12" >
               
                    <Form.Group as={Col} md="6" controlId="formBasicName">
                        <Form.Label> <b>Title</b> </Form.Label>
                        <Form.Control type="text" value={this.state.title} onChange={this.handleTitleChange}  placeholder="untitled story" required />
                        
                    </Form.Group>
                    <hr></hr>
                    <Form.Group as={Col} sm="12" controlId="formBasicDescription">
                    
                        <Form.Label><b> Description </b> 
                        <Example />
                    
                        </Form.Label>
                        <Form.Control as="textarea" rows='10'  value={this.state.description} onChange={this.handleDescriptionChange}  placeholder="description" required />
                        
                    </Form.Group>   <br></br><hr></hr>
                   
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect1" > 
                        <Form.Label> <b>Genre</b> <Example /></Form.Label>
                       
                        <Form.Control as="select" value={this.state.genreId1} onChange={this.handleGenreChange}>
                    {/* <select value={this.state.genreId} onChange={this.handlegenreChange}> */}
                        <option> Select a genre</option>
                        {this.state.genres.map(genre => {
                                return (
                                    <option key={genre._id} value={genre._id}>{genre.name}</option>
                                )
                            })
                        }
                    {/* </select> */}
                        </Form.Control>
                    </Form.Group>    <hr></hr>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect2" >
                        <Form.Label> <b>Target Audience</b> <Example /></Form.Label>
                       
                        <Form.Control as="select" value={this.state.targetId1} onChange={this.handleTargetChange}>
                  
                        <option> Who is your primary Audience</option>
                        {this.state.targets.map(target => {
                                return (
                                    <option key={target._id} value={target._id}>{target.name}</option>
                                )
                            })
                        }
                    {/* </select> */}
                        </Form.Control>
                        </Form.Group>    <hr></hr>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect2" >
                        <Form.Label> <b>Language</b> <Example /></Form.Label>
                       
                        <Form.Control as="select" value={this.state.languageId} onChange={this.handleLanguageChange}>
                    {/* <select value={this.state.languageId} onChange={this.handlelanguageChange}> */}
                        <option> Select a language</option>
                        {this.state.languages.map(language => {
                                return (
                                    <option key={language._id} value={language._id}>{language.name}</option>
                                )
                            })
                        }
                    {/* </select> */}
                        </Form.Control>
                        </Form.Group>    <hr></hr>
                    <Form.Group as={Col} md="6" controlId="exampleForm.ControlSelect2" >
                        <Form.Label> <b>Tags</b> <Example /></Form.Label>
                    <CreatableSelect
                        isClearable
                        onChange={this.handleTagChange}
                        isMulti
                        // options={options}
                    />
                     </Form.Group>
                    <br/>
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                  
                </Form>
                <br></br>
                </Card>;
            
                </div>
                </Row>
            </div>
        )
            
    }
}

export default NewStory