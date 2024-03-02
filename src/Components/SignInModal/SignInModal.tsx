import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";
import { Button } from "../Button/Button";

export const SignInModal = () => {
  return (
    <Modal>
      <h1 className="font-normal">Login</h1>
      <button className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"></button>
      <Form>
        <Form.TextInput labelText="Email" placeholder="Email" />
        <Form.TextInput labelText="Password" placeholder="Password" />
        <Button text="Login" className="bg-black mt-3" />
        <p className="text-[14px] font-normal text-center">
          No Account? Signup here
        </p>
      </Form>
    </Modal>
  );
};
