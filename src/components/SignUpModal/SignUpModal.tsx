import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button, ButtonDisabled } from "../Button/Button";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import useEmailValidation from "../../ValidationHooks/EmailValidation";
import useNameValidation from "../../ValidationHooks/NameValidation";
import usePasswordValidation from "../../ValidationHooks/PasswordValidation";
import useImageURLValidation from "../../ValidationHooks/AvatarValidation";

type Props = {
  handleSignInModal?: () => void;
  closeModal?: () => void;
};

export const SignUpModal = (props: Props) => {
  const { passwordValidation, handlePasswordChange, passwordError } =
    usePasswordValidation();

  const { emailValidation, handleEmailChange, emailError } =
    useEmailValidation();

  const { nameValidation, handleNameChange, nameError } = useNameValidation();

  const { imageURLValidation, handleImageURLChange, imageURLError } =
    useImageURLValidation();

  const {
    formState: { isValid },
  } = useForm({
    defaultValues: {
      name: "",
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
        <h1 className="font-normal">Signup</h1>
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <Form>
          <Form.TextInput
            register={nameValidation}
            onChange={handleNameChange}
            labelText="Name"
            placeholder="Name"
          />
          {nameError && <Form.ErrorMessage message={nameError} />}
          <Form.TextInput
            register={imageURLValidation}
            onChange={handleImageURLChange}
            labelText="Avatar"
            placeholder="Avatar Url"
          />
          {imageURLError && <Form.ErrorMessage message={imageURLError} />}
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
            <Button text="Signup" className="bg-black mt-3" />
          ) : (
            <ButtonDisabled className="bg-black" text="Signup" />
          )}
        </Form>
        <p className="text-[14px] font-normal text-center pt-4">
          Have an Account? Login{" "}
          <button onClick={props.handleSignInModal} className="underline">
            here
          </button>
        </p>
      </motion.div>
    </Modal>
  );
};
