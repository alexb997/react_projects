import { API_REQUEST_ERROR, API_REQUEST_SUCCES } from "../actions/user-actions";

export default function userReducer(state =[], {type,payload}){
  switch(type){
     case API_REQUEST_SUCCES:
       return payload.user;
     case API_REQUEST_ERROR:
       return payload.user;
     default:
       return state;
   }
}
