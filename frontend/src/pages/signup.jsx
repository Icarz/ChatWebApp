import { Link } from "react-router-dom";
import Gender from "../components/Gender";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [input, setInput] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmedPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckboxChange = (gender) => {
    setInput({ ...input, gender });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    await signup(input);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-brown-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          SignUp <span className="text-blue-400">Chat App</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              value={input.fullName}
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              onChange={(e) => setInput({ ...input, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username </span>
            </label>
            <input
              value={input.userName}
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              onChange={(e) => setInput({ ...input, userName: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">password</span>
            </label>
            <input
              value={input.password}
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">confirm password</span>
            </label>
            <input
              value={input.confirmedPassword}
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              onChange={(e) =>
                setInput({ ...input, confirmedPassword: e.target.value })
              }
            />
          </div>

          {/* Gender confirmation goes here **/}
          <Gender
            onCheckboxChange={handleCheckboxChange}
            selectedGender={input.gender}
          />
          <Link
            to="/login"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-center"
          >
            {"Already "}have an account ?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
