


import React, { Component } from 'react'

export default class TaskList extends Component {
    state={Tasks:[{id:Math.random(),name:"Task 1",isDone:false,isEditName:false},
        {id:Math.random(),name:"Task 2",isDone:true,isEditName:false},
        {id:Math.random(),name:"Task 3",isDone:false,isEditName:false},
        {id:Math.random(),name:"Task 4",isDone:false,isEditName:false}
    ],
 newTask:"",newName:""}
  render() {
    
   const doneTask=(id)=>{
        this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,isDone:!task.isDone}:task)})
    }
    const deleteTask=(id)=>{
        this.setState({Tasks:this.state.Tasks.filter(task=>task.id!=id)})
    }
    const addTask=()=>{
        this.setState({Tasks:[{name:this.state.newTask,id:Math.random(),isDone:false},...this.state.Tasks],newTask:""})
    }
    const editName=(id)=>{
      this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,name:this.state.newName,isEditName:false}:task)})
    }
    const changeEditName=(id)=>{
      this.setState({Tasks:this.state.Tasks.map(task=>task.id==id?{...task,isEditName:true}:task)})
    }
    return (
      <div>
        <input 
        value={this.state.newTask}
        onChange={(e)=>this.setState({newTask:e.target.value})}/>
        <button onClick={()=>addTask()}>add new task</button>
        {this.state.Tasks.map(task=>
            <div key={task.id} style={{display:'flex',justifyContent:"space-around",border:"solid",margin:"10px"}} >
                {task.isEditName?<input 
                defaultValue={task.name}
                onChange={(e)=>this.setState({newName:e.target.value})}/>:<p>{task.name}</p>}
                
                
                <button onClick={()=>task.isEditName?editName(task.id):changeEditName(task.id)} >{task.isEditName?"save new name":"edit name"}</button>
                <button onClick={()=>doneTask(task.id)} style={{backgroundColor:task.isDone?"green":"red"}} >{task.isDone?"Done":"unDone"}</button>
                <button onClick={()=>deleteTask(task.id)}>delete</button>
            </div>
        )}

      </div>
    )
  }
}
