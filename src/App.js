import logo from "./logo.svg";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";
import GridCard from "./components/GridCard/GridCard";

function App() {
  return (
    <div className="App">
      <Spinner animation="grow" variant="danger" />
      <button> HTML </button>
      <Button variant="danger">ReactBootstrap</Button>
      <GridCard></GridCard>
    </div>
  );
}

export default App;
