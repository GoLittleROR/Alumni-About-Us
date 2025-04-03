import { useState } from "react";
import "./App.css";
import AlumniRepresentativeRegistration from "./components/AlumniRepresentative";
import AlumniRegistration from "./components/AlumniRegistration";
import StudentRegistration from "./components/StudentRegistration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AlumniRepresentativeRegistration />
      {/* <AlumniRegistration /> */}
      {/* <StudentRegistration /> */}
    </>
  );
}

export default App;
