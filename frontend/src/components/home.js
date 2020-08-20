import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function MyVerticallyCenteredModal(props) {
    const [answer,changeAnswer] = useState("")
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
             Write your Answer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <CKEditor 
          editor={ClassicEditor}
          data = "Write your answer"
          onChange={(e,editor)=> changeAnswer(editor.getData())}
         />
         
        </Modal.Body>
        <Modal.Footer>
            <Button>Submit</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Home(){
    const [modalShow, setModalShow] = useState(false);


        return (
            <>
              <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
             />
            <div className="main_div">
                   <div className="announcement">
                         
                   </div>
                   <div className="posts">
                       <div className="authorId">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/goldhill.png" alt="no-img" />
                            <div className="userName"> 
                                <div className="name">shivam singh</div>
                                <div className="postedOn">postedOn. 19 July</div>
                            </div>
                        </div>                            
                        <div className="postQuestions"> 
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        </div> 
                        <div className="answerPost">
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer......
                        </div>
                        <div className="answerBtn">
                            <Button onClick={() => setModalShow(true)} > Answer </Button>
                        </div>
                   </div>
            </div>
        </>
        )
    
}

export default Home;