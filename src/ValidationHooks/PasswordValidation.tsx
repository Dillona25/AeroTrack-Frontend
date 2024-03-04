import { useForm } from "react-hook-form";

const usePasswordValidation = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const passwordValidation = register("password", {
    required: "Password required",
    minLength: {
      value: 6,
      message: "Please use 6 or more characters",
    },
    maxLength: {
      value: 30,
      message: "Please use 30 or less characters",
    },
  });

  const handlePasswordChange = (evt) =>
    setValue("password", evt.target.value, { shouldValidate: true });

  return {
    passwordValidation,
    handlePasswordChange,
    passwordError: errors.password?.message,
  };
};

export default usePasswordValidation;
