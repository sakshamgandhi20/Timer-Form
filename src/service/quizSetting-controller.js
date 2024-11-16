import { publicAxios } from "./axios-config";

const doFetchQuizInstructionsFromBackend = (()=>{
    return publicAxios.get('/adminsetting/getinstructions')
})

const doFetchQuizSettingsFromBackend = (()=>{
    return publicAxios.get('/adminsetting/getlink')
})

export {
    doFetchQuizInstructionsFromBackend,
    doFetchQuizSettingsFromBackend
}