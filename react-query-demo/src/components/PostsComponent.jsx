import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    return response.json();
  };

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 60000, // cache data for 1 minute
  });

  if (isLoading) return <p className="text-center text-gray-500">Loading posts...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div>
      <button
        onClick={() => refetch()}
        className="block mx-auto mb-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Refetch Posts
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.slice(0, 12).map((post) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition duration-300"
          >
            <h2 className="font-semibold text-lg text-blue-700 mb-2">{post.title}</h2>
            <p className="text-gray-600 text-sm">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;

