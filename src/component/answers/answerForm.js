import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { createAnswer } from './api'
import { createNewAssessment } from '../assessments/api';
class AnswerForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        createAnswer(this.props.match.params.id, this.state.content)
        .then(res => {
            this.props.history.push('/assessments');
        })
        .catch( error => {
            console.log(error);
        })
    }

    handleOnChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Add Answer</Form.Label>
                    <Form.Control name="content" type="string" placeholder="Enter content"
                        value={this.state.content} onChange={(e) => this.handleOnChange(e)} />

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

export default withRouter(AnswerForm);