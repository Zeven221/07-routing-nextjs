import axios from "axios";
axios.defaults.baseURL = "https://notehub-public.goit.study/api";
import type { Note, NoteFormValue } from "../types/note";
interface fetchNotesData {
  notes: Note[];
  totalPages: number;
}
const API_KEY: string = `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`;
export async function fetchNotes(config: {
  page: number;
  perPage: number;
  search?: string;
}): Promise<fetchNotesData> {
  const response = await axios.get<fetchNotesData>("/notes", {
    params: {
      page: config.page,
      perPage: config.perPage,
      ...(config.search !== '' && {search: config.search})
    },
    headers: { Authorization: API_KEY },
  });
  return response.data;
}
export async function createNote(body: NoteFormValue) {
  const response = await axios.post<Note>("/notes", body, {
    headers: { Authorization: API_KEY },
  });
  return response.data;
}
export async function deleteNote(id: string) {
  const response = await axios.delete<Note>(`/notes/${id}`, {

    headers: { Authorization: API_KEY },
  });
  return response.data;
}
export async function fetchNoteById(id: string){
    const response = await axios.get<Note>(`/notes/${id}`, {

    headers: { Authorization: API_KEY },
  });
  return response.data
}