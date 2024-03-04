import { useForm } from "react-hook-form";

const useNameValidation = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const nameValidation = register("name", {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Please use 2 or more characters",
    },
    maxLength: {
      value: 20,
      message: "Please use 20 or less characters",
    },
  });

  const handleNameChange = (evt) =>
    setValue("name", evt.target.value, { shouldValidate: true });

  return {
    nameValidation,
    handleNameChange,
    nameError: errors.name?.message,
  };
};

export default useNameValidation;
