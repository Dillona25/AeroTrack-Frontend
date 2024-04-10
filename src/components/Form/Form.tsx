import { ChangeEventHandler, FormEventHandler, ReactNode, Ref } from "react";
import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

type FormProps = {
  children?: ReactNode;
  // onSubmit takes FormEventHandler
  onSubmit?: FormEventHandler;
  labelText?: string;
  value?: string;
  type?: string;
  name?: string;
  message?: string;
  // onChange uses the ChangeEvent type. This is used for any change event
  onChange?: ChangeEventHandler;
  placeholder?: string;
  register?: FormProps;
  ref?: Ref<HTMLFormElement>;
};

type MessageProps = {
  message?: string | FieldError | Merge<FieldError, FieldErrorsImpl>;
};

// Form component
export const Form = ({ children, onSubmit, ref }: FormProps) => {
  return (
    <form ref={ref} onSubmit={onSubmit} className="flex flex-col gap-3 mt-6">
      {children}
    </form>
  );
};

// Reusable form input
Form.TextInput = ({
  labelText,
  value,
  type,
  name,
  onChange,
  placeholder,
}: FormProps) => {
  return (
    <>
      <label className="text-black font-Roboto text-4">{labelText}</label>
      <input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-slate-200 text-black p-3 rounded-[10px] font-Roboto border-black border-[1px]"
      ></input>
    </>
  );
};

// Reuseable form textarea
Form.TextArea = ({
  labelText,
  value,
  name,
  onChange,
  placeholder,
}: FormProps) => {
  return (
    <>
      <label className="font-Roboto text-4">{labelText}</label>
      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="bg-slate-200 p-3 rounded-[10px] font-Roboto border-black border-[1px]"
      ></textarea>
    </>
  );
};

// Reusable form feedback message if there is a validation error

Form.ErrorMessage = (props: MessageProps) => {
  // @ts-expect-error ignore error, error is not crucial
  return <p className="font-RobotoSlab text-[#f00]">{props.message}</p>;
};
