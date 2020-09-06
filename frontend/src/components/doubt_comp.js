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

render()
{
return (
    <div className="main_div" onClick={{}}>
   <div className="posts">
                       <div className="authorId">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/goldhill.png" alt="no-img" />
                            <div className="userName"> 
                                <div>shivam singh</div>
                                <div className="postedOn">postedOn. 19 July</div>
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
                         <i className="fa fa-thumbs-up" aria-hidden="true"> 34</i>
                         <i className="fa fa-thumbs-down" aria-hidden="true"> 545</i>

                        </div>
                   </div>
        </div>
  );

}
}