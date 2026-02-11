import { useForm } from "react-hook-form";
import { useState } from "react";

function FormDemo3() {
  const { register, handleSubmit } = useForm();
  const [userData, setUserData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = (data) => {
    setUserData(data);
    setIsSubmitted(true);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit(submitHandler)}>
        <h1>Student Registration</h1>

        <div>
          <label>First Name</label>
          <input type="text" {...register("firstName")} />
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" {...register("lastName")} />
        </div>

        <div>
          <label>Gender</label>
          <select {...register("gender")}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div>
          <label>Course</label>
          <input type="text" {...register("course")} />
        </div>

        <div>
          <label>Profile Picture</label>
          <input type="file" {...register("profilePic")} />
        </div>

        <input type="submit" />
      </form>

      {isSubmitted && (
        <div>
          <h2>First Name: {userData.firstName}</h2>
          <h2>Last Name: {userData.lastName}</h2>
          <h2>Gender: {userData.gender}</h2>
          <h2>Course: {userData.course}</h2>
        </div>
      )}
    </div>
  );
}

export default FormDemo3;
