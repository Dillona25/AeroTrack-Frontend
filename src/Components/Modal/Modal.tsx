import { ReactNode } from "react";

// When passing children the type is ReactNode. ReactNode is the possibility of all return values of a component
type ModalType = {
  children?: ReactNode;
  isOpen?: boolean;
  toggle?: () => void;
};

// Giving the parameter props and all the types
export const Modal = (props: ModalType) => {
  return (
    <div className="fixed flex flex-col items-center bottom-0  inset-0 z-50 backdrop-blur-md">
      <div className="w-full absolute bottom-0 bg-white m-auto p-5 rounded-xl box-border">
        {props.children}
      </div>
    </div>
  );
};
