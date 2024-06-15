import { X } from "lucide-react";

const Modal = ({ src, alt, onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <div
      className="fixed inset-0 p-10 z-50 flex items-center justify-center backdrop-blur-xl"
      onClick={handleClick}
    >
      <button
        className="cursor-pointer rounded-full bg-black/50 p-2 text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white absolute top-0 left-0 m-8"
        onClick={onClose}
      >
        <X size={20} />
      </button>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="max-w-screen max-h-screen rounded-lg"
        />
      </div>
    </div>
  );
};

export default Modal;
