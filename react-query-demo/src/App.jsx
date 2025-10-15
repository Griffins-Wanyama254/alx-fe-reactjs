import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 p-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
          React Query Demo – Fetching Posts
        </h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
