# 📘 React Props & State – Interview Preparation Notes


## 🧠 1️⃣ State in React

### 🔹 What is State?

State is a built-in React object that stores dynamic data in a component.

When state changes:

- React re-renders the component
- UI updates automatically

```js
const [count, setCount] = useState(0);
```

---

### 🔹 What Happens When State Updates?

When `setState()` runs:

1. React schedules update
2. Component re-renders
3. JSX runs again
4. Virtual DOM compares
5. UI updates

---

## 🧠 2️⃣ Functional State Updates (Very Important)

### 🔹 What Is It?

Instead of using state directly:

```js
setCount(count + 1);
```

Use:

```js
setCount((prev) => prev + 1);
```

---

### 🔹 Why Use Functional Update?

- State updates are asynchronous
- Prevents stale state bugs
- Always gives latest state

---

### 🔹 Example: Updating Array

```js
setCards((prev) =>
  prev.map((item, index) =>
    index === clickedIndex ? { ...item, inCart: !item.inCart } : item,
  ),
);
```

---

## 🧠 3️⃣ Why We Must Return Inside setState

### ❌ Wrong

```js
setCards(prev => {
  prev.map(...)
});
```

This returns `undefined`.

State becomes `undefined`.

---

### ✅ Correct (Implicit Return)

```js
setCards(prev =>
  prev.map(...)
);
```

---

### ✅ Correct (Explicit Return)

```js
setCards(prev => {
  return prev.map(...);
});
```

---

## 🧠 4️⃣ Immutability in React

React state must NOT be mutated directly.

### ❌ Wrong

```js
prev[index].inCart = true;
return prev;
```

Problem:

- Same reference
- React may not detect change

---

### ✅ Correct

```js
{ ...item, inCart: !item.inCart }
```

This:

- Creates new object
- Creates new array
- Triggers re-render

---

## 🧠 5️⃣ Props in React

Props allow data to flow:

Parent → Child

```js
<Child data={item} toggle={handleToggle} />
```

Child receives:

```js
const Child = ({ data, toggle }) => {};
```

---

### 🔹 Props Are Read-Only

Child cannot modify parent state directly.

Instead:

- Parent passes function
- Child calls function
- Parent updates state

This pattern is called:

👉 Lifting State Up

---

## 🧠 6️⃣ Complete Data Flow

1. Parent holds state
2. Parent passes state + function
3. Child triggers function
4. Parent updates state
5. React re-renders
6. UI updates

---

## 🧠 7️⃣ Common Interview Questions

### ❓ Why use functional updates?

Because state updates are asynchronous and functional form ensures latest state is used.

---

### ❓ Why can't we mutate state directly?

React relies on reference comparison. If reference doesn’t change, React may not re-render.

---

### ❓ Why does React re-render when state changes?

Because React detects new reference and re-executes component function.

---

### ❓ What happens if we forget to return inside setState?

State becomes `undefined` and component crashes.

---

## 🧠 8️⃣ Key Concepts to Remember

- State is immutable
- Props are read-only
- Functional updates prevent stale state
- React re-renders on state change
- Always return new array/object

---

## 🚀 Mastery Checklist

✔ Can update item inside array
✔ Can toggle boolean inside object
✔ Understand implicit vs explicit return
✔ Understand parent-child data flow
✔ Can explain re-render cycle
