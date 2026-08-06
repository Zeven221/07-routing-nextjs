import css from "./Modal.module.css";
import { createPortal } from "react-dom";
import React, { useEffect} from "react";
import { useRouter } from 'next/navigation';
interface NotePreviewModalProps {
  children: React.ReactNode
}
export default function NotePreviewModal({ children }: NotePreviewModalProps) {
    const router = useRouter()
    const closeModal = () => router.back()
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    const closeModal = () => router.back()
    const handleButtonClick = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleButtonClick);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleButtonClick);
      document.body.style.overflow = "";
    };
  }, [router]);
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
