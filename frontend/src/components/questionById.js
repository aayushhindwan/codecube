import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../assests/scss/questionById.scss'
import Answer from './answer_doubt.js'
import {Button,Modal} from 'react-bootstrap'
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import domain from '../domain.js'
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    constructor(props) {
        super(props);
        
      }
   state = {
        Answer : [{body:"testing1"},{body:"testing2"},{body:"testing3"}],
        text: "",
        QuestionBody:"",
        QuestionTitle:"",
    }
async componentDidMount()
{

axios.get(domain+":3001/answer/getanswer/"+this.props.match.params.id,{
  headers: {
    'authorization': 'Bearer '+ localStorage.Token,
  }
}).then(res => {
         var m = res.data;
      
        this.setState({Answer:m.Answers});
        this.setState({QuestionTitle:m.QuestionTitle});
        this.setState({QuestionBody:m.QuestionBody});

      })



}
      SubmitAnswer=(event)=>
{
   if(this.state.text){
    const response =  axios.post(domain+':3001/answer/postanswer/'+this.props.match.params.id, { Body: this.state.text,},{
      headers: {
        'authorization': 'Bearer '+ localStorage.Token,
      }
    }).then((res)=>{
         console.log(res);
         window.location.reload();
    });
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
                        {this.state.QuestionTitle}
                        </div>
                        <div className="description">
                        {this.state.QuestionBody}
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
                     <h2> Answers</h2>
                        {
                       this.state.Answer.map((a,i)=>{
                           return(
                       <div>
                            <Answer body={a.body} indexValue={i+1}/>
                            </div>
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
