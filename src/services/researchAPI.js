/* eslint-disable import/no-anonymous-default-export */
import http from '../constant/research/_ResearchconfigAxios'

// Method Read All Research
const getAllResearch = () => {
    return http.get('researchs')
}

//Method Read By ID
const getResearchById = (id) => {
    return http.get(`researchs/${id}`);
}

//Method Add New Research
const addNewResearch = (data) => {
    return http.post(`researchs`, data);
}

//Method Update Research
const updateResearch = (id, data) => {
    return http.put(`researchs/${id}`, data);
}
  
//Method Delete Research
const deleteResearch = (id) => {
    return http.delete(`researchs/${id}`);
}

export default {
    getAllResearch,
    getResearchById,
    addNewResearch,
    updateResearch,
    deleteResearch
}