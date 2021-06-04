import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/calender";

import { useRef, useState } from "react";

function App() {
  let [targetWeek, setTargetWeek] = useState(0);
  return (
    <div className="App">
      <h1>Calender</h1>
      <p>Click onto the box to add event to your calender</p>

      <Calendar></Calendar>
    </div>
  );
}

export default App;
