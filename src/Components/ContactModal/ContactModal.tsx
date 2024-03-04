import { motion } from "framer-motion";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button, ButtonDisabled } from "../Button/Button";
import { useForm } from "react-hook-form";
import useEmailValidation from "../../ValidationHooks/EmailValidation";
import useMessageValidation from "../../ValidationHooks/TextAreaValidation";
import useNameValidation from "../../ValidationHooks/NameValidation";

type Props = {
  closeModal?: () => void;
};

export const ContactModal = (props: Props) => {
  const { emailValidation, handleEmailChange, emailError } =
    useEmailValidation();

  const { nameValidation, handleNameChange, nameError } = useNameValidation();

  const { messageValidation, handleMessageChange, messageError } =
    useMessageValidation();

  const {
    formState: { isValid },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  return (
    <Modal>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="font-normal">Contact us</h1>
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
            register={emailValidation}
            onChange={handleEmailChange}
            labelText="Email"
            placeholder="Email"
          />
          {emailError && <Form.ErrorMessage message={emailError} />}
          <Form.TextArea
            register={messageValidation}
            onChange={handleMessageChange}
            labelText="Message"
            placeholder="Message"
          />
          {messageError && <Form.ErrorMessage message={messageError} />}
          {isValid ? (
            <Button text="Send" className="bg-black mt-3" />
          ) : (
            <ButtonDisabled className="bg-black" text="Send" />
          )}
        </Form>
      </motion.div>
    </Modal>
  );
};
