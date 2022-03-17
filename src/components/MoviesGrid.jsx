
import { MovieCard } from "./MovieCard";

import styles from "./MovieGrid.module.css";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Get } from "../until/httpClient";
import { Spinner } from "./Spinner";
import { Search } from "./Search";
import { FaGenderless } from "react-icons/fa";


export function MoviesGrid(props){
    const [movies, setMovies]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const peli="/search/movie?query=";
    const [search, setsearch] = useState('');
    
    useEffect(() =>  {
       
        const searchUrl = props.link;
        
        
        Get(searchUrl).then((datos)=> {
        setMovies(datos.results);
        
          });
          
        }, [search]);

        
    
    return(
        <div>
        
        <ul className={styles.movieGrid}>
            {movies.map((val) => (
                <MovieCard key={val.id}  movie={val} titulo={val.title} year={val.release_date} ancho={props.ancho} alto={props.alto}/>
            )
            )} 
        </ul>
        </div>
    );
}