import './App.css';
import "./examples/composition/composition.css";
import "./examples/checkbox/Checkbox.css";

import Hello from "./examples/Hello";
import Clock from "./examples/Clock";
import EmployeeForm from "./examples/EmployeeForm";

function App() {
    return (
        <div className="App">
       {/*  <Hello name="Bob"/>*/}
     {/*       <Clock/>*/}
            <EmployeeForm/>
        </div>
    );
}

export default App;

