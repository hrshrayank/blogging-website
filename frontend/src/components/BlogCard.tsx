import { AppBar } from "./AppBar";
import { Avatar } from "./BlogsCard";

export const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div>
      <AppBar />
      <div className="grid px-16 pt-10 grid-cols-1 md:grid-cols-12">
        <div className="col-span-8 ">
          <div className="font-extrabold text-3xl"> {blog.title}</div>
          <div className="font-normal text-lg mt-9"> {blog.content}</div>
        </div>
        <div className="col-span-4 px-10">
          <div className="font-medium">Author</div>
          <div className="flex gap-3 mt-2 justify-center items-center">
            <div>
              <Avatar name={blog.author.name} size="8" />
            </div>
            <div className="flex flex-col">
              <div className="font-bold text-lg">{blog.author.name}</div>

              <div className="text-slate-600">
                Master of mirth, purveyorof puns, and the funniest person in the
                kingdom
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
