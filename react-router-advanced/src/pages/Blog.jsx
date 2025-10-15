import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>📝 Blog Post #{id}</h1>
    </div>
  );
};

export default Blog;
