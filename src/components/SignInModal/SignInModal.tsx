import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {
  handleSignUpModal?: () => void;
  closeModal?: () => void;
};

export const SignInModal = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
        <Form>
          {/* The onChnage logic is handling validation */}
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
          {/* The onChnage logic is handling validation */}
          <Form.TextInput
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
          {/* If the inputs are valid, button is enabled otherwise its disabled */}
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
