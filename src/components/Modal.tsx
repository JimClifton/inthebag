import { AiOutlineCloseCircle } from "react-icons/ai";

const Modal = (props: { children: any; handleClose: Function }) => {
  const { children, handleClose } = props;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-800 bg-opacity-50 z-10">
      <div className="max-w-full max-h-full w-auto h-auto absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 p-5 rounded-md bg-slate-50">
        {children}
        <button
          onClick={() => handleClose()}
          className="w-8 h-8 absolute top-2 right-2"
        >
          <AiOutlineCloseCircle className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
