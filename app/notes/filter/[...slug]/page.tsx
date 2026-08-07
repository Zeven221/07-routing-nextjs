import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ClientApp from "./Notes.client";
import { fetchNotes } from "@/lib/api";
interface NoteFilterProps {
  params: Promise<{ slug: string[] }>;
}
async function App({ params }: NoteFilterProps) {
  const { slug } = await params
  const tag = slug[0] === "all" ? undefined : slug[0];
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", tag],
    queryFn: () => fetchNotes({ page: 1, perPage: 12, tag}),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientApp tag={tag}></ClientApp>
    </HydrationBoundary>
  );
}

export default App;
