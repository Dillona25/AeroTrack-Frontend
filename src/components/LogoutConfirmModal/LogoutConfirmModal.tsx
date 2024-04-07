import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
        className="py-10"
      >
        <h1 className="font-normal text-[20px] sm:text-[35px] text-center">
          Are you sure you want to logout?
        </h1>
        <button
          onClick={props.closeModal}
          className="bg-closeIcon h-6 w-6 absolute right-[15px] top-[15px]"
        ></button>
        <div className="gap-4 pt-5 flex flex-col">
          <Button
            className="bg-black"
            text="Cancel"
            onClick={props.closeModal}
          />
          <Button className="bg-red-500" text="Logout" onClick={handleLogout} />
        </div>
      </motion.div>
    </Modal>
  );
};
