import React from "react";
import { useForm } from "react-hook-form";
const App = () => {
  const {
    register, // to register any field in the react hook form
    handleSubmit, // to handle submit
    formState: { errors }, // to check what errors are
  } = useForm();

  const submithandling = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(submithandling)}>
        <input
          type="text"
          placeholder="Input your name"
          {...register("name", { required: true, message: "" })}
        />

        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

        <input
          type="password"
          placeholder="enter your password"
          {...register("password", {
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
              message:
                "Password should have a small letter, capital letter, a special symbol and a number",
            },
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <input
          type="number"
          placeholder="age"
          {...register("age", {
            min: {
              value: 18,
              message: "age should be more than 18",
            },
            max: {
              value: 99,
              message: "age should be less than 99",
            },
          })}
        />
        {errors.age && <p style={{ color: "red" }}>{errors.age.message}</p>}
      </form>
    </div>
  );
};

export default App;
