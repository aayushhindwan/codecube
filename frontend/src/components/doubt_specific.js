import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import '../assests/scss/home.scss'
import {Button,Modal} from 'react-bootstrap'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import  { Component } from 'react'
import { Redirect } from 'react-router';
import {  useHistory,withRouter} from "react-router-dom";
import domain from '../domain.js';
export default class Doubt extends Component
{
  state={id:'',answers:[]}
  componentDidMount()
  {

axios.get(domain+'getanswer/this.props.match.params.id')
      .then(res => {
        if(res.status==202)
      this.props.history.push("/");
         var d= res.data;
        this.setState({answers:d.Answers});
        this.setState({title:d.question.QuestionTitle});
        this.setState({body:d.question.QuestionBody});
      })

  }

render()
{


return (
   null
  );

}
}