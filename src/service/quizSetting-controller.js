import { publicAxios } from "./axios-config";

const doFetchQuizInstructionsFromBackend = (()=>{
    return publicAxios.get('/adminsetting/getinstructions')
})

const doFetchQuizSettingsFromBackend = (()=>{
    return publicAxios.get('/adminsetting/getlink')
})

const doFetchAllAdminSettingsFromBackend = (()=>{
    return publicAxios.get('/adminsetting/alladminsettings')
})

const doUpdateQuizSettingsFromBackend = ((obj)=>{
    return publicAxios.post('/adminsetting/updatelink',obj)
})

const doUpdateQuizInstructionsFromBackend = ((obj)=>{
    return publicAxios.post('/adminsetting/updateinstructions',obj)
})

const doValidateAdminPassword = ((obj)=>{
    return publicAxios.post('/adminsetting/adminverification',obj)
})

export {
    doFetchQuizInstructionsFromBackend,
    doFetchQuizSettingsFromBackend,
    doFetchAllAdminSettingsFromBackend,
    doUpdateQuizSettingsFromBackend,
    doUpdateQuizInstructionsFromBackend,
    doValidateAdminPassword
}