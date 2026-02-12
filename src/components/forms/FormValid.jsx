import { useForm } from "react-hook-form";

function FormValid() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  const validationSchema = {
    nameValidator: {
      required: {
        value: true,
        message: "Name is required",
      },
    },

    ageValidator: {
      required: {
        value: true,
        message: "Age is required",
      },
      min: {
        value: 18,
        message: "Minimum age is 18",
      },
      max: {
        value: 60,
        message: "Age above 60 are not accepted",
      },
    },
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <input
          placeholder="Enter name"
          type="text"
          {...register("name", validationSchema.nameValidator)}
        />
        {errors.name?.message}
      </div>

      <div>
        <input
          placeholder="Enter age"
          type="number"
          {...register("age", validationSchema.ageValidator)}
        />
        {errors.age?.message}
      </div>

      <input type="submit" />
    </form>
  );
}

export default FormValid;
