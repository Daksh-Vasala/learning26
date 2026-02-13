import { useForm } from 'react-hook-form'

function FormValid2() {
  const { register, handleSubmit, formState:{errors}, watch } = useForm();

  const password = watch("password");

  const validatorSchema = {
    name: {
      required: {
        value: true,
        message: "Name is required"
      },
      minLength: {
        value: 2,
        message: "Minimum characters is 2"
      },
      maxLength: {
        value: 255,
        message: "Name must be 255 characters or fewer"
      }
    },

    age: {
      required: {
        value: true,
        message: "Age is required"
      },

      min: {
        value: 18,
        message: "Minimum age is 18"
      },

      max: {
        value: 60,
        message: "Maximum age is 60"
      },
    },

    email: {
      required: {
        value: true,
        message: "Email is required"
      },
      patterm: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "Enter valid email"
      }
    },

    password: {
      required: {
        value: true,
        message: "Password is required"
      },
      pattern: {
        value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: "Password should contain 1 upper case, 1 lower case, 1 special character, 1 digit, minimum 8 characters"
      }
    },

    confirmedPassword: {
      required: {
        value: true,
        message: "Confirm password is required"
      },
      validate: (params) => {
        return params == password || "Password should match"
      }
    },
  }

  const submitHandler = (data) => {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <input type="text" placeholder='Full name' {...register("name", validatorSchema.name)} />
        <p style={{color: "red"}}>{errors.name?.message}</p>
      </div>
      <div>
        <input type="number" placeholder='Enter age' {...register("age", validatorSchema.age)} />
        <p style={{color: "red"}}>{errors.age?.message}</p>
      </div>
      <div>
        <input type="email" placeholder='Enter email' {...register("email", validatorSchema.email)} />
        <p style={{color: "red"}}>{errors.email?.message}</p>
      </div>
      <div>
        <input type="password" placeholder='Password' {...register("password", validatorSchema.password)} />
        <p style={{color: "red"}}>{errors.password?.message}</p>
      </div>
      <div>
        <input type="password" placeholder='Cofirm password' {...register("confirmedPassword", validatorSchema.confirmedPassword)} />
        <p style={{color: "red"}}>{errors.confirmedPassword?.message}</p>
      </div>
      <input type="submit" />
    </form>
  )
}

export default FormValid2