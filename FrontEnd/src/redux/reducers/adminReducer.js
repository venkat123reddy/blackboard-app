import { adminActions } from "../constants/admin-actions-types"

const initialstate = {
    profiles:[{
        name: "venkata",
        phone: "865843"
    }]
};


export const adminReducer = (state=initialstate, {type,payload})=>{

    switch(type) {

       case adminActions.GET_PROFILES : return state;

       default : return state;
                                              
    
    }


}