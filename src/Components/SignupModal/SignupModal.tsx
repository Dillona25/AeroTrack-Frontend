import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

type Props = {
  handleSignInModal?: () => void;
  closeModal?: () => void;
};

export const SignUpModal = (props: Props) => {
  return (
    <Modal>
      <h1 className="font-normal">Signup</h1>
      <button
        onClick={props.closeModal}
        className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
      ></button>
      <Form>
        <Form.TextInput labelText="Name" placeholder="Name" />
        <Form.TextInput labelText="Email" placeholder="Email" />
        <Form.TextInput labelText="Password" placeholder="Password" />
        <Button text="Login" className="bg-black mt-3" />
      </Form>
      <p className="text-[14px] font-normal text-center pt-4">
        Have an Account? Signin{" "}
        <button onClick={props.handleSignInModal} className="underline">
          here
        </button>
      </p>
    </Modal>
  );
};
