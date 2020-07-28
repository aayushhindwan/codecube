import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../assests/scss/home.scss'
import {Button} from 'react-bootstrap'

export default class home extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="main_div">
                   <div className="announcement">
                         
                   </div>
                   <div className="posts">
                       <div className="authorId">
                            <img src="https://homepages.cae.wisc.edu/~ece533/images/goldhill.png" alt="no-img" />
                            <div className="userName"> 
                                <div>shivam singh</div>
                                <div className="postedOn">postedOn. 19 July</div>
                            </div>
                        </div>                            
                        <div className="postQuestions"> 
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        </div> 
                        <div className="answerPost">
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer......
                        </div>
                        <div className="answerBtn">
                            <Button> Answer </Button>
                        </div>
                   </div>
            </div>
        )
    }
}
