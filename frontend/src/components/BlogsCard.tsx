import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogsCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b-2 px-10 md:px-0 cursor-pointer">
        <div className="flex gap-2 items-center pt-4">
          <Avatar name={authorName} />
          <div>{authorName}</div>
          <div className="text-slate-500">|{publishedDate}</div>
        </div>
        <div className="my-2">
          <div className="text-2xl font-bold">{title}</div>
          <div className="text-lg font-light">
            {content.slice(0, 100) + "..."}
          </div>
        </div>
        <div>
          <div className="font-light text-slate-500 py-2">{`${Math.ceil(
            content.length / 100
          )} minutes read`}</div>
        </div>
      </div>
    </Link>
  );
};

export const Avatar = ({
  name,
  size = "8",
}: {
  name: string;
  size?: string;
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-300 rounded-full`}
    >
      <span className="font-light text-black">
        {name[0]}
      </span>
    </div>
  );
};
