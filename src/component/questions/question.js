import React, { Component } from 'react'

export default class Question extends Component {

    deleteQuestion = (e)=>{
      e.preventDefault();
      this.props.deleteQuestion(this.props.question._id)
    }
    showAssessment = ()=>{
      this.props.getAllQuestions(this.props.question._id)
    }
  
    render() {
      return (
        
        //   {console.log("assessment", this.props.assessment)}
          <div>
            <ul>
                <li>
                    <h2>{this.props.question.content}</h2>
                </li>
         
                <li>{this.props.assessment.questions}</li>
            </ul>   
          </div>
      )
    }
  }
  