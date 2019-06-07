import {GET_DATA, DELETE_PRODUCT, ADD_PRODUCT} from '../action/type';

const initialState ={
      products:[],
      actionl: false,
      change: false
}

export default function( state = initialState, action){
    switch (action.type) {
        case GET_DATA:
             return{
                 ...state,
                 products: action.payload,
                actionl: true
             }
        case DELETE_PRODUCT:
             return{
                 ...state,
                 products: state.products.filter( product => product._id !==action.payload)
             }
        case ADD_PRODUCT:
             return{
                  ...state,
                  products: [action.payload,...state.products]
             }
              
        default:
            return state
    }
}