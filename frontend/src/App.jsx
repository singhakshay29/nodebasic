/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [days, setdays] = useState([]);
  useEffect(() => {}, []);
  return (
    <div>
      {days.length}
      {days.map((item, index) => {
        <div key={index}>
          <h2>{item.name}</h2>;<p>{item.title}</p>;
        </div>;
      })}
    </div>
  );
}

export default App;
