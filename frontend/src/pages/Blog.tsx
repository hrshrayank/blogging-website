import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogCard } from "../components/BlogCard";
import { Spinner } from "../components/Spinner";

export const Blog = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, blog } = useBlog({
    id: id || "",
  });
  if (loading) {
    return <div>
      <Spinner/>
    </div>;
  }
  return (
    <div>
      <BlogCard blog={blog} />
    </div>
  );
};
