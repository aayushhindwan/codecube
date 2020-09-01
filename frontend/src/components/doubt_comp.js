import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  { Component } from 'react'
import { Redirect } from 'react-router';
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
                        <div className="postQuestions"> 
                   {this.props.title}
                        </div> 
                        <div className="answerPost">
                       {this.props.body}
                        </div>
                        <div className="answerBtn">
                            <Button> Answer </Button>
                        </div>
                   </div>
        </div>
  );

}
}