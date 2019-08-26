import React from "react";
import ReactDOM from 'react-dom'
import Entry from "./Components/Entry/Enrty";

import "./App.css";
import Bath from "./Components/Bath/Bath";
import Bedroom from "./Components/Bedroom/Bedroom";
import Kitchen from "./Components/Kitchen/Kitchen";
import LivingRoom from "./Components/LivingRoom/LivingRoom";

function App() {
  return (
    <div className="App">
      <p>This is Gods House</p>
      <Entry human="Don" />
      <Bath />
      <Bedroom />
      <Kitchen />
      <LivingRoom />
    </div>
  );
}

export default App;
