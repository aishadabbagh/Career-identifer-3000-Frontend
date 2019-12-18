import axios from 'axios';
import apiUrl from '../../apiConfig';

    //Get All Questions
export const getAllQuestions = function (id) {
    return axios.get(`${apiUrl}/api/${id}/questions`)
  }

  //Create new Questions
  export const createQuestion = function (id, question) {
    // console.log("api: ",question)
    return axios.post(`${apiUrl}/api/${id}questions/` , {question:question})
  }

//   //Delete Article By ID
// export const deleteQuestionByID = function (id) {
//     return axios.delete(`${apiUrl}/articles/${id}`)
  
//   }

//Update Article By ID
export const updateQuestionByID = function (id,question) {
    return axios.patch(`${apiUrl}/api/question/${id}`,{question:question})
}
  
