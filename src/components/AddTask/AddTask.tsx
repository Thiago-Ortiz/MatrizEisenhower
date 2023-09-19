import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import z , { boolean, string } from "zod";
import { zodResolver } from '@hookform/resolvers/zod/dist/zod'

type TFormSchema = {
  task: string,
  description: string,
  important: boolean,
  urgent: boolean
}


export default function AddTask(){

  const [Tasks, setTasks] = useState<TFormSchema[]>([])

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
    e?.preventDefault()
    e?.stopPropagation()
    console.log(data)
    setTasks((tasks) => [...tasks, data])
    return false
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

        <section>
        {
            Tasks.map((task )=>(
              
                <div key={Math.floor(Math.random()*100000)}>
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

