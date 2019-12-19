import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { createNewAssessment } from './api'
import { withRouter } from 'react-router-dom'
class AssessmentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: ""
		}
	}

	onSubmit = (event) => {
		event.preventDefault();
		createNewAssessment(this.state.title)
		.then( res => {
			this.props.history.push('/assessments')
		})
		.catch( error => {
			console.log(error);
		})
	}

	handleOnChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state.title);
	}



	render() {
		return (
			<Form onSubmit={this.onSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Assessment Title</Form.Label>
					<Form.Control name="title" type="string" placeholder="Enter Assessment name"
					value= {this.state.title} onChange={(e)=> this.handleOnChange(e)} />

				</Form.Group>

				{/* <Form.Group controlId="formBasicPassword"> */}
				{/* <Form.Label>Password</Form.Label> */}
				{/* <Form.Control type="password" placeholder="Password" /> */}
				{/* </Form.Group> */}
				{/* <Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" /> */}
				{/* </Form.Group> */}
				<Button variant="primary" type="submit">
					Submit
  </Button>
			</Form>
		)
	}
}

export default  withRouter(AssessmentForm);