import './App.css';
import "./examples/composition/composition.css";
import "./examples/checkbox/Checkbox.css";

import Checkbox from "./examples/checkbox/Checkbox";
import Example from "./examples/hooks/Hooks";

function App() {
    return (
        <div className="App">
            <Checkbox/>
            {/*<Reservation />*/}
            <Example/>
        </div>
    );
}

export default App;

