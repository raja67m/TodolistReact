import {ADD_ITEM, DELETE_ITEM, UPDATE_ITEM} from "./action";
import {createStore} from "redux";

import JSON from "./todolist.json";

const initailstate={
   items:JSON,
}

const itemReducer=(state=initailstate,action)=>{
   switch(action.type){

case ADD_ITEM:
   return{
      ...state,
      items:[...state.items,action.payload],
   }


case DELETE_ITEM:
   return{
      ...state,
      items:state.items.filter((item)=>item.id!==action.payload.id),
   }


   case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id){ 
            return {
              ...item,
              task:action.payload.task
            };
          }
          return item;
        }),
      }



default:
   return state;

   }
}




const store=createStore(itemReducer);

export default store;