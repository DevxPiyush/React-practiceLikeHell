import React, { useState } from "react";

const App = () => {
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const submithandler = (event) => {
    event.preventDefault();

    if (!isformvalid) return;

    console.log(formdata);

    setformdata({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const changehandler = (event) => {
    setformdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const isformvalid =
    formdata.name.length > 3 &&
    formdata.email.length > 3 &&
    formdata.password.length > 3 &&
    formdata.confirmpassword.length > 3 &&
    formdata.password === formdata.confirmpassword;

  return (
    <div>
      <form
        className="m-4 flex flex-col items-center justify-center gap-4"
        onSubmit={submithandler}
      >
        <input
          type="text"
          name="name"
          value={formdata.name}
          onChange={changehandler}
          placeholder="Type your full name"
          className="border border-amber-300 px-5 py-4 rounded-xl shadow-2xs"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={changehandler}
          value={formdata.email}
          className="border border-amber-300 px-5 py-4 rounded-xl shadow-2xs"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formdata.password}
          onChange={changehandler}
          className="border border-amber-300 px-5 py-4 rounded-xl shadow-2xs"
        />
        <input
          type="password"
          name="confirmpassword"
          value={formdata.confirmpassword}
          onChange={changehandler}
          placeholder="confirm password"
          className="border border-amber-300 px-5 py-4 rounded-xl shadow-2xs"
        />
        <input
          type="submit"
          disabled={!isformvalid}
          className={`px-5 py-3 rounded-full ${
            isformvalid ? "bg-blue-600" : "bg-zinc-400"
          }`}
        />
      </form>
    </div>
  );
};

export default App;
