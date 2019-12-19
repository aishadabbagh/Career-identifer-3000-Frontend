import axios from 'axios';
import apiUrl from '../../apiConfig';


//Get All Assessment
export const getAllAssessments = function () {
  return axios.get(`${apiUrl}/api/assessments`)
}


// Create New Assessment
export const createNewAssessment = function (assessment) {
  return axios.post(`${apiUrl}/api/assessment`, {
    assessment: {
      title: assessment
    }
  })
}


//Delete Assessment By ID
export const deleteAssessmentByID = function (id) {
  return axios.delete(`${apiUrl}/api/assessment/${id}`)
}


// Show an Assessment
export const showAssessment = function (id) {
  // console.log("api: ",Assessment)
  return axios.get(`${apiUrl}/api/assessment${id}`)
}

