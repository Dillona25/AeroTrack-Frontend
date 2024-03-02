import { ChangeEventHandler, FormEventHandler, ReactNode } from "react";

type Props = {
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
};

export const Form = ({ children, onSubmit }: Props) => {
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
}: Props) => {
  return (
    <>
      <label className="font-Roboto text-4">{labelText}</label>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-slate-200 p-3 rounded-[10px] font-Roboto border-black border-[1px]"
      ></input>
    </>
  );
};
