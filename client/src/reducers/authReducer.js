import {REGISTER_SUCCESS,LOGIN_FAIL,LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL} from "../action/type";

const initialState={
       token: localStorage.getItem('token'),
       user: '',
       isAuth: localStorage.getItem('isAuth'),
       
}

export default function( state= initialState, action){
      switch(action.type){
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
              localStorage.setItem('token', action.payload.token);
              localStorage.setItem('isAuth', "true")
               return{
                   ...state,
                   user: action.payload.user,
                   isAuth: localStorage.getItem('isAuth')
               }
          case LOGIN_FAIL:
          case REGISTER_FAIL:
          case LOGOUT_SUCCESS:
               localStorage.removeItem('token');
               localStorage.setItem('isAuth', "false")
               return{
                   ...state,
                   user:'',
                   isAuth: localStorage.getItem('isAuth')
               }
                
          default:
              return state
      }
}