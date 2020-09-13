import React, { useState} from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/doubts.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import  { Component } from 'react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Link, useHistory,withRouter} from "react-router-dom";

class Post_Doubt extends Component {

state={
  title:'',
  tags:[],
  body:'',

}

 SubmitDoubt=(event)=>
{
  var id="";
  const response =  axios.post('http://192.168.1.7:3001/question/postQuestion', { "QuestionTitle": this.state.title,
    "QuestionTags":  this.state.tags,
    "QuestionBody": this.state.body,}).then(res => {
     id=res.data;
     this.setState({title: ''});
     this.setState({tags: []});
     this.setState({body:''});
     this.props.history.push("/questionById/"+id);
 

   })
   
 
  
}
handleTitleChange=(event)=> {
  console.log("changing");
    this.setState({title: event.target.value});

  }
  handleTagChange=(event)=> {
    this.setState({tags: event.target.value});

  }
render()
{
  return (
    
    <div  className="doubts-posts">
    <legend>Title</legend>
    <input type="text" placeholder="Title of doubts" onChange={this.handleTitleChange} value={this.state.title}/>
    <CKEditor 
          editor={ClassicEditor}
          data = {this.state.body}
          onChange={(e,editor)=> {
            console.log(editor.getData());
            this.setState({body:editor.getData()});
          }}
         />
         <legend>Tags</legend>
    <input type="text" placeholder="tags of your doubts" onChange={this.handleTagChange} value={this.state.tags} />
    <br/>
    <Button onClick={this.SubmitDoubt} >Submit Doubt</Button>
    </div>     
        
  );
}
}

export default  withRouter(Post_Doubt)