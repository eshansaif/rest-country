import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";
import Countries from "./components/Countries";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-10">
      {/* <Student name="Eshan" cgpa="4.50" />
      <Student name="Shanjeed" cgpa="4.20" />
      <Student name="Saif" cgpa="3.52" />
      <Student name="Shabiha Shabnam" cgpa={5.0} /> */}
      {/* <Counter /> */}
      <Countries />
    </div>
  );
}

export default App;

function Student({ name, cgpa }) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>CGPA:{cgpa}</h2>
    </div>
  );
}
