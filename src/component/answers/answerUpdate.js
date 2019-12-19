import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';

export default class answerForm extends Component {
    constructor(props) {
		super(props);

		this.state = {
			answers: []
		}
	}

	onSubmit = (event) => {
		event.preventDefault();
		createQuestion(this.state.content)
		.then( res => {
			this.props.history.push('/questions')
		})
		.catch( error => {
			console.log(error);
		})
	}

	handleOnChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log(this.state.answers);
	}



    render() {
        return (
            
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Answers</Form.Label>
                        <Form.Control name="title" type="string" placeholder="Enter Answers"
                        // value= {this.state.question} onChange={(e)=> this.handleOnChange(e)}
                         />
    
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

export default  withRouter(answerForm);