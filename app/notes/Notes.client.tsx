"use client";
import { useState } from "react";
import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";
import css from "@/app/notes/Notes.module.css";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import NotesModal from "@/components/Modal/Modal";
import SearchBox from "@/components/SearchBox/SearchBox";
import NoteForm from "@/components/NoteForm/NoteForm";
import { useDebouncedCallback } from "use-debounce";
import Pagination from "@/components/Pagination/Pagination";
function ClientApp() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const { data, isSuccess } = useQuery({
    queryKey: ["notes", currentPage, search],
    queryFn: () => fetchNotes({ page: currentPage, perPage: 12, search }),
    placeholderData: keepPreviousData,
    refetchOnMount: false,
  });
  const totalPages = data?.totalPages ?? 0;
  const setModalMenuClose = () => {
    setIsModalOpen(false);
  };
  const setModalMenuOpen = () => {
    setIsModalOpen(true);
  };
  const handleSeach = useDebouncedCallback((search: string) => {
    setSearch(search);
    setCurrentPage(1);
  }, 500);
  const handleSubmit = () => {
    setModalMenuClose();
  };
  return (
    <div className={css.app}>
      {isModalOpen && (
        <NotesModal onClose={setModalMenuClose}>
          {" "}
          <NoteForm
            onSubmit={handleSubmit}
            onCancel={setModalMenuClose}
          ></NoteForm>
        </NotesModal>
      )}
      <header className={css.toolbar}>
        <SearchBox onChangeValue={handleSeach}></SearchBox>
        {isSuccess && totalPages > 1 &&(
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          ></Pagination>
        )}
        <button className={css.button} onClick={setModalMenuOpen}>
          Create note +
        </button>
      </header>
      {data! && data.notes.length > 0 && (
        <NoteList notes={data.notes}></NoteList>
      )}
    </div>
  );
}

export default ClientApp;
