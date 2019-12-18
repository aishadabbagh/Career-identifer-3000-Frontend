import React, { Component } from 'react'
import { createQuestion, updateQuestionByID , getAllQuestions} from './api'
import Question from './question'
// import FORM from './form'

export default class Questions extends Component {
    constructor(props) {
      super()
      this.state = {
        Qrticle: {
      answers: []
        },
        form: false,
        fun: 'cr',
        up_id:''
      }
    }
    componentDidMount() {
        getAllQuestions(assessmentId)
          .then((response) => {
            console.log('get all questions: ', response.data.assessment._id(assessmentId).questions)
            // this.props.setArticles(response.data.assessment.question)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      
    //   createArticle = (question) => {
    //     console.log('Create: ', article)
    //     createNewArticle(article)
    //       .then((response) => {
    //         console.log('get all articles: ', response.data.articles);
    
    //         this.props.setArticles([...this.props.articles, article])
    //       })
    //       .catch((error) => {
    //         console.log(error)
    //       })
    //   }
      
    //   updateQuestion = (id, question) => {
    //     // console.log('update: ', id)
    //     updateQuestionByID(id, question)
    //       .then((response) => {
    //         getAllQuestions()
    //           .then((response) => {
    //             console.log('get all questions: ', response.data.question);
    //             this.props.setQuestions(response.data.question)
    //           })
    //           .catch((error) => {
    //             console.log(error)
    //           })
    //       })
    //       .catch((error) => {
    //       })
    //   }

    //   renderForm = (question,fun) => {
    //     this.setState({
    //       form: true,
    //       up_id: question._id,
    //       fun:fun,
    //       question:
    //       {
    //         content: question.content,
    //         answers: [question.answers],
            
    //       }
    //     })
    //   }

    //   formQuestion = (id, question) => {
    //     // console.log("93 ",article)
    //     this.setState({
          
    //         content: question.content,
    //         answers: [question.answers],
    //         form: false
    //      } , () => {
    //       if (this.state.fun !== 'up') {
    //         this.createQuestion(this.state.question)
    //       } else {
    //         console.log('up')
    //         this.updateQuestion(id, this.state.question)
    //       }
//         })
//       }

    render() {
        let allQuestions = <h1>No questions</h1>
        if (this.props.questions.length >= 0) {
        allArticles = this.props.assessment.question.map((article, index) => {
            return <Article key={article._id} article={article}
            deleteArticle={this.deleteArticle}
            fun={this.state.fun}
            renderForm={this.renderForm} />
        })
        }

        return (
        <div>
            {(this.state.form) 
            ?  <Form article={this.state.article} formArticle={this.formArticle} id={this.state.up_id}/>
            : allArticles
            }
            {console.log(allArticles)}
            {(this.state.form) ? false : <a href="#" onClick={this.renderForm}>Create</a>}

        </div>

        )
  }

    }