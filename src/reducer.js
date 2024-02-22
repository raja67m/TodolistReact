import {DELETE_ITEM} from "./action";
import {createStore} from "redux";

import JSON from "./todolist.json";

const initailstate={
   items:JSON,
}

const itemReducer=(state=initailstate,action)=>{
   switch(action.type){


case DELETE_ITEM:
   return{
      ...state,
      items:state.items.filter((item)=>item.id!==action.payload.id),
   }


default:
   return state;

   }
}




const store=createStore(itemReducer);

export default store;