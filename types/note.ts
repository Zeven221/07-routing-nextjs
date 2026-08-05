export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
  updatedAt: string;
}
export interface NoteFormValue {
    content: string
    title: string
    tag: "Todo" | "Work" | "Shopping" | "Meeting" | "Personal"
}