import axios from 'axios';
import apiUrl from '../../apiConfig';

    //Get All Questions
export const getAllQuestions = function (id) {
    return axios.get(`${apiUrl}/api/${id}/questions`)
  }

  //Create new Questions
  export const createQuestion = function (id, question) {
    // console.log("api: ",question)
    return axios.post(`${apiUrl}/api/assessment/${id}/questions/` , {content:question})
  }

//   //Delete Article By ID
// export const deleteQuestionByID = function (id) {
//     return axios.delete(`${apiUrl}/articles/${id}`)
  
//   }

//Update Article By ID
export const updateQuestionByID = function (id,question) {
    return axios.patch(`${apiUrl}/api/question/${id}`,{content:question})
}
  
