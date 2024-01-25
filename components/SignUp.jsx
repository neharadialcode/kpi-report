import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "./Firebase";

const SignUp = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    category: "",
  };
  const [studentData, setStudentData] = useState(initialState);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (studentData.firstName && studentData.email) {
      const docRef = await addDoc(collection(db, "student-data"), studentData);
      console.log(db, "docref");
      setStudentData(initialState);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center max-w-[700px] mx-auto">
      <form action="" onSubmit={(e) => onSubmitHandler(e)}>
        <input
          onChange={(e) =>
            setStudentData({ ...studentData, firstName: e.target.value })
          }
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="First Name"
          value={studentData.firstName}
        />
        <input
          onChange={(e) =>
            setStudentData({ ...studentData, lastName: e.target.value })
          }
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="Last Name"
          value={studentData.lastName}
        />
        <input
          onChange={(e) =>
            setStudentData({ ...studentData, email: e.target.value })
          }
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="Email"
          value={studentData.email}
        />
        <input
          onChange={(e) =>
            setStudentData({ ...studentData, password: e.target.value })
          }
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="Password"
          value={studentData.password}
        />
        <input
          onChange={(e) =>
            setStudentData({ ...studentData, confirmPassword: e.target.value })
          }
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          type="text"
          name=""
          id=""
          placeholder="ConfirmPassword"
          value={studentData.confirmPassword}
        />
        <select
          onChange={(e) =>
            setStudentData({ ...studentData, category: e.target.value })
          }
          className="border-[1px] border-purple-700 w-full m-1 p-4"
          name=""
          id=""
        >
          <option selected disabled>
            Choose category
          </option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="UI/UX">UI/UX</option>
          <option value="Wordpress">Wordpress</option>
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
