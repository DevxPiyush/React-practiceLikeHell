import React, { useRef } from "react";

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (
      name.length <= 3 ||
      email.length <= 3 ||
      password.length <= 3 ||
      confirmPassword.length <= 3
    ) {
      alert("All fields must be more than 3 characters");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      name,
      email,
      password,
    });

    // Reset form manually
    nameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 items-center justify-center h-screen"
    >
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
        className="bg-zinc-300 px-4 py-3"
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        className="bg-zinc-300 px-4 py-3"
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Password"
        className="bg-zinc-300 px-4 py-3"
      />
      <input
        ref={confirmPasswordRef}
        type="password"
        placeholder="Confirm Password"
        className="bg-zinc-300 px-4 py-3"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-3">
        Submit
      </button>
    </form>
  );
};

export default App;
