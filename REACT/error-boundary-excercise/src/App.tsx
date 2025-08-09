import "./App.css";
import BuggyCounter from "./components/BuggyCounter";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div>
      <h1>Contador con posibilidad de error</h1>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
