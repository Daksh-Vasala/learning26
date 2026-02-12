import { useForm } from "react-hook-form"

function FormValid1() {
  const { register, handleSubmit, formState:{errors} } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  }

  const validationSchema = {
    emailValidator: {
      required: {
        value: true,
        message: "Email is required"
      }
    },
    
    passwordValidator: {
      required: {
        value: true,
        message: "Password is required"
      },
      minLength: {
        value: 8,
        message: "Password should be 8 characters long"
      },
      maxLength: {
        value: 20,
        message: "Password cant be more than 20 characters long"
      }
    }
  }

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <input type="text" placeholder="Enter email" {...register("email", validationSchema.emailValidator)} />
        {errors.email?.message}
      </div>

      <div>
        <input type="password" placeholder="Enter password" {...register("password", validationSchema.passwordValidator)} />
        {errors.password?.message}
      </div>
      <input type="submit" />
    </form>
  )
}

export default FormValid1