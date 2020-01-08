import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import AlertDismissible from './auth/components/AlertDismissible'

//compopnents
import Assessments from './component/assessments/assessments'
import Questions from './component/questions/questions'
import AssessmentForm from './component/assessments/AssessmentForm'
import QuestionForm from './component/questions/QuestionForm'
import QuestionUpdate from './component/questions/QuestionUpdate'
import QuestionShow from './component/questions/QuestionShow'
import AnswerForm from './component/answers/answerForm'
import Home from "./Home"
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: null,
      alerts: [],
      assessments: [],
      assessment: null
    }
  }




  setAssessments = (assessments) => {
    console.log('setAssessments', assessments)
    this.setState({
      assessments: assessments
    })
  }
  // createAssessment = (assessment) => {
  //   createNewAssessment(assessment)
  //     .then()
  //     .catch()
  // }

  setAssessment = async assessment => await this.setState({ assessment });

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render() {
    const { alerts, user } = this.state
    console.log(this.state.assessments)
    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route exact path="./" component={Home}/>

          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route exact path='/assessments' render={() => (
            <Assessments
              assessments={this.state.assessments}
              setAssessments={this.setAssessments}
              setAssessment={this.setAssessment}
              createAssessment={this.createAssessment} />
          )} />
          <Route exact path='/questions' render={() => (
            <Questions assessment={this.state.assessment} />
          )} />
         <Route exact path='/' render={() => (
            <Home />
          )} />


          <Route exact path='/assessment-form' render={() => (
            <AssessmentForm />
          )} />

          <Route path='/update-question' render={() => (
            <QuestionUpdate />
          )} />
          <Route path='/question-form' render={() => (
            <QuestionForm assessment={this.state.assessment}/>
          )} />
          <Route path='/question-show/:id' render={() => (
            <QuestionShow assessment={this.state.assessment} />
          )} />
          <Route path='/answer-form/:id' render={() => (
            <AnswerForm  {...this.props} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />

        </main>
      </React.Fragment>
    )
  }
}

export default App
