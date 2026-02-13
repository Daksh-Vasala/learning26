import { useForm } from "react-hook-form";

function WatchForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const password = watch("password");
  const validations = {
    minLength: password?.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasDigit: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form
      style={{ textAlign: "center" }}
      onSubmit={handleSubmit(submitHandler)}
    >
      <input type="password" placeholder="Password" {...register("password")} />
      <div>
        <p
          style={{
            color:
              password == ""
                ? "black"
                : validations.minLength
                  ? "green"
                  : "red",
          }}
        >
          Minimum should be 8 character
        </p>
        <p
          style={{
            color:
              password == ""
                ? "black"
                : validations.hasUpperCase
                  ? "green"
                  : "red",
          }}
        >
          Atleast 1 capital letter
        </p>
        <p
          style={{
            color:
              password == ""
                ? "black"
                : validations.hasLowerCase
                  ? "green"
                  : "red",
          }}
        >
          Atleast 1 small letter
        </p>
        <p
          style={{
            color:
              password == ""
                ? "black"
                : validations.hasSpecialChar
                  ? "green"
                  : "red",
          }}
        >
          Atleast 1 special letter
        </p>
        <p
          style={{
            color:
              password == "" ? "black" : validations.hasDigit ? "green" : "red",
          }}
        >
          Atleast 1 digit
        </p>
      </div>

      <input type="submit" />
    </form>
  );
}

export default WatchForm;
