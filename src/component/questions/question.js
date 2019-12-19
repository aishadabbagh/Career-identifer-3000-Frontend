import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'

class Question extends Component {

    // deleteQuestion = (e)=>{
    //   e.preventDefault();
    //   this.props.deleteQuestion(this.props.question._id)
    // }
    // showAssessment = ()=>{
    //   this.props.getAllQuestions(this.props.question._id)
    // }
  
    render() {
      const { question } = this.props;
      return (
        
      <li>{question.content} 
      
      <Button onClick={(e)=> this.props.history.push(`/question-show/${question._id}`)}>Show</Button>
      <Button onClick={(e)=> this.props.history.push(`/update-question/${question._id}`)}>Update</Button></li>
      
      )
    }
  }
  
  export default  withRouter(Question);