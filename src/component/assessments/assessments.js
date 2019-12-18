import React, { Component } from 'react'
import {getAllAssessments , createNewAssessment, deleteAssessmentByID, showAssessment} from './api'
import Assessment from './assessment'
// import FORM from './form'



export default class Assessments extends Component {

    constructor(props){
        super()
        this.state= {
         assessment:{
            title: "",
            questions :[]
        } 
        }
    }

    componentDidMount() {
        // console.log('qazwsx')
        getAllAssessments()
          .then((response) => {
            // console.log('get all assessments: ', response.data.assessments);
            this.props.setAssessments(response.data.assessments)
          })
          .catch((error) => {
            console.log(error)
          })
      }

      render(){
        let getAllAssessments = <h1>No Articles</h1>
        if (this.props.assessments.length >= 0) {
          getAllAssessments = this.props.assessments.map((assessment, index) => {
            return <Assessment key={assessment._id} assessment={assessment} />;
            //  deleteArticle={this.deleteArticle}
            //   fun={this.state.fun}
            //   renderForm={this.renderForm}
            //  />
          })
        }
    
        return (
            <div>
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