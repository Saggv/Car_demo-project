import {GET_ASSET, DELETE_ASSET, POST_ASSET, ASSET} from './type';
import axios from 'axios';
import {tokenConfig} from '../action/authAction';

export const getAsset = () =>dispatch=>{

       axios.get('/asset').then( data=>{
           dispatch({
                type:GET_ASSET,
                payload: data.data
           })
       })
}

export const addToCollection = (item) => (dispatch, getState)=>{
     
     axios.post('/asset', item, tokenConfig(getState)).then( item =>{
           dispatch({
               type:POST_ASSET,
               payload: item
           })
     })
     .catch( err => console.log(err))
}

export const deleteAsset = id => (dispatch, getState)=>{

     axios.delete(`/asset/delete/${id}`, tokenConfig(getState)).then( res =>{
            dispatch({
                type: DELETE_ASSET,
                payload: id
            })
     })
}

export const asset=()=>{
     return{
         type: ASSET
     }
}