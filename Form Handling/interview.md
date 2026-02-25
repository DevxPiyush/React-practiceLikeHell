# 📘 React Forms – Interview Notes

## 📌 1️⃣ Controlled Components

### 🔹 Definition

A controlled component is a form input whose value is controlled by React state.

React becomes the **single source of truth**.

```jsx
<input value={state} onChange={handleChange} />
```

---

### 🔹 How It Works (Flow)

1. User types in input
2. `onChange` event triggers
3. `setState()` updates state
4. Component re-renders
5. `value={state}` updates the input

👉 UI = function(state)

---

### 🔹 Basic Example

```jsx
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />

      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

---

### 🔹 Advantages

- Single source of truth
- Easy validation
- Easy conditional rendering
- Predictable behavior
- Better integration with React logic

---

### 🔹 Disadvantages

- Re-renders on every keystroke
- Can affect performance in very large forms

---

### 🔹 Interview One-Liner

> Controlled components are form inputs whose values are managed by React state, making React the single source of truth.

---

---

# 📌 2️⃣ useRef (Uncontrolled Components)

### 🔹 Definition

An uncontrolled component stores form data inside the DOM instead of React state.

`useRef` is used to directly access the DOM element.

---

### 🔹 Basic Example

```jsx
import React, { useRef } from "react";

function App() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });

    // Reset manually
    nameRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={emailRef} placeholder="Email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
```

---

### 🔹 How It Works

- Input value is controlled by the browser
- React does NOT manage the value
- We manually read the value using `ref.current.value`
- Updating ref does NOT cause re-render

---

### 🔹 Advantages

- No re-render on typing
- Better performance for very large forms
- Direct DOM access
- Useful for animations (GSAP)
- Useful for focus management

---

### 🔹 Disadvantages

- Harder to implement live validation
- Not reactive
- Less predictable compared to controlled forms

---

### 🔹 Interview One-Liner

> useRef creates uncontrolled inputs where the DOM manages the value, and React reads it when needed without triggering re-renders.

---

---

# 📌 Controlled vs Uncontrolled Comparison

| Feature              | Controlled         | useRef                           |
| -------------------- | ------------------ | -------------------------------- |
| Source of truth      | React state        | DOM                              |
| Re-renders on typing | Yes                | No                               |
| Easy validation      | Yes                | Harder                           |
| Live UI updates      | Yes                | No                               |
| Best for             | Small/medium forms | Simple forms / performance cases |

---

---

# 📌 When To Use What?

### ✅ Use Controlled Components When:

- You need validation
- You need dynamic UI updates
- You need conditional rendering
- You need predictable form logic

### ✅ Use useRef When:

- You only need value on submit
- You want to avoid re-renders
- You’re working with animations
- You need direct DOM manipulation

---

# 🎯 Final Interview Summary

**Q: What is a controlled component?**
A: An input whose value is controlled by React state using `value` and `onChange`.

**Q: What is useRef used for in forms?**
A: It allows access to DOM values in uncontrolled inputs without triggering re-renders.

Perfect 🔥
Here is your **detailed, clean, interview-ready README.md notes for React Hook Form** — structured so you can directly copy-paste into GitHub.

---
