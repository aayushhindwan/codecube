import React, { Component ,Fragment} from 'react'
import PropTypes from 'prop-types'
import Post_Doubt from './doubt_post.js'
import '../assests/scss/practiceAllQuestion.scss'

import 'react-image-crop/lib/ReactCrop.scss';
import ReactCrop from 'react-image-crop';
import Dropzone from 'react-dropzone'
import { Link } from 'react-router-dom';

const imageMaxSize = 1000000000 // bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {return item.trim()})
export default class practice extends Component {
 
    constructor(props) {
        super(props);
       
      this.state = {
        selected : "question",
        crop : "",
        imgSrc : ""
     }
      }
 



    render() {
        return (
           <Fragment>
           <div>
             <div className="main-all-practice">
               
                 <div className="practice-question">
              <Link to='/practiceById/1'> <div className="question-title">Title</div></Link>
                   <div className="question-body">
                     Question body
                     <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                     End
                   </div>
                 <div className="tags-container">
                       <div>Programming</div>
                       <div>DP</div>
                       <div>Algo</div>
                 </div>
                 
              </div>
             
            
             </div>
           </div>
        
           </Fragment>
        )
    }
}
  
                 {/* <Dropzone onDrop={acceptedFiles => {
                     console.log(acceptedFiles)
                     
                     console.log(acceptedFiles[0].path)
                     this.setState({imgSrc : acceptedFiles[0].path})
                 }}>
                                {({getRootProps, getInputProps}) => (
                                    <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>Drag 'n' drop some files here, or click to select files</p>
                                    </div>
                                    </section>
                                )}
                             </Dropzone> */}