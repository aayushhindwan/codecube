import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/home.scss'
import {Button} from 'react-bootstrap'
import Doubt_Question from './doubt_question.js'

export default class home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="main_div">
                   <div className="announcement">
                        <Doubt_Question/> 
                         
                   </div>
                  
            </div>
        )
    }
}
