import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";
import CompD from "./components/CompD";
import { DataContextProvider } from "./contexts/dataContext";

function App() {
  return (
    <section className="container">
      <DataContextProvider>
        <CompA></CompA>
        <CompB></CompB>
        <CompC></CompC>
        <CompD></CompD>
      </DataContextProvider>
    </section>
  );
}

export default App;
