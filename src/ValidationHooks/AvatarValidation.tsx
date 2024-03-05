import { useForm } from "react-hook-form";

const useImageURLValidation = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useForm();

  const imageURLValidation = register("imageUrl", {
    required: "Image URL is required",
  });
  ``;
  const handleImageURLChange = (evt) =>
    setValue("imageUrl", evt.target.value, { shouldValidate: true });

  return {
    imageURLValidation,
    handleImageURLChange,
    imageURLError: errors.imageUrl?.message,
  };
};

export default useImageURLValidation;
