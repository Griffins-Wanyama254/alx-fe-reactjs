import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  return <h2>Viewing Blog #{id}</h2>;
}

export default Blog;
