import { useState } from "react";
import { AppBar } from "../components/AppBar";
import { BlogsCard } from "../components/BlogsCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { blogs, loading } = useBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  // Calculate the indexes for slicing the blogs array
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center flex-wrap max-w-3xl m-auto flex-col">
          <BlogSkeleton />
          <BlogSkeleton />
          <BlogSkeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <AppBar />
      <div className="flex justify-center flex-wrap max-w-3xl m-auto flex-col">
        {currentBlogs.map((blog) => (
          <BlogsCard
            key={blog.id}
            id={blog.id}
            authorName={blog.author.name || ""}
            title={blog.title}
            content={blog.content}
            publishedDate="Oct 02, 2024"
          />
        ))}
      </div>
      <div className="flex justify-center my-4">
        {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
            } rounded-full`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
