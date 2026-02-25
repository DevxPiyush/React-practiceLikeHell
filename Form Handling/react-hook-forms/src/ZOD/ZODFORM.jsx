// here i will be using the zod form methods to validate a form
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// step 1. import and install zod

// step 2. add zod schema
const formSchema = z.object({
  // step 3. ab yaha batao apke fields and uska type and uske validation methods - name, password

  name: z
      .string()
      .min(3, "Minimum name length must be 3")
      .max(20, "Maximum length of name must be 20"),

  password: z
      .string()
      .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
          "Password must include small, capital, number & special character"
      ),

  // what if we are said to confirm password then ??
  confirm: z.string(),

  // remember our browser always only understand a single thing that is string hence age is a number so to understand that we use the thing coerce like this
  age: z.coerce
      .number()
      .min(18, "Age must be more than 18")
      .max(99, "Age must be less than 99"),
  // below is the confirm password logic (you can get many more things via zod documentations as well)
}).refine((data) => data.password === data.confirm, {
  message: "Password does not match",
  path: ["confirm"] // path of error
})

// step 4. Integrate the zod into our hookform - first install hookform/resolver

const ZODFORM = () => {
  const {
    register, // to register any field in the react hook form
    handleSubmit, // to handle the submission of form
    formState: { errors }, // to access validation errors
  } = useForm({
    // step 5. after installing, integrate the resolver into the useforms by using zodResolver(<your Schema name>)
    resolver: zodResolver(formSchema),
  });

  const submithandling = (data) => console.log(data);

  return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-100">
        <form
            onSubmit={handleSubmit(submithandling)}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col gap-4 w-80"
        >
          <input
              type="text"
              placeholder="Input your name"
              {...register("name")}
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
{/* step 6. define the error stuffs how to display (styling and etc)*/}
          {errors.name && (
              <p className="text-red-500 text-sm">
                {errors.name.message}
              </p>
          )}

          <input
              type="number"
              placeholder="Input your age"
              {...register("age")}
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.age && (
              <p className="text-red-500 text-sm">
                {errors.age.message}
              </p>
          )}

          <input
              type="password"
              placeholder="Enter your password"
              {...register("password")}
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message}
              </p>
          )}

          <input
              type="password"
              placeholder="Retype your password"
              {...register("confirm")}
              className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirm&& (
              <p className="text-red-500 text-sm">
                {errors.confirm.message}
              </p>
          )}

          <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
  );
};

export default ZODFORM;