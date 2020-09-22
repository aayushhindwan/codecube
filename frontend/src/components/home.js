import React,{ useState } from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Doubt from './doubt_comp.js'
import axios from "axios";
import parse from 'html-react-parser';
import domain from '../domain.js';
import port from '../port.js';
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
             Write your Answer {props.text}
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

class Home extends Component
{
   
    state={
      doubts:[{QuestionTitle:"TestingQ",QuestionBody:"Testing",_id:"00"}],
      no:5
    }
    increaseno=(event)=>{
      
      this.setState({no:this.state.no+5});
      console.log(this.state.no);
      var q=  axios.get(domain+':'+port+'/question/top'+this.state.no)
      .then(res => {
         var persons = res.data;    
        this.setState({doubts:persons});
      });
      
    }
async componentDidMount()
{
 var q= await axios.get(domain+':'+port+'/question/top'+this.state.no)
      .then(res => {
        //console.log(res.data);
         var persons = res.data;    
        this.setState({doubts:persons});
      })
}
render()
{

        return (
            <div>

  { this.state.doubts.map((p)=>{
    return (
<Doubt title={p.QuestionTitle} body={p.QuestionBody} _id={p._id} UpVote={p.UpVote} DownVote={p.DownVote} time={p.createdAt}/>
    );
   }
   )
 }
    <Button onClick={this.increaseno}>More Doubts</Button>     
</div>


             );
           }

          
    
}

export default Home;