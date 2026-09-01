import "./App.css";
import HandleTimer from "./components/HandleTimer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1>React-useRef-TimerApp</h1>
        <HandleTimer />
      </div>
    </>
  );
}

export default App;
