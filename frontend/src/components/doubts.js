import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/doubts.scss'
import {Button,Modal} from 'react-bootstrap'




function MyVerticallyCenteredModal(props) {
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
          <p>
            This is my doubts and i will solve it 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Doubts(){
    const [modalShow, setModalShow] = React.useState(false);
   
        return (
            <>
            <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          {/* // main doubts  */}
            <div className="main_div">
                   <div className="announcement" onClick={() => setModalShow(true)}>
                    <i class="fa fa-book" aria-hidden="true"></i>
                        <div> What is your Question </div>
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
                            <Button> Answer </Button>
                        </div>
                   </div>
            </div>
            </>
        )
    }

export default Doubts