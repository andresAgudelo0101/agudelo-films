import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../../pruebaidata/src/componentes/FormLogin.module.css";


import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Modal from "react-modal";


export function Login() {
  const [username, setUsername] = useState("");
  const [password, setspassword] = useState("");
  const [token, setToken] = useState("");
  const [boton, setboton] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  let item = { username, password };
  let history = useHistory();

  function CambiarMensaje() {
    setboton("");
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  
  

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img src="https://img.icons8.com/external-bearicons-detailed-outline-bearicons/64/fa314a/external-warning-essential-collection-bearicons-detailed-outline-bearicons.png" />

        <p className={styles.msgErr2}>Error usuario o contraseña incorrectas</p>
        <button onClick={closeModal} className={styles.btnClose}>
          Cerrar
        </button>
      </Modal>

     
    </div>
  );
}
