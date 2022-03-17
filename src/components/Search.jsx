
import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
import { Get } from "../until/httpClient";
import styles from "./Search.module.css";


export function Search(props){
    const [movies, setMovies]=useState([]);
    const [search, setsearch] = useState('');
    
    useEffect(() =>  {
       
        const searchUrl = search
        ?"/search/movie?query="+ search
        : "/discover/movie"
      
        
        
        Get(searchUrl).then((datos)=> {
        setMovies(datos.results);
        
          });
          
        }, [search]);

        
    
    return(
        <div>
        <center>
        <input 
        className={styles.input2}
        type="text" 
        placeholder="Busca tus pelis favoritas"
        onChange={event => {setsearch(event.target.value)} }
        />
         </center>  
       
        <ul className={styles.movieGrid}>
            {movies.map((val) => (
                <MovieCard key={val.id}  movie={val} titulo={val.title} year={val.release_date}  /*id={val.id}*/
                alto="240px" ancho="180px"
                />
            )
            )} 
        </ul>
        </div>
    );
}