
import "./App.css";

import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dateTime, setDateTime] = useState("");
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = import.meta.env.VITE_API_URL;
    console.log(url);
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application.json" },
      body: JSON.stringify({ name, description, dateTime }),
    })
      .then((response) => {response.json()
      .then((json) => console.log(json));
      });
  }

  return (
    <main>
      <h1>$400.00</h1>
      <form onSubmit={addNewTransaction}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 new Sumsung TV"}
          />
          <input
            type="datetime-local"
            value={dateTime}
            onChange={(ev) => setDateTime(ev.target.value)}
          />
        </div>
        <div className="description">
          <input
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            type="text"
            placeholder="description"
          />
        </div>
        <button type="submit">Add transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New sumsung TV</div>
            <div className="description"> it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="description"> it was time for GIG website</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="description"> it was time for new Phone</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2022-12-18 15:45</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
