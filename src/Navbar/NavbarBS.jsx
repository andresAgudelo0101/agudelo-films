import Navbar from 'react-bootstrap/Navbar'
import { Container,Nav,NavDropdown} from 'react-bootstrap';
import {Link as Enlace} from 'react-router-dom';
import styles from "./NavbarBS.module.css";
import { Titulo } from '../components/Titulo';
import { NavLink } from 'react-router-dom';
import Modal from "react-modal";
import { useState } from "react";


//Modal.setAppElement('#yourAppElement');
export function NavbarBS(props) {

const [modalIsOpen, setIsOpen] = useState(false);
const [username, setUsername] = useState("");
const [userTag, setuserTag] = useState("");
const [password, setspassword] = useState("");
const [boton, setboton] = useState("");
const [display,setdisplay]=useState(true);
const customStyles = {

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#1443'
    },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    backgroundColor:"#fff",
    width:"30%"
  },
};
let item = { username, password };

async function Login(e) {
  e.preventDefault();

  let result;

  if (item.username && item.password !== "") {
    result = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();

    if (result.token) {
      setuserTag("Juan2020")
      setdisplay(false);
      
      closeModal();
      setboton("");
    } else {
      console.log("error");
      setboton("Error usuario o contraseña incorrecta");
      openModal();
    }
  } else {
    setboton("Hay campos vacios");
  }
  console.log(result);
}

function openModal() {
  setIsOpen(true);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  setIsOpen(false);
  document.body.style.overflow = 'unset';
}

function closeSession(){
  setdisplay(true);
}

  
  return (
    <Navbar  expand="lg" variant="dark" >
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <form >
          <div className={styles.containerModal}>
          <div className={styles.headerModal}>
          <div  className={styles.containerTitulo}>
            <Titulo titulo="Inicia Sesion"/>
          </div>
            <div className={styles.containerX}>
            <button onClick={closeModal} className={styles.btnClose}>x</button>
            </div>
          </div>

        <input type="text" placeholder="Email" className={styles.input} onChange={(e)=>{setUsername(e.target.value)}}/>
        <input type="password" placeholder="Contraseña" className={styles.input} onChange={(e)=>{setspassword(e.target.value)}}/>
        <button className={styles.btnLogin} onClick={(e)=>{Login(e)}}>Iniciar</button>
        <p className={styles.msgErr}>{boton}</p>
        </div>
        </form>


       
      </Modal>
    <Container >
      <Navbar.Brand><Enlace to="/Cuevana3" className={styles.link}><Titulo titulo="Agudelo Filmes"/></Enlace></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
      <Nav className="me-auto">   
         
          <Nav.Link className="option"><Enlace to="/" className={styles.link}> Inicio </Enlace></Nav.Link>
          
          <NavDropdown 
          title="Categorias" 
          id="nav-dropdown-dark-example"
          
          >
              <NavDropdown.Item><NavLink to="/Comedia" className={styles.li}>Comedia</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/Accion" className={styles.li}>Accion</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/Terror" className={styles.li}>Terror</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/Aventura" className={styles.li}>Aventura</NavLink></NavDropdown.Item>
            </NavDropdown>
          <Nav.Link className="option"><Enlace to="/Incoming" className={styles.link}>Estrenos</Enlace></Nav.Link>
          <Nav.Link className="option"><Enlace to="/RatedFilms" className={styles.link}>Ranking</Enlace></Nav.Link>
          <Nav.Link className="option"><Enlace to="/NowPlaying" className={styles.link}>Mas Vistas</Enlace></Nav.Link>
          <Nav.Link className="option"  onClick={()=>{openModal()}}  style={{ display: display ? "block" : "none" }}>Iniciar Sesion</Nav.Link>
          <NavDropdown 
          title={userTag} 
          id="nav-dropdown-dark-example"
          style={{ display: display ? "none" : "block" }}
          >
            <NavDropdown.Item onClick={()=>{closeSession()}} >Cerrar Sesion</NavDropdown.Item>
          </NavDropdown>
     </Nav>
    </Navbar.Collapse>
</Container>

</Navbar>

    );
}
