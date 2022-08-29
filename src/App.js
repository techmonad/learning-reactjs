import './App.css';
import "./examples/composition/composition.css";
import "./examples/checkbox/Checkbox.css";

import Reservation from "./examples/Forms/Reservation";
import WelcomeDialog from "./examples/composition/composition";
import Table from "./examples/Table";
import Example2 from "./examples/hooks/Hooks";
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


/*
//ListsAndKeys

import NumberList from "./examples/ListsAndKeys/NumberList";

const numbers = [1, 2, 3, 4, 5];

function App() {
    return (
        <div className="App">
            <NumberList numbers={numbers}/>
        </div>
    );
}
 */

/*
//Conditional Rendering
import LoginControl from "./examples/conditionalrendering/LoginControl";


function App() {
    return (
        <div className="App">
            <LoginControl/>
        </div>
    );
}

*/


/*
Toggle App
import Toggle from "./examples/event/Toogle";


function App() {
    return (
        <div className="App">
            <Toggle/>
        </div>
    );
}*/


/*
//state APP
import  Clock from  "./examples/state/Clock"
function App() {
  return (
    <div className="App">
        <Clock />
    </div>
  );
}

 */

/*
// welcome app

 import Welcome from "./examples/WelcomeC";
//import Welcome from "./examples/WelcomeF";
function App() {
    return (
        <div className="App">
            <Welcome name="Bob" />
        </div>
    );
}
*/
