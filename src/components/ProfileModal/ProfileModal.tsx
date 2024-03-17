import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Avatar from "../../images/About.png";

type Props = {
  closeModal?: () => void;
  setIsLOggedIn?: boolean;
};

export const ProfileModal = (props: Props) => {
  const {
    register,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      avatar: "",
    },
  });

  return (
    <Modal>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <Form>
          <h1 className="font-normal mb-4 sm:text-[30px]">Edit Profile</h1>
          <img
            alt="Profile image"
            src={Avatar}
            className="bg-black h-[225px] w-[225px] sm:h-[300px] sm:w-[300px] rounded-full object-cover m-auto mb-4"
          />
          {/* The onChnage logic is handling validation */}
          <Form.TextInput
            labelText="Name"
            placeholder="Name"
            register={register("name", {
              required: "New name is required",
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
            labelText="Avatar"
            placeholder="Avatar Url"
            register={register("avatar", {
              required: "New avatar is required",
              pattern: {
                value:
                  /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&=]*)$/,
                message: "Invalid URL",
              },
            })}
            onChange={(evt) => {
              const target = evt.target as HTMLInputElement;
              setValue("avatar", target.value, { shouldValidate: true });
            }}
          />
          {errors.avatar && (
            <Form.ErrorMessage message={errors.avatar.message} />
          )}
          {/* If the inputs are valid, button is enabled otherwise its disabled */}
          <Button
            text="Submit"
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
