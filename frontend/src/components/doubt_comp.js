import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  { Component } from 'react'
import { Redirect } from 'react-router';
import {Link} from "react-router-dom";
export default class Doubt extends Component
{
  state={x:0,y:0}

  handleLike=(event)=>
  {
   axios.post(domain+':'+port+'/likes',{id:this.props._id,inc:1}).then(res=>{
    console.log("liked");
   });
   
   this.setState({x:this.state.x+1});
  }
  handleDislike=(event)=>
  {
    this.setState({y:this.state.y-1});
    axios.post(domain+':'+port+'/likes',{id:this.props._id,inc:-1}); 
  }

render()
{
return (
    <div className="main_div" >
   <div className="posts">
                       <div className="authorId">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/goldhill.png" alt="no-img" />
                            <div className="userName"> 
                                <div>shivam singh</div>
<div className="postedOn">postedOn. {this.props.time}</div>
                            </div>
                        </div>                            
                      <Link to={"/questionById/"+this.props._id} >   <div className="postQuestions"> 
                   {this.props.title}
                        </div> 
                        </Link>
                        <div className="answerPost">
                        <div dangerouslySetInnerHTML={ { __html: this.props.body } }></div>
                        </div>
                        <div className="answerBtn">
<i className="fa fa-thumbs-up" onClick={this.handleLike} aria-hidden="true">{this.props.UpVote}</i>
                         <i className="fa fa-thumbs-down" onClick={this.handleDislike} aria-hidden="true">{this.props.DownVote}</i>
        <button onClick={this.handleLike} ></button>
                        </div>
                   </div>
        </div>
  );

}
}