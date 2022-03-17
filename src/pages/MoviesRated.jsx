import { MoviesGrid } from "../components/MoviesGrid";
import styles from "./MainPage.module.css";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

export function MoviesRated() {
    useDocumentTitle("Agudelo Films - Top Movies");
    return (
    <div> 
        <div className={styles.contenedor}>
            <Header/>
            <div className={styles.containerSearch2}>
                <MoviesGrid link="/movie/top_rated" alto="300px" ancho="210px"/>
            </div>
        </div>
        <Footer/>
    </div>       
    );
}
