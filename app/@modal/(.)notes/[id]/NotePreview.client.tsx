"use client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import css from "./NotePreview.module.css";
import { fetchNoteById } from "@/lib/api";
import NotePreviewModal from "./modal";
function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
    refetchOnMount: false,
  });
  if (isLoading) {
    return <p>Loading, please wait...</p>;
  }
  if (error || !note) {
    return <p>Something went wrong.</p>;
  }
  return (
    <NotePreviewModal>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
          </div>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.content}>{note.content}</p>
          <p className={css.date}>{note.createdAt}</p>
        </div>
      </div>
      </NotePreviewModal>
  );
}
export default NotePreviewClient;
