import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h1 className="text-xl text-blue-700">📝 Blog Post #{id}</h1>
      <p className="mt-2 text-gray-700">This is dynamic content for blog post ID {id}.</p>
    </div>
  );
}

export default BlogPost;
