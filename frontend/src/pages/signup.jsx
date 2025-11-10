import Gender from "../components/Gender";

const signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96  mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-brown-400 bg-clip-padding background-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-gray-300 text-center">
          SignUp <span className="text-blue-400">Chat App</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Fullname</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username </span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          {/* Gender confirmation goes here **/}
          <Gender />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-center"
          >
            {"Already "}have an account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default signup;
