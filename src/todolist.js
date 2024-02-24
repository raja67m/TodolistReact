import React from "react";
import "./todolist.css";
import { connect } from "react-redux";
import { deleteItem,updatedItem,addItem} from "./action";
import { v4 as uuidv4 } from 'uuid';
class TodoList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showNewListPopup:false,
      showEditPopup:false,
      showDeletePopup:false,
      selectedItem:null,
      newTask:"",
    }
  }

//added new task


handleAddItem=()=>{
  const {newTask}=this.state;

  if(newTask){
    const newItem={
      id: uuidv4(), 
      task:newTask,
     
    };
this.props.addItem(newItem);
this.setState({
  newTask:"",
  showNewListPopup:false
 
});
  }}



//handleEditPopup
handleEditPopup=(item)=>{
  this.setState({
    showEditPopup:true,
    selectedItem:item,
    newTask:item.task
  })
}  
//handleUpdateFunction
handleUpdated=()=>{
  const{selectedItem,newTask}=this.state;
  const updatedItem={
    ...selectedItem,
    task:newTask || selectedItem.task
  };
  this.props.updatedItem(updatedItem);
  this.handleCancle();
}


//handleDeletePopup
handleDeletePopup=(item)=>{
  this.setState({
    showDeletePopup:true,
    itemToDelete:item

  })
}

//handleDeletefunction

handleDeleteFunction=()=>{
  const {itemToDelete}=this.state;
  if(itemToDelete){
    this.props.deleteItem(itemToDelete);
    this.handleCancle();
  }
}

//handleclicknewlsist
 handleClickNewlist=()=>{
    this.setState({
      showNewListPopup:true
    })
  }

//handleInputChange
handleInputChange = (e) => {
  this.setState({ [e.target.name]: e.target.value });
};

  //handleCacleNewllist
  handleCancle=()=>{
    this.setState({
      showNewListPopup:false,
      showEditPopup:false,
      showDeletePopup:false
    })
  }


   render(){

    const {showNewListPopup,showDeletePopup,showEditPopup}=this.state;
      return<>
      <h1>todolsit</h1>
     <div className="Todolsit-container">
      <button className="New-list" onClick={this.handleClickNewlist}>New List</button>

        
    

      
       <div className="todolist-container">
      
       {
        this.props.items.map((item)=>(
          <div className="todolist">
           

          <button  key={item.id} className="task-button">{item.task
          }</button>

       

          <button className="edit" onClick={()=>this.handleEditPopup(item)}>Edit</button>
          <button className="delete" onClick={()=>this.handleDeletePopup(item)}>Delete</button>
          <button className="completed">Completed</button>
                 
          </div>

        ))
      }

<div className="other-buttons">

</div>
    
       </div>


       { 
       //new Task added the popup
       showNewListPopup &&(
 <div className="Popup">
  <div className="Popup-content">

 
  <h4>add new task</h4>
 <input type="text" className="addNewTask" name="newTask"  value={this.state.newTask} onChange={this.handleInputChange} />
<div className="popup-button">
<button className="add" onClick={this.handleAddItem}>Add</button>
<button className="cancel" onClick={this.handleCancle}>Cancel</button>
</div>
</div>
</div>
       )
       
       }



{
// edit popup 

showEditPopup &&(
  <div className="Popup">
    <div className="Popup-content">
      <h4>Edit Task</h4>
    <div className="popup-button">
      <input type="text" name="newTask"   value={this.state.newTask} onChange={this.handleInputChange}/>
<button className="yes" onClick={this.handleUpdated}>yes</button>
<button className="cancel" onClick={this.handleCancle}>Cancel</button>
</div>


    </div>

  </div>
)

}

{
// delete popup 

showDeletePopup &&(
  <div className="Popup">
    <div className="Popup-content">
      <h4>Are sure you want delete?</h4>
    <div className="popup-button">
<button className="yes" onClick={this.handleDeleteFunction}>yes</button>
<button className="cancel" onClick={this.handleCancle}>Cancel</button>
</div>


    </div>

  </div>
)

}







     </div>
      </>
   }
}

const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps=(dispatch)=>({
  deleteItem:(itemName)=>dispatch(deleteItem(itemName)),
  updatedItem:(item)=>dispatch(updatedItem(item)),
  addItem:(item)=>dispatch(addItem(item))
})


export default connect(mapStateToProps,mapDispatchToProps)(TodoList);