import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkEmailExists } from "../../utils/authApi";

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
    setError,
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
  }> = async (data) => {
    try {
      const result = await checkEmailExists(data.email);

      if (result.exists) {
        setError("email", {
          type: "manual",
          message: "Email already exists. Please use a different email.",
        });
      } else {
        props.handleSignup?.(data);
        props.closeModal?.();
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <Modal>
      <h1 className="font-normal sm:text-[30px]">Signup</h1>
      <button
        onClick={props.closeModal}
        className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
      ></button>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Name input */}
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

        {/* Avatar input */}
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
        {errors.avatar && <Form.ErrorMessage message={errors.avatar.message} />}

        {/* Email input */}
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

        {/* Password input */}
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

        {/* Signup button */}
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
    </Modal>
  );
};
