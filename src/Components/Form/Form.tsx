import { ChangeEventHandler, FormEventHandler, ReactNode } from "react";

type FormProps = {
  children?: ReactNode;
  // onSubmit takes FormEventHandler
  onSubmit?: FormEventHandler;
  labelText?: string;
  value?: string;
  type?: string;
  name?: string;
  // onChange uses the ChangeEvent type. This is used for any change event
  onChange?: ChangeEventHandler;
  placeholder?: string;
  register?: FormProps;
};

type MessageProps = {
  message?: string;
};

export const Form = ({ children, onSubmit }: FormProps) => {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 mt-6">
      {children}
    </form>
  );
};

Form.TextInput = ({
  labelText,
  value,
  type,
  name,
  onChange,
  placeholder,
  register,
}: FormProps) => {
  return (
    <>
      <label className="font-Roboto text-4">{labelText}</label>
      <input
        value={value}
        register={register}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-slate-200 p-3 rounded-[10px] font-Roboto border-black border-[1px]"
      ></input>
    </>
  );
};

Form.TextArea = ({
  labelText,
  value,
  type,
  name,
  onChange,
  placeholder,
  register,
}: FormProps) => {
  return (
    <>
      <label className="font-Roboto text-4">{labelText}</label>
      <textarea
        value={value}
        register={register}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-slate-200 p-3 rounded-[10px] font-Roboto border-black border-[1px]"
      ></textarea>
    </>
  );
};

Form.ErrorMessage = (props: MessageProps) => {
  return <p className="font-RobotoSlab text-[#f00]">{props.message}</p>;
};
