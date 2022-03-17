import { MoviesGrid } from "../components/MoviesGrid";
import styles from "./MainPage.module.css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

export function MoviesPlaying() {
    useDocumentTitle("Agudelo Films - Most Viewed");

    return (
        <div>
             <Header/>
        <div className={styles.contenedor}>
           
                <div className={styles.containerSearch2}>
                    <MoviesGrid link="/movie/now_playing" alto="300px" ancho="210px"/>
                </div>
            
        </div>
        <Footer/>
        </div>
    )
}

