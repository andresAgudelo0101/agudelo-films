import { Link } from "react-router-dom";
import estilos from "./Menu.module.css";

export function Menu(props) {
    return (
        <ul className={estilos.menu}>
            <div className={estilos.contenedorLi}>
                <Link to="/" className={estilos.li}>INICIO</Link>
                <Link to="/Incoming" className={estilos.li}>ESTRENOS</Link>
                <Link to="/RatedFilms" className={estilos.li}>RANKING</Link>
                <Link to="/NowPlaying" className={estilos.li}>MAS VISTAS</Link>
            </div>
        </ul>
    )
}

