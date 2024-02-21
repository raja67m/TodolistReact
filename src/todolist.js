import React from "react";

class TodoList extends React.Component{
   render(){
      return<>
      <h1>todolsit</h1>
     <div className="Todolsit-container">
       <button>New List</button>

       <div className="todolist">
         <input type="text"/>
       
       <button>Edit</button>
       <button>Delete</button>
       <button>Completed</button>
    
       </div>

     </div>
      </>
   }
}

export default TodoList;