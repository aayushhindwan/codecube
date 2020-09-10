import React, { useState} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/doubts.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Post_Doubt from './doubt_post.js'

function MyVerticallyCenteredModalForAnswer(props) {
  const [answer,changeAnswer] = useState("");

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
     <Post_Doubt/>
         
        </Modal.Body>
        <Modal.Footer>
            <Button>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


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
             Write your Doubts 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Doubts</h4>
        <Post_Doubt/>
        </Modal.Body>
        <Modal.Footer>
            
          
        </Modal.Footer>
      </Modal>
    );
  }

function Doubts(){
    const [modalShow, setModalShow] = React.useState(false);
    const [modalShowAns, setModalShowAns] = React.useState(false);

        return (
            <>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
               <MyVerticallyCenteredModalForAnswer
            show={modalShowAns}
            onHide={() => setModalShowAns(false)}
          />
          {/* // main doubts  */}
            <div className="main_div">
                   <div className="announcement" onClick={() => setModalShow(true)}>
                    <i class="fa fa-book" aria-hidden="true"></i>
                        <div> What is your Doubts </div>
                   </div>
                  
                   <div className="posts">
                       <div className="authorId">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/goldhill.png" alt="no-img" />
                            <div className="userName"> 
                                <div className="name">shivam singh</div>
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
                            <Button onClick={() => setModalShowAns(true)}> Answer </Button>
                        </div>
                   </div>
            </div>
            </>
        )
    }

export default Doubts