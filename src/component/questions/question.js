import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import '../assessments/assessments.css'
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
        <div className="card">
          <div className="card-body crd">
            <li>
                  {question.content}
                <div className="card-content">
                  <Button className="ml-5 btn btn-sm btn-warning" onClick={(e)=> this.props.history.push(`/question-show/${question._id}`)}>Show</Button>
                  <Button className="btn btn-sm btn-success" onClick={(e)=> this.props.history.push(`/update-question/${question._id}`)}>Update</Button>
                </div>  
            </li>
          </div>
        </div>
      
      )
    }
  }
  
  export default  withRouter(Question);