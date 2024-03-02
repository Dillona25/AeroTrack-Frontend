import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

export const SignupModal = () => {
  return (
    <Modal>
      <h1 className="font-normal">Signup</h1>
      <Form>
        <Form.TextInput labelText="Name" placeholder="Name" />
        <Form.TextInput labelText="Email" placeholder="Email" />
        <Form.TextInput labelText="Password" placeholder="Password" />
        <Button text="Login" className="bg-black mt-3" />
        <p className="text-[14px] font-normal text-center">
          Have an Account? Signin here
        </p>
      </Form>
    </Modal>
  );
};
