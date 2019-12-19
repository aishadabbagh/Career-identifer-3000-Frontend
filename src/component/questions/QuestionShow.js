import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { deleteAnswerByID } from '../answers/api';
// import {deleteAnswerByID} from '../answers/answers'

class QuestionShow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            question: null
        }
    }

    deleteAnswer = (e, aId, qId) => {
        e.preventDefault();

        deleteAnswerByID(aId, qId)
            .then(res => {
                this.props.history.push('/assessments');
            })
            .catch(error => {
                console.log(error);
            });

    }


    componentDidMount() {
        const { assessment } = this.props;

        const question = assessment.questions.find(q => {
            return q._id === this.props.match.params.id
        })
        this.setState({
            question: question
        });
    }
    render() {
        const { question } = this.state;
        let answers = question ? question.answers.map(answer => {
            return <li key={answer._id}>{answer.content}
                <Button variant="danger" onClick={e => this.deleteAnswer(e, answer._id, question._id)} >Delete</Button></li>
        }) : null;

        return (

            <div>
                <Button onClick={(e) => { e.preventDefault(); this.props.history.push(`/answer-form/${question && question._id}`) }}>Add Answer</Button>
                <h1>{question && question.content}</h1>
                <ul>
                    {answers}
                </ul>
            </div>
        )
    }
}

export default withRouter(QuestionShow)