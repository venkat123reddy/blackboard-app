import { adminActions } from "../constants/admin-actions-types"

export const createProfile = (profile)=>{
    return {
        type : adminActions.CREATE_PROFILE,
        payload : profile
    }
}

export const updateProfile = (profile)=>{
    return {
        type : adminActions.GET_PROFILES,
        payload : profile
    }
}

export const getProfiles = ()=>{
    return {
        type : adminActions.GET_PROFILES,
    }
}