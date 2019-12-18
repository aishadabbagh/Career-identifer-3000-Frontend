import React, { Component } from 'react'

export default class Assessment extends Component {

    deleteAssessment = (e)=>{
      e.preventDefault();
      this.props.deleteArticle(this.props.assessment._id)
    }
    showAssessment = ()=>{
      this.props.getAllAssessments(this.props.assessment._id)
    }
  
    render() {
      return (
        
        //   {console.log("assessment", this.props.assessment)}
          <div>
            <ul>
                <li>
                    <h2>{this.props.assessment.title}</h2>
                </li>
         
                {/* <li>{this.props.assessment.questions}</li> */}
            </ul>   
          </div>
      )
    }
  }
  