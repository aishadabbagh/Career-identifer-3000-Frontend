import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom'
import { deleteAnswerByID } from '../answers/api';
// import {deleteAnswerByID} from '../answers/answers'
import '../assessments/assessments.css';

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
            return <li className="card k" key={answer._id}>
            <div className="card answer" >
                {answer.content}
            </div>   
                <Button  className="my-5" variant="danger" onClick={e => this.deleteAnswer(e, answer._id, question._id)} >Delete</Button></li>
        }) : null;

        return (

            <div>
                <Button  className="my-5" onClick={(e) => { e.preventDefault(); this.props.history.push(`/answer-form/${question && question._id}`) }}>Add Answer</Button>
               
               <div className="card">
                <div className="card-body crd">
                    <div className="card-text">
                <h1>{question && question.content}</h1>
                </div>
                <div className="card-text">
                    {answers}
                </div>
                </div>
            </div>
            </div>
        )
    }
}

export default withRouter(QuestionShow)