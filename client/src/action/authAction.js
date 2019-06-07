
import axios from"axios";
import { REGISTER_SUCCESS,LOGIN_SUCCESS, LOGOUT_SUCCESS,REGISTER_FAIL, LOGIN_FAIL} from "./type";
import {returnErrors} from './errAction';


export const register=({name, email, password}) => dispatch=>{
        const config = {
             headers:{
                  'Content-Type': 'application/json'
             }
        }
        const body = JSON.stringify({name, email, password});

        axios.post('/resigter', body, config).then( res =>dispatch({
                 type: REGISTER_SUCCESS,
                 payload: res.data
        }))
        .catch( err =>{
          dispatch( returnErrors( err.response.data, err.response.status, 'REGISTER_FAIL'));
          dispatch({
              type: REGISTER_FAIL
          })
      })
}

export const logout =()=>{
       return{
            type:LOGOUT_SUCCESS
       }
}

export const login = ({email, password}) =>dispatch=>{
               const config = {
                    headers:{
                         'Content-Type': 'application/json'
                    }
               }
             const body = JSON.stringify({email,password});

             axios.post('/login', body, config).then( res =>dispatch({
                    type: LOGIN_SUCCESS,
                    payload: res.data
             }))
             .catch( err =>{
                   dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
                   dispatch({
                         type: LOGIN_FAIL
                   })
             })
};

// set config/headers and token
export const tokenConfig = getState =>{
          // get token from localstorage
     const token = getState().user.token;

     // headers
     const config ={
          headers: {
               "Content-type": "application/json"
          }
     }

     // if token, add to headers
     if(token){
       config.headers['x-auth-token'] =token;
     }

     return config;
}