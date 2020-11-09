import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class questions extends Component {
    static propTypes = {
        prop: PropTypes
    }
    state={Questions:[]};
componentDidMount()
{
 axios.get('http://localhost:3001/question/top80',{
    headers: {
      'authorization': 'Bearer '+ localStorage.Token,
    }
  }).then((res)=>{
    if(res.status==202)
    this.props.history.push("/");
     this.setState({Questions:res.data});
 })
}
    render() {
        return (
            <div>
           {
               this.state.Questions.map((data)=>{
                   return(
                <div className="main-all-practice">
               
                <div className="practice-question">
             <Link to={'/practiceById/'+data._id}> <div className="question-title">{data.QuestionTitle}</div></Link>
                  
                <div className="tags-container">
                {data.Tags.map((d)=>{
                          return(
                           <div>{d}</div>
                          );
                       })}
                </div>
                
             </div>
            
           
            </div>
                   );
               })
           }
           
            </div>
        )
    }
}
