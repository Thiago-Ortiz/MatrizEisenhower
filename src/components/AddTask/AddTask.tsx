import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import z , { boolean, string } from "zod";
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'
import "./AddTask.css"

type TFormSchema = {
  task: string,
  description: string,
  important: boolean,
  urgent: boolean
}


export default function AddTask(){

  const [DoTasks, setDoTasks] = useState<TFormSchema[]>([])
  const [ScheduleTasks, setScheduleTasks] = useState<TFormSchema[]>([])
  const [DelegateTasks, setDelegateTasks] = useState<TFormSchema[]>([])
  const [DeleteTasks, setDeleteTasks] = useState<TFormSchema[]>([])


  const validationSchema = z.object({
    task: string().min(3, { message: 'Tamanho minimo 3 caracteres' }),
    description: string().min(1, { message: 'Campo necessário' }),
    important: boolean(),
    urgent: boolean()

  })

  const {register, handleSubmit, watch} = useForm<TFormSchema>({
    resolver: zodResolver(validationSchema)
  })

  const onSubmit: SubmitHandler<TFormSchema> = (data, e) => {
    if(data.important == true && data.urgent == true){ 
    e?.preventDefault()
    e?.stopPropagation()
    setDoTasks((tasks) => [...tasks, data])
    return false
    }
    else if(data.important == true && data.urgent == false){
    e?.preventDefault()
    e?.stopPropagation()
    setScheduleTasks((tasks) => [...tasks, data])
    return false
    }
    else if(data.important == false && data.urgent == true){
    e?.preventDefault()
    e?.stopPropagation()
    setDelegateTasks((tasks) => [...tasks, data])
    return false
    }
    else if(data.important == false && data.urgent == false){
    e?.preventDefault()
    e?.stopPropagation()
    setDeleteTasks((tasks) => [...tasks, data])
    return false
    }

  }  

    return(
    <>
    
      <form onSubmit={handleSubmit(onSubmit)}>

        <label> Task <input {...register("task")} type="task"/> </label> <br />

        <label> Description <input {...register("description")} type="description"/> </label> <br />

        
        <label> <input {...register("important")} type="checkbox"/> Important</label> <br />

        <label> <input {...register("urgent")} type="checkbox"/> Urgent</label> <br />

        <button type="submit"> Submit </button>

        </form>


    <section className="DoNow">
      <h1>DO NOW</h1>
    {
      DoTasks.map((task, index )=>(
      <div key={index}>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <p>{task.important}</p>
      <p>{task.urgent}</p>
      <hr />
      </div>
      ))
    }
    </section>

    <section className="Schedule">
      <h1>SCHEDULE</h1>
    {
      ScheduleTasks.map((task, index )=>(
      <div key={index}>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <p>{task.important}</p>
      <p>{task.urgent}</p>
      <hr />
      </div>
      ))
    }
    </section>

    <section className="Delegate">
      <h1>DELEGATE</h1>
    {
      DelegateTasks.map((task, index)=>(
      <div key={index}>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <p>{task.important}</p>
      <p>{task.urgent}</p>
      <hr />
      </div>
      ))
    }
    </section>

    <section className="Delete">
      <h1>DELETE</h1>
    {
      DeleteTasks.map((task, index )=>(
      <div key={index}>
      <h2>{task.task}</h2>
      <p>{task.description}</p>
      <p>{task.important}</p>
      <p>{task.urgent}</p>
      <hr />
      </div>
      ))
    }
    </section>

    </>
    )
}

