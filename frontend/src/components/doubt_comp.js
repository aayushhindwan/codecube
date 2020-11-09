import React, { useState } from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/practiceAllQuestion.scss'
import { useHistory } from "react-router-dom";
import '../assests/scss/home.scss'
import 'react-image-crop/lib/ReactCrop.scss';
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  { Component } from 'react'
import { Redirect } from 'react-router';
import {Link} from "react-router-dom";
import port from '../port.js'
import domain from '../domain.js'
import {  withRouter} from "react-router-dom";
import axios from 'axios'
export default class Doubt extends Component
{
  state={x:0,y:0,tags:[]}
  
  
  async componentDidMount()
{
  axios.get(domain+':'+port+'/isSignedIn',{
            headers: {
              'authorization': 'Bearer '+ localStorage.Token,
            }
          }).then(res=>{
if(res.status==202)
      this.props.x();
    else{
      var y=this.state.tags;
      if(this.props.tags){
this.props.tags.map((a)=>{
  y.push(a)
});
}
this.setState({tags:y});
console.log(this.props.tags);}

  });


}
  
  handleLike=(event)=>
  {
   axios.post(domain+':'+port+'/likes',{id:this.props._id,inc:1},{
    headers: {
      'authorization': 'Bearer '+ localStorage.Token,
    }
  }).then(res=>{
    if(res.status==202)
      this.props.history.push("/");
    console.log("liked");
    window.location.reload();
   });
   
   this.setState({x:this.state.x+1});
  }
  handleDislike=(event)=>
  {
    this.setState({y:this.state.y-1});
    axios.post(domain+':'+port+'/likes',{id:this.props._id,inc:-1},{
      headers: {
        'authorization': 'Bearer '+ localStorage.Token,
      }
    }).then(res=>{
      if(res.status==202)
      this.props.history.push("/");
      window.location.reload();
    }); 
    
  }

render()
{
return (
    <div className="main_div main-all-practice" >
      
   <div className="posts">
                       <div className="authorId">
                            <img src="https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg" alt="no-img" />
                            <div className="userName"> 
<div>{this.props.user}</div>
<div className="postedOn">postedOn. {this.props.time}</div>
                            </div>
                        </div>                            
                      <Link to={"/questionById/"+this.props._id} >   <div className="postQuestions"> 
                   {this.props.title}
                        </div> 
                        </Link>
                        <div className="answerPost">
                        <div dangerouslySetInnerHTML={ { __html: this.props.body } }></div>
                        <div className="tags-container">
                          {
                           this.state.tags.map((k,index)=>{
                            return(
                            <div onClick={()=>{this.props.onChildClick(k)}}>{k}</div>
                            )

                           })
                          }
                     
                 </div>
                        </div>
                    
                        <div className="answerBtn">
<i className="fa fa-thumbs-up" onClick={this.handleLike} aria-hidden="true">{this.props.UpVote}</i>
                         <i className="fa fa-thumbs-down" onClick={this.handleDislike} aria-hidden="true">{this.props.DownVote}</i>
        
                        </div>
                   </div>
        </div>
  );

}
}