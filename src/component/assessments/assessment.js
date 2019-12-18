import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Assessment extends Component {

    deleteAssessment = (e)=>{
      e.preventDefault();
      this.props.deleteArticle(this.props.assessment._id)
    }
    showAssessment = ()=>{
      this.props.getAllAssessments(this.props.assessment._id)
    }
    showQuestions = e => {
      e.preventDefault();
      const { setAssessment, assessment, history } = this.props;
      setAssessment(assessment).then( ()=> {
        history.push('/questions')
      });
    }

    render() {
      return (
        
        //   {console.log("assessment", this.props.assessment)}
          <div>
            <ul>
                <li>
                    <h2>{this.props.assessment.title}</h2>
                    <h1 onClick={(e) => this.showQuestions(e)}>questions</h1>
                </li>
         
                {/* <li>{this.props.assessment.questions}</li> */}
            </ul>   
          </div>
      )
    }
  }
  
  export default withRouter(Assessment)