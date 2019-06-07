import {GET_ASSET, POST_ASSET, DELETE_ASSET} from "../action/type";

const initialState = {
      asset: [],
      change: false
};

export default function( state = initialState, action){
      switch(action.type){
          case GET_ASSET:
              return{
                  ...state,
                  asset: action.payload
              }
           case POST_ASSET:
               return{
                   ...state,
                   asset: [action.payload,...state]
               }
            case DELETE_ASSET:
                return{
                    ...state,
                    asset: state.asset.filter( data => data._id !== action.payload)
                }
          default:
              return state
      }
}

