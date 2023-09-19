import { useState } from "react"

export default function AddTask(){
    const[Tasks, setTasks] = useState([])
    const[task, setTask] = useState("")
    const[description, setDescription] = useState("")

    const[test, setTest] = useState("")
 
    function handleSubmit(ev){
        ev.preventDefault()

        const newTask = {
            id: Math.floor(Math.random() * 100000),
            task: task,
            description: description
        }
        console.log({ newTask })
        if(task.length>=3){
            setTasks((state) => [newTask, ...state])
            setTask("")
            setDescription("")
            setTest("cadastrado com sucesso")
            
        }else{
            setTest("a task deve ter no minimo 3 caracteres")
        }

    }


    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Task: </label>
            <input type="text" id="task" value={task} 
            onChange={(ev) => setTask(ev.target.value)}/>
        <br />

        <label htmlFor="description">Description: </label>
            <input type="text" id="description" value={description} 
            onChange={(ev) => setDescription(ev.target.value)}/>
        <br />
        <button type="submit">Submit</button>
        <label htmlFor="test">{test}</label>
        <hr />
        </form>

        
        <section>
        {
            Tasks.map((task) => (
                <div key={task.id}>
                    <h2>{task.task}</h2>
                    <p>{task.description}</p>
                    <hr />
                </div>

            ))

        }
        </section>


        </>
    )
}