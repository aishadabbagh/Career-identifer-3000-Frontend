import axios from 'axios';
import apiUrl from '../../apiConfig';

//delete answer by ID 
//'/api/:questionId/answer/:answerId'
export const deleteAnswerByID = function (id, question) {
    return axios.delete(`${apiUrl}/api/${question}/answer/${id}`)
}


//create answer
export const createAnswer = function (id, answer) {
    return axios.post(`${apiUrl}/api/${id}/answers`, {
        answer: {
            content: answer
        }
    })
}


  //update answer by id 

