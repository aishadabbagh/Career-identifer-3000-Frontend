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
      <React.Fragment>
      <div className="card">
        <div className="card-body crd">
          <h1 className="card-title">{this.props.assessment.title}</ h1>
            <Button className="btn btn-primary" onClick={(e) => this.showQuestions(e)}>questions</ Button>
            <Button className="btn btn-primary" variant="danger" onClick={(e) => this.deleteAssessment(e)}> Delete</Button>
        </div>
      </div>
      <div>
      </div></React.Fragment>
    )
  }
}

export default withRouter(Assessment)