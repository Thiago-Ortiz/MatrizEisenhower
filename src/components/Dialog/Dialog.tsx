import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { TFormSchema, validationSchema } from "../FormSchema";
import "./Dialog.css";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { useForm } from "react-hook-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";

export const DialogDemo = ({ addTask }) => {
  const { register, handleSubmit } = useForm<TFormSchema>();
  //{resolver: zodResolver(validationSchema),}

  function CheckBox(data) {
    console.log(data.task);
    console.log(data.description);
    console.log(data.important);
    console.log(data.urgent);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="Button violet">Add Tasks</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add Task</Dialog.Title>
          <Dialog.Description className="DialogDescription"></Dialog.Description>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="task">
              Task
            </label>
            <input className="Input" {...register("task")} />
          </fieldset>

          <fieldset className="Fieldset">
            <label className="Label" htmlFor="description">
              Description
            </label>
            <input className="Input" {...register("description")} />
          </fieldset>

          <div
            style={{
              display: "flex",
              gap: "17px",
              alignItems: "center",
              marginBottom: 15,
            }}
          >
            <label className="Label" htmlFor="important">
              Important
            </label>
            <Checkbox.Root className="CheckboxRoot" {...register("important")}>
              <Checkbox.Indicator className="CheckboxIndicator">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>

            <label className="Label" htmlFor="urgent">
              Urgent
            </label>
            <Checkbox.Root className="CheckboxRoot" {...register("urgent")}>
              <Checkbox.Indicator className="CheckboxIndicator">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button className="Button green" onClick={handleSubmit(addTask)}>
                Submit
              </button>
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogDemo;
