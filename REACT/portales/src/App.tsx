import "./App.css";
import { useState } from "react";
import Modal from "./modals/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h1>Portales</h1>
      <button onClick={() => setShowModal(true)}>Abrir Modal</button>

      <Modal visible={showModal}>
        <h1>Hola desde el Portal</h1>
        <button className="center-button" onClick={() => setShowModal(false)}>
          Cerrar
        </button>
      </Modal>
    </>
  );
}

export default App;
