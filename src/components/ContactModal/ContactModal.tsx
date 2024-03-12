import { motion } from "framer-motion";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm } from "react-hook-form";

type Props = {
  closeModal?: () => void;
};

export const ContactModal = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors, isValid },
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
        <h1 className="font-normal sm:text-[30px]">Contact us</h1>
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <Form>
          {/* The onChnage logic is handling validation */}
          <Form.TextInput
            labelText="Name"
            placeholder="Name"
            register={register("name", {
              required: "We need to know who you are :)",
              minLength: {
                value: 2,
                message: "Use 2 or more characters",
              },
            })}
            onChange={(evt) => {
              const target = evt.target as HTMLInputElement;
              setValue("name", target.value, { shouldValidate: true });
            }}
          />
          {errors.name && <Form.ErrorMessage message={errors.name.message} />}
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
          <Form.TextArea
            labelText="Message"
            placeholder="Message"
            register={register("message", {
              minLength: {
                value: 20,
                message: "Dont be shy, use 20 characters or more!",
              },
            })}
            onChange={(evt) => {
              const target = evt.target as HTMLInputElement;
              setValue("message", target.value, { shouldValidate: true });
            }}
          />
          {errors.message && (
            <Form.ErrorMessage message={errors.message.message} />
          )}
          {/* If the inputs are valid, button is enabled otherwise its disabled */}
          <Button
            text="Send"
            className={`bg-black mt-3 ${
              isValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
          />
        </Form>
      </motion.div>
    </Modal>
  );
};
