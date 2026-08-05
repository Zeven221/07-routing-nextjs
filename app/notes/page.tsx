import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ClientApp from "./Notes.client";
import { fetchNotes } from "@/lib/api";
async function App() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes"],
    queryFn: () => fetchNotes({ page: 1, perPage: 12 }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ClientApp></ClientApp>
    </HydrationBoundary>
  );
}

export default App;
