import React from "react";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-[700px] mx-auto">
      <form action="">
        <input
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="First Name"
        />
        <input
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="Last Name"
        />
        <input
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="Email"
        />
        <input
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="Password"
        />
        <input
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="ConfirmPassword"
        />
        <select
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          name=""
          id=""
        >
          <option value="">Frontend</option>
          <option value="">Backend</option>
          <option value="">UI/UX</option>
          <option value="">Wordpress</option>
        </select>
        <div className="text-center">
          <button className="bg-purple-700 text-white py-2 px-10 hover:bg-purple-500 transition-all duration-200 ease-in-out rounded-lg mt-4 text-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
