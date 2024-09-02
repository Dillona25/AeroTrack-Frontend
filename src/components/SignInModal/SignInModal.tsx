import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { checkPasswords } from "../../utils/authApi";

type Props = {
  handleSignUpModal?: () => void;
  closeModal?: () => void;
  handleLogin?: (credentials: { email: string; password: string }) => void;
};

export const SignInModal = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<{ email: string; password: string }> = async (
    data
  ) => {
    try {
      const isValidPassword = await checkPasswords(data.email, data.password);

      if (isValidPassword) {
        props.handleLogin?.(data);
        props.closeModal?.();
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("password", {
        type: "manual",
        message: "Invalid email or password",
      });
    }
  };
  return (
    <Modal>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="font-normal sm:text-[30px]">Login</h1>
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.TextInput
            labelText="Email"
            placeholder="Email"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /[\w\-.]+@([\w-]+\.)+[\w-]{2,4}/,
                message: "Invalid Email",
              },
            })}
            onChange={(evt) => {
              const target = evt.target as HTMLInputElement;
              setValue("email", target.value, { shouldValidate: true });
            }}
          />
          {errors.email && <Form.ErrorMessage message={errors.email.message} />}

          <Form.TextInput
            type="password"
            labelText="Password"
            placeholder="Password"
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Use 8 or more characters",
              },
            })}
            onChange={(evt) => {
              const target = evt.target as HTMLInputElement;
              setValue("password", target.value, { shouldValidate: true });
            }}
          />
          {errors.password && (
            <Form.ErrorMessage message={errors.password.message} />
          )}

          <Button
            text="Login"
            className={`bg-black mt-3 ${
              isValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
          />
        </Form>
        <p className="text-[14px] font-normal text-center pt-4">
          No Account? Signup{" "}
          <button onClick={props.handleSignUpModal} className="underline">
            here
          </button>
        </p>
      </motion.div>
    </Modal>
  );
};
