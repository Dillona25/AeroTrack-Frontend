import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button, ButtonDisabled } from "../Button/Button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import usePasswordValidation from "../../ValidationHooks/PasswordValidation";
import useEmailValidation from "../../ValidationHooks/EmailValidation";

type Props = {
  handleSignUpModal?: () => void;
  closeModal?: () => void;
};

export const SignInModal = (props: Props) => {
  const { passwordValidation, handlePasswordChange, passwordError } =
    usePasswordValidation();

  const { emailValidation, handleEmailChange, emailError } =
    useEmailValidation();

  const {
    formState: { isValid },
  } = useForm();

  return (
    <Modal>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="font-normal">Login</h1>
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <Form>
          <Form.TextInput
            register={emailValidation}
            onChange={handleEmailChange}
            labelText="Email"
            placeholder="Email"
          />
          {emailError && <Form.ErrorMessage message={emailError} />}
          <Form.TextInput
            register={passwordValidation}
            onChange={handlePasswordChange}
            labelText="Password"
            placeholder="Password"
          />
          {passwordError && <Form.ErrorMessage message={passwordError} />}
          {isValid ? (
            <Button text="Login" className="bg-black mt-3" />
          ) : (
            <ButtonDisabled className="bg-black" text="Login" />
          )}
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
