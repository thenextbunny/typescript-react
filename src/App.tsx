import Interference from "./contents/Interference";
import Props from "./contents/Props";
import Functions from "./contents/Functions";
import FunctionsExercise from "./contents/Functions.exercise";
import EventHandler from "./contents/EventHandler";
import UseState from "./contents/UseState";
import UseRef from "./contents/UseRef";
import UseReducer from "./contents/UseReducer";

function App() {
    return (
        <div>
            <UseReducer />
            <UseRef />
            <UseState />
            <Interference />
            <Props />
            <Functions />
            <FunctionsExercise />
            <EventHandler />
        </div>
    );
}

export default App;
