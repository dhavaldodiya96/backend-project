/* eslint-disable array-callback-return */
import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1>frontend developer</h1>
        <p>jokes: {jokes.length}</p>
        {jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <h3>{joke.content}</h3>
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
