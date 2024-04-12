import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {
  handleSignInModal?: () => void;
  closeModal?: () => void;
  handleSignup?: (credentials: {
    name: string;
    avatar: string;
    email: string;
    password: string;
  }) => void;
};

export const SignUpModal = (props: Props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: "",
      avatar: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<{
    email: string;
    password: string;
    name: string;
    avatar: string;
  }> = (data) => {
    props.handleSignup?.(data);
    props.closeModal?.();
  };

  return (
    <Modal>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <h1 className="font-normal sm:text-[30px]">Signup</h1>
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
            labelText="Avatar"
            placeholder="Avatar Link"
            register={register("avatar", {
              required: "New avatar is required",
            })}
            onChange={(evt) => {
              const target = evt.target as HTMLInputElement;
              setValue("avatar", target.value, { shouldValidate: true });
            }}
          />
          {errors.avatar && (
            <Form.ErrorMessage message={errors.avatar.message} />
          )}
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
          {/* If the inputs are valid, button is enabled otherwise its disabled */}
          <Button
            text="Signup"
            className={`bg-black mt-3 ${
              isValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isValid}
          />
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
