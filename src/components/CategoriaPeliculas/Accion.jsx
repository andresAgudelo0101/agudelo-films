import { MoviesGrid } from "../MoviesGrid";
import {Header} from "../Header";
import {Footer} from "../Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

export function Accion() {
    useDocumentTitle("Agudelo Films - Action");

    return (
        <div>
           <Header/>
             <MoviesGrid link="/movie/62835/recommendations" alto="240px" ancho="180px"/>
            <Footer/> 
        </div>
    )
}
