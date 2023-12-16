import { useState } from 'react'
import List from '../component/List.jsx'
import { useNavigate } from 'react-router-dom';



//dima set taba3 mouch l variable yani settask=....mouch task =....
function App() {
 let [tasks,setTasks]=useState([]);
 let [task,setTask]=useState("");
 const navigator=useNavigate();
 function backToContact(){
  navigator('/Contact');
 }
 
 function getTask(e){
  let tk=e.target.value;
  setTask(tk);
 }
 
 function addToTasks(){
  let t=[...tasks,task];
  setTasks(t);
  

}

function deleteTask(i){
   /*let newTasks = tasks;
   newTasks.splice(index,1);
   console.log(newTasks)
   setTasks(newTasks)*/
   setTasks(tasks.filter((_,index)=> i!=index))
 }

  return (
  
      <div>
        <h1>To do</h1>
        <input type='text' onChange={getTask}></input>
        <button onClick={addToTasks}>ADD</button>
        <button onClick={backToContact}>contact Us</button>
        <List tasks={tasks} deleteT={deleteTask} />
      </div>
      
    
  )
}

export default App
