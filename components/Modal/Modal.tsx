import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import React, { useEffect} from "react";
interface NotesModalProps {
  onClose: () => void;
  children: React.ReactNode
}
export default function NotesModal({ onClose, children }: NotesModalProps) {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  useEffect(() => {
    const handleButtonClick = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleButtonClick);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleButtonClick);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  return createPortal(
    <div
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
      onClick={handleBackDropClick}
    >
      <div className={css.modal}>

        {children}

        
      </div>
    </div>,
    document.body,
  );
}
