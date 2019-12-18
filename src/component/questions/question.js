import React, { Component } from 'react'

export default class Question extends Component {

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
        
      <li>{question.content}</li>
      )
    }
  }
  