import React,{ useState } from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Doubt from './doubt_comp.js'
import axios from "axios";
import domain from '../domain.js'
import { Link } from 'react-router-dom';
import {  useHistory,withRouter} from "react-router-dom";
import parse from 'html-react-parser';
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
      doubts:[{"QuestionTitle":"hello"}],
      t:""
    }
tagsclick=(p)=>
   {

      console.log("hello",p);
      this.setState({t:p});
    axios.get(domain+'/question/top80/?tags='+p)
      .then(res => {
        if(res.status==202)
      this.props.history.push("/");
         var persons = res.data;    
        this.setState({doubts:persons});
        console.log(persons);
      })
}
async componentDidMount()
{
  console.log("hiiw");
 var q= await axios.get(domain+'/doubts/top80', {
  headers: {
    'authorization': 'Bearer '+ localStorage.Token,
  }
})
      .then(res => {
        console.log("homeee");
        console.log(res);
        if(res.status==202)
      this.props.history.push("/");
         var persons = res.data;    
        this.setState({doubts:persons});
      }).catch(err=>{
        console.log("erroer");
        this.props.history.push("/");

      })
}
render()
{

        return (
            <div>
              <Link to ="/contribute"><h4>Want to contribute question ! You are most welcome</h4></Link>
  { this.state.doubts.map((p)=>{
    return (
<Doubt x={()=>{
  
  this.props.history.push("/");
}} onChildClick={this.tagsclick} image={p.QuestionUserImage} title={p.QuestionTitle} body={p.QuestionBody} _id={p._id} UpVote={p.UpVote} DownVote={p.DownVote} time={p.createdAt} user={p.QuestionUser} tags={p.Tags} />
    );
   }
   )
 }
         
</div>


             );
           }

          
    
}

export default Home;