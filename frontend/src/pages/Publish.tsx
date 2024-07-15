import { useState } from "react";
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePublish = () => {
    axios
      .post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((response) => {
        navigate(`/blog/${response.data.id}`);
      })
      .catch((error) => {
        console.error("There was an error publishing the blog!", error);
      });
  };

  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full">
        <div className="max-w-screen-lg w-full">
          <input
            type="text"
            className=" border-gray-300 text-gray-900 rounded-lg !outline-none p-2.5 text-5xl w-full"
            placeholder="Title"
            required
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <textarea
            id="editor"
            rows={10}
            className="resize-y w-full text-lg text-gray-800 bg-white !outline-none p-2.5"
            placeholder="Tell your Story ..."
            required
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
          <button
            type="submit"
            onClick={handlePublish}
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};
