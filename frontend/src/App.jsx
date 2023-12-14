/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [days, setdays] = useState([]);
  useEffect(() => {
    //http://localhost:4000/api/day
    axios
      .get("/api/day")
      .then((response) => {
        console.log(response);
        setdays(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      Hello
      {days.length}
      {days.map((item, index) => (
        <div key={index}>
          <h2>{item.name}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
