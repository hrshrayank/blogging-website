import { signupInput } from "@shrayank/blogging-website";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import axios from "axios";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const navigate = useNavigate();
  const [postInputs, setPostInputs] = useState<signupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
        postInputs
      );
      const jwt = response.data.jwt;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (err: any) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      {type === "signup" ? (
        <>
          <div className="text-3xl font-bold">Create an account</div>
          <div className="text-base font-normal text-slate-600 ">
            Already have an Account?
            <Link to={"/signin"} className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="text-3xl font-bold">Login</div>
          <div className="text-base font-normal text-slate-600 ">
            Don't have an Account?{" "}
            <Link to={"/signup"} className="underline underline-offset-4">
              Sign Up
            </Link>
          </div>
        </>
      )}

      <div className="mt-5 w-full flex flex-col items-center">
        {type === "signup" ? (
          <InputBox
            label="Name"
            placeholder="Enter your name"
            onChange={(e) => {
              setPostInputs((c) => ({
                ...c,
                name: e.target.value,
              }));
            }}
          />
        ) : null}

        <InputBox
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              email: e.target.value,
            }));
          }}
        />
        <InputBox
          label="Password"
          type="password"
          placeholder="Enter the password"
          onChange={(e) => {
            setPostInputs((c) => ({
              ...c,
              password: e.target.value,
            }));
          }}
        />

        {error && <div className="text-red-500 mt-2">{error}</div>}

        <button
          type="button"
          onClick={sendRequest}
          className={`text-white px-5 ${
            loading ? "bg-gray-400" : "bg-gray-800 hover:bg-gray-900"
          } focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 me-2 mb-2`}
          disabled={loading}
        >
          {loading
            ? "Processing..."
            : type === "signup"
            ? "Sign up"
            : "Sign In"}
        </button>
      </div>
    </div>
  );
};

interface InputBoxType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const InputBox = ({ label, type, placeholder, onChange }: InputBoxType) => {
  return (
    <div className="mb-3">
      <label className="block mb-2 text-sm font-medium text-gray-90">
        {label}
      </label>
      <input
        type={type || "text"}
        id="first_name"
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
            p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
