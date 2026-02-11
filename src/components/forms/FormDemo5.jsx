import { useForm } from "react-hook-form";
import { useState } from "react";

function FormDemo5() {
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
        <h1>Product Feedback</h1>

        <div>
          <label>Favorite Color</label>
          <input type="color" {...register("favColor")} />
        </div>

        <div>
          <label>Satisfaction Level</label>
          <input type="range" min="1" max="10" {...register("satisfaction")} />
        </div>

        <div>
          <label>Search Product</label>
          <input type="search" {...register("search")} />
        </div>

        <div>
          <label>Preferred Contact Time</label>
          <input type="time" {...register("contactTime")} />
        </div>

        <div>
          <label>Comments</label>
          <textarea {...register("comments")}></textarea>
        </div>

        <input type="submit" />
      </form>

      {isSubmitted && (
        <div>
          <h2>Favorite Color: {userData.favColor}</h2>
          <h2>Satisfaction: {userData.satisfaction}</h2>
          <h2>Search: {userData.search}</h2>
          <h2>Contact Time: {userData.contactTime}</h2>
          <h2>Comments: {userData.comments}</h2>
        </div>
      )}
    </div>
  );
}

export default FormDemo5;
