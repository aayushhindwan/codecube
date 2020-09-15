import React, { useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/doubts.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Post_Doubt from './doubt_post.js'
import Doubt from './doubt_comp.js'
import axios from "axios";
import domain from '../domain.js';
import port from '../port.js';
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
    const [doubt,setQ]= React.useState([]);
    
 useEffect(() => {
   console.log(domain+':'+port+'/question/top'+10);
      var q= axios.get(domain+':'+port+'/question/top'+10)
      .then(res => {
         var persons = res.data;    
        setQ(persons);
      });
    }, [])
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
                   </div>  
                 
  {doubt.map((p)=>{
    return (
<Doubt title={p.QuestionTitle} body={p.QuestionBody} _id={p._id} UpVote={p.UpVote} DownVote={p.DownVote} />
    );
   }
   )
 }
        

           
            </>
        )
    }

export default Doubts