import './App.css';

import Welcome from "./examples/WelcomeC";
//import Welcome from "./examples/WelcomeF";
import  Clock from  "./examples/state/Clock"


function App() {
  return (
    <div className="App">
        <Welcome name="Bob" />
        <Clock />
    </div>
  );
}

export default App;
