import { MoviesGrid } from "../MoviesGrid";
import {Header} from "../Header";
import {Footer} from "../Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

export function Terror() {
    useDocumentTitle("Agudelo Films - Terror");

    return (
        <div>
        <Header/>
        <MoviesGrid link="/movie/82507/recommendations" alto="240px" ancho="180px"/>
        <Footer/>
        </div>
    );
}
