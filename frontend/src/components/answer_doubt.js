import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assests/scss/questionById.scss'
import parse from 'html-react-parser';

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
                <div className="indexValue">{indexValue}.</div>
         <div dangerouslySetInnerHTML={ { __html: this.props.body } }></div>
                          </div>
           
        )
    }
}
