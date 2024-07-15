
export const BlogSkeleton = () => {
  return (
    <div>
      <div className="border-b-2 px-10 md:px-0 cursor-pointer">
        <div className="flex gap-2 items-center pt-4">
          <div className="h-2.5 bg-gray-200 rounded-full  w-28 mb-4"></div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full  w-28 mb-4"></div>
          </div>
          <div className="text-slate-500 h-2.5 bg-gray-200 rounded-full  w-28 mb-4">
          </div>
        </div>
        <div className="my-2">
          <div className="text-2xl font-bold">
            <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
          </div>
          <div className="text-lg font-light">
            <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
          </div>
        </div>
        <div>
          <div className="font-light text-slate-500 py-2">
            <div className="h-2.5 bg-gray-200 rounded-full mb-4"></div>
          </div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
