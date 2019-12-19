import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { deleteAssessmentByID } from './api'

class Assessment extends Component {

  deleteAssessment = (e) => {
    const { assessment, getAssessments } = this.props;
    e.preventDefault();
    deleteAssessmentByID(assessment._id)
    .then( res => {
      getAssessments()
    })
    .catch( error => {
      console.log(error);
    })
  }



  showQuestions = e => {
    e.preventDefault();
    const { setAssessment, assessment, history } = this.props;
    setAssessment(assessment).then(() => {
      history.push('/questions')
    });
  }

  render() {
    return (

      //   {console.log("assessment", this.props.assessment)}
      <div>
        <ul>
          <li>
            <h1>{this.props.assessment.title}</ h1>
            <Button onClick={(e) => this.showQuestions(e)}>questions</ Button>
            <Button variant="danger" onClick={(e) => this.deleteAssessment(e)}> Delete</Button>
          </li>

          {/* <li>{this.props.assessment.questions}</li> */}
        </ul>
      </div>
    )
  }
}

export default withRouter(Assessment)