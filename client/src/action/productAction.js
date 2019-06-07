import {GET_DATA, DELETE_PRODUCT, ADD_PRODUCT} from './type';
import axios from "axios";
import {tokenConfig} from './authAction';

export const getdata = () =>dispatch =>{
      
         axios.get('/product').then( item =>{
                   dispatch({
                          type: GET_DATA,
                          payload: item.data
                   })
         })
};

// add product
export const addproduct = (newproduct) => (dispatch,getState) =>{
            axios.post('/product', newproduct, tokenConfig(getState))
                  .then( res =>{
                         dispatch({
                                type: ADD_PRODUCT,
                                payload: res.data
                         })
                  })
}

export const deleteproduct = (id) => (dispatch,getState)=>{
      axios.delete(`/delete/${id}`, tokenConfig(getState))
            .then( res => {
                   dispatch({
                         type: DELETE_PRODUCT,
                         payload: id
                   })
            })
}