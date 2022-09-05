import { createPortal } from 'react-dom';

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="absolute bg-black h-full left-0 opacity-25 top-0 w-full"
      onClick={onClose}
    ></div>
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div className="absolute bg-white left-1/2 p-10 rounded-md top-1/2 -translate-x-1/2 -translate-y-1/2">
      {children}
    </div>
  );
};

const portalElement = document.getElementById('overlay-root');

export const Modal = ({ children, onClose }) => {
  return (
    <>
      {createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};
