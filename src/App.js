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



class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      assessments: []
    }
  }

  setAssessments = (assessments)=>{
    console.log('setAssessments', assessments)
    this.setState({
      assessments: assessments
    })
  }

  setQuestions = (questions)=>{
    console.log('setQuestions', questions)
    this.setState({
      questions: questions
    })
  }



  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state
    console.log(this.state.assessments)
    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <AlertDismissible key={index} variant={alert.type} message={alert.message} />
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Assessments assessments={this.state.assessments} setAssessments={this.setAssessments}/>

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
