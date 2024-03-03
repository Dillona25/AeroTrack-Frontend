import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

type Props = {
  handleSignUpModal?: () => void;
  closeModal?: () => void;
};

export const SignInModal = (props: Props) => {
  return (
    <Modal>
      <h1 className="font-normal">Login</h1>
      <button
        onClick={props.closeModal}
        className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
      ></button>
      <Form>
        <Form.TextInput labelText="Email" placeholder="Email" />
        <Form.TextInput labelText="Password" placeholder="Password" />
        <Button text="Login" className="bg-black mt-3" />
      </Form>
      <p className="text-[14px] font-normal text-center pt-4">
        No Account? Signup{" "}
        <button onClick={props.handleSignUpModal} className="underline">
          here
        </button>
      </p>
    </Modal>
  );
};
