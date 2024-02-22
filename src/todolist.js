import React from "react";
import "./todolist.css";
import { connect } from "react-redux";
class TodoList extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showNewListPopup:false,
      showEditPopup:false,
      showDeletePopup:false
    }
  }

//handleEditPopup
handleEditPopup=()=>{
  this.setState({
    showEditPopup:true
  })
}  

//handleDeletePopup
handleDeletePopup=()=>{
  this.setState({
    showDeletePopup:true
  })
}

//handleclicknewlsist
 handleClickNewlist=()=>{
    this.setState({
      showNewListPopup:true
    })
  }
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

        
      <p>Created Date & time</p>

      
       <div className="todolist">
      
       {
        this.props.items.map((item)=>(
          <button  key={item.id} className="task-button">{item.task
          }</button>

        ))
      }

        <div className="other-buttons">

       <button className="edit" onClick={this.handleEditPopup}>Edit</button>
       <button className="delete" onClick={this.handleDeletePopup}>Delete</button>
       <button className="completed">Completed</button>
      </div>
      
    
       </div>


       { 
       //new Task added the popup
       showNewListPopup &&(
 <div className="Popup">
  <div className="Popup-content">

 
  <h4>add new task</h4>
 <input type="text" className="addNewTask"/>
<div className="popup-button">
<button className="add">Add</button>
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
<button className="yes">yes</button>
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
<button className="yes">yes</button>
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

export default connect(mapStateToProps)(TodoList);