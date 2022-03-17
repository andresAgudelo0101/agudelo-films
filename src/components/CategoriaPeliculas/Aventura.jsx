import { MoviesGrid } from "../MoviesGrid";
import {Header} from "../Header";
import {Footer} from "../Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

export function Aventura() {
    useDocumentTitle("Agudelo Films - Adventure");

    return (
        <div>
            <Header/>
                <MoviesGrid link="/movie/637649/recommendations" alto="240px" ancho="180px"/>
            <Footer/>
        </div>
    )
}
