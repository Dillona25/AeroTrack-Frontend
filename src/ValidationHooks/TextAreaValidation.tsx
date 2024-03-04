import { useForm } from "react-hook-form";

const useMessageValidation = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const messageValidation = register("message", {
    required: "Message is required",
    minLength: {
      value: 15,
      message: "Please use 15 or more characters",
    },
    maxLength: {
      value: 300,
      message: "Please use 300 or less characters",
    },
  });

  const handleMessageChange = (evt) =>
    setValue("message", evt.target.value, { shouldValidate: true });

  return {
    messageValidation,
    handleMessageChange,
    messageError: errors.message?.message,
  };
};

export default useMessageValidation;
