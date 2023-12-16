export default function List(props){
    let Tasks=props.tasks;
    let deleteTask = props.deleteT

    return <ul>
        {Tasks.map(
            (el,i)=>(
            <li key={i}>
                <span>{el}</span>
                <button onClick={() => deleteTask(i)}>Delete</button>
            </li>
            ) 
        )}
    </ul>
}
