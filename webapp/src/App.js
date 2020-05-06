import React from "react";
import "./App.css";

import Temp from "./components/Temperature/Temperature.js";

function App() {
  // placeholder to be replaced by bytestream values
  // these values will be updated every second?
  // we can also convert F to C on our frontend instead of taking 2 values from the bytestream
  let degrees = 69.1;
  let scale = "F";

  return (
    <div className="App">
      <Temp degrees={degrees} scale={scale} />
    </div>
  );
}

export default App;
