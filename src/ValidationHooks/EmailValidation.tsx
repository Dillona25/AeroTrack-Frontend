import { useForm } from "react-hook-form";

const useEmailValidation = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const emailValidation = register("email", {
    required: "Email is required",
    pattern: {
      value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: "Invalid Email",
    },
  });

  const handleEmailChange = (evt) =>
    setValue("email", evt.target.value, { shouldValidate: true });

  return {
    emailValidation,
    handleEmailChange,
    emailError: errors.email?.message,
  };
};

export default useEmailValidation;
