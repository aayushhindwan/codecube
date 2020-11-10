import React, {Component, useState} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/doubts.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Post_Doubt from './doubt_post.js'
import Doubt from './doubt_comp.js'
import {  useHistory,withRouter} from "react-router-dom";
import axios from "axios";
import { Link } from 'react-router-dom';import domain from '../domain.js'
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
           Write your Doubt
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
     <Post_Doubt close={props.onHide}/>
         
        </Modal.Body>
        <Modal.Footer>
            
      
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

class Doubts extends Component{
    
    state={
      doubts:[],
      t:"",
      modalShow:false,
      modalShowAns:false,
    }
    tagsclick=(tg)=>{
     console.log(tg);
    }
    async componentDidMount()
    {
     var q= await axios.get(domain+'/doubts/top80', {
      headers: {
        'authorization': 'Bearer '+ localStorage.Token,
      }
    })
          .then(res => {
            console.log(res);
            if(res.status==202)
           this.props.history.push("/");
             var persons = res.data;    
            this.setState({doubts:persons});
          })
    }
       render()
       {

        return (
            <>
            <MyVerticallyCenteredModal
            show={this.state.modalShow}
            onHide={() => this.setState({modelShow:false})}
          />
               <MyVerticallyCenteredModalForAnswer
               show={this.state.modalShowAns}
               onHide={() => this.setState({modalShowAns:false})}
          />
          {/* // main doubts  */}
            <div className="main_div">
                   <div className="announcement" onClick={() => {this.setState({modelShow:true,modalShowAns:true})}}>
                    <i class="fa fa-book" aria-hidden="true"></i>
                        <div> What is your Doubts </div>
                   </div>
                   </div>
                   { this.state.doubts.map((p)=>{
    return (
<Doubt onChildClick={this.tagsclick} title={p.QuestionTitle} body={p.QuestionBody} _id={p._id} UpVote={p.UpVote} DownVote={p.DownVote} time={p.createdAt} user={p.QuestionUser} tags={p.Tags} />
    );
   }
   )
 }
                 
            
            </>
        );
}
    }

export default Doubts