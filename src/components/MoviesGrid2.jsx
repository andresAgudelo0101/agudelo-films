
import { MovieCard2 } from "./MovieCard2";

import styles from "./MovieGrid2.module.css";
import { useEffect, useState } from "react";

import { Get } from "../until/httpClient";


import { FaGenderless } from "react-icons/fa";


export function MoviesGrid2(props){
    const [movies, setMovies]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() =>  {
       
        const searchUrl = props.link;
        Get(searchUrl).then((datos)=> {
        setMovies(datos.results);
        
          });
          
        }, []);

        
    
    return(
        <div>
        
        <ul className={styles.movieGrid}>
            {movies.map((val) => (
                <MovieCard2 key={val.id}  movie={val} titulo={val.title} year={val.release_date} resumen={val.overview}  />
                
            )
            )} 
          
        </ul>
        </div>
    );
}