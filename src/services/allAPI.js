import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

export const registerAPI=async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
} 

export const loginAPI=async (reqBody)=>{
    return await commonAPI("PoST",`${SERVER_URL}/login`,reqBody)
} 

//api called by ADD component
export const addProjectAPI=async (reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-projects`,reqBody,reqHeader)
}

