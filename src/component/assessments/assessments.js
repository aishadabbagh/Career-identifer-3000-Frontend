import React, { Component } from 'react'
import Assessment from './assessment'
// import FORM from './form'
import { getAllAssessments, createNewAssessment, deleteAssessmentByID, showAssessment } from './api'
import { Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import './assessments.css'

class Assessments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  componentDidMount() {
    this.getAssessments();
  }

  getAssessments = () => {
    const { setAssessments } = this.props;
    getAllAssessments()
      .then(res => {
        setAssessments(res.data.assessments);
      })
  }
  render() {
    let getAllAssessments = <h1>No Articles</h1>
    if (this.props.assessments.length >= 0) {
      getAllAssessments = this.props.assessments.map((assessment, index) => {
        return <Assessment key={assessment._id} assessment={assessment} setAssessment={this.props.setAssessment} getAssessments={this.getAssessments} />;
        //  deleteArticle={this.deleteArticle}
        //   fun={this.state.fun}
        //   renderForm={this.renderForm}
        //  />
      })
    }
    return (
      <div>
        <Button className="my-5" onClick={(e) => { e.preventDefault(); this.props.history.push("/assessment-form") }}>Create Assessment</Button>
        {/* {(this.state.form) 
              ?  <Form article={this.state.article} formArticle={this.formArticle} id={this.state.up_id}/>
                : allArticles
              }
              {console.log(allArticles)}
              {(this.state.form) ? false : <a href="#" onClick={this.renderForm}>Create</a>} */}

        {getAllAssessments}

      </div>
    )
  }
}
export default withRouter(Assessments);