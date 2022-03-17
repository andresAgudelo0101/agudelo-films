import { MoviesGrid } from "../MoviesGrid";
import {Header} from "../Header";
import {Footer} from "../Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

export function Comedia() {
    useDocumentTitle("Agudelo Films - Comedy");
    return (
        <div>
            <Header/>
                <MoviesGrid link="/movie/10663/recommendations" alto="240px" ancho="180px"/>
            <Footer/>    
        </div>
    )
}
