import { useForm } from "react-hook-form";
import { useState } from "react";

function FormDemo2() {
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
        <h1>Job Application</h1>

        <div>
          <label>Phone</label>
          <input type="tel" {...register("phone")} />
        </div>

        <div>
          <label>Experience (Years)</label>
          <input type="number" {...register("experience")} />
        </div>

        <div>
          <label>Skills</label>
          <input type="text" {...register("skills")} />
        </div>

        <div>
          <label>Resume URL</label>
          <input type="url" {...register("resume")} />
        </div>

        <div>
          <label>Expected Salary</label>
          <input type="number" {...register("salary")} />
        </div>

        <input type="submit" />
      </form>

      {isSubmitted && (
        <div>
          <h2>Phone: {userData.phone}</h2>
          <h2>Experience: {userData.experience}</h2>
          <h2>Skills: {userData.skills}</h2>
          <h2>Resume: {userData.resume}</h2>
          <h2>Expected Salary: {userData.salary}</h2>
        </div>
      )}
    </div>
  );
}

export default FormDemo2;
