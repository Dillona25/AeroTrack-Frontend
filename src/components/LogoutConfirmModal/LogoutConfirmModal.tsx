import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import Alert from "../../images/warning.png";

type Props = {
  closeModal?: () => void;
  handleLogout?: () => void;
  setIsLoggedIn?: (value: boolean) => void;
  setCurrentUser?: (user: null) => void;
};

export const LogoutConfirmModal = (props: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("jwt");
    props.setIsLoggedIn?.(false);
    props.setCurrentUser?.(null);
    props.closeModal?.();
    navigate("/");
  };

  return (
    <Modal>
      <img
        src={Alert}
        alt="Alert Icon"
        className="h-[75px] w-fit m-auto mb-5"
      />
      <h1 className="font-normal text-[24px] sm:text-[30px] text-center">
        Are you sure you want to logout?
      </h1>
      <button
        onClick={props.closeModal}
        className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
      ></button>
      <div className="gap-4 pt-5 flex ">
        <Button
          className="bg-black"
          text="No, Cancel"
          onClick={props.closeModal}
        />
        <Button
          className="bg-red-500"
          text="Yes, Logout"
          onClick={handleLogout}
        />
      </div>
    </Modal>
  );
};
