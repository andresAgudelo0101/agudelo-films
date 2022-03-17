import { MoviesGrid } from "../components/MoviesGrid";
import styles from "./MainPage.module.css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

export function MoviesIncoming() {
    useDocumentTitle("Agudelo Films - Incoming");
    return (
    <div>
        <Header/>
        <div className={styles.contenedor}>
            
            <div className={styles.containerSearch2}>
                <MoviesGrid link="/movie/upcoming" release_date="release_date" 
                    alto="300px" ancho="210px"
                />
            </div>   
        </div>
        <Footer/>
    </div>    
    )
}


