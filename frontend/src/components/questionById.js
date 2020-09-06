import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assests/scss/questionById.scss'
import Answer from './answer_doubt.js'
import {Button,Modal} from 'react-bootstrap'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        this.state = {
            Answer : [{body:"testing1"},{body:"testing2"},{body:"testing3"}],
            text: ""
        }
      }
componentDidMount()
{

axios.get("http://localhost:3001/answer/getanswer/"+this.props.match.params.id).then(res => {
         var m = res.data;
      
        this.setState({Answer:m.Answers});

      })



}
      SubmitAnswer=(event)=>
{
   if(this.state.text){
    const response =  axios.post('http://localhost:3001/answer/postanswer/'+this.props.match.params.id, { Body: this.state.text,});
   }else{
     alert("please write the answer")
   }
   
 
this.setState({text: ""});

}

    render() {
        return (
            <div>
                <div className="main_div">  
                   <div className="posts">         
                        <div className="postQuestions"> 
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        </div>
                        <div className="description">
                        This is my Questions are the c languages that is used for reference pointer
                        This is my Questions are the c languages that is used for reference pointer
                        </div>
                        <div className="answerPost">
                            Write Your Answer {this.props.match.params.id}
                      <CKEditor 
          editor={ClassicEditor}
          data = {this.state.text}
          onChange={(e,editor)=> {
            console.log(editor.getData());
            this.setState({text:editor.getData()});
          }}
         />
         <Button onClick={this.SubmitAnswer} >Submit Answer</Button>
                           
                        </div>
                     
                      <div className="all_answers">
                      <h2>{this.state.Answer.length} Answers</h2><hr />
                        {
                         this.state.Answer.map((a,i)=>{
                           return(

                            <Answer body={a.body} indexValue={i+1}/>
                            );

                         })
                        
                         


                        }

                         


                      </div>
                   </div>
                </div>
            </div>
        )
    }
}
