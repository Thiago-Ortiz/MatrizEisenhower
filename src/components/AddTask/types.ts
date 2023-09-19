import {z} from "zod";

export const formSchema = z
    .object({
        task: z.string().min(3,  {message: "tamanho minimo 3 caracteres"}),
        description: z.string(),
        important: z.boolean(),
        urgent: z.boolean()
    })

export type TFormSchema = z.infer<typeof formSchema>