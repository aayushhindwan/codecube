import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assests/scss/questionById.scss'
import parse from 'html-react-parser';
import domain from '../domain.js'
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        
      }
    
    render() {
        const {indexValue} = this.props
        return (
            <div className="answer">
                             <div></div>
        <div><h4>Posted By:{this.props.postedBy}</h4></div>
         
         <div dangerouslySetInnerHTML={ { __html: this.props.body } }></div>
                          </div>
           
        )
    }
}
