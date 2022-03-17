import { Link } from "react-router-dom";
import styles  from "./MovieCard2.module.css";

export function MovieCard2(props){
    const imgurl="https://image.tmdb.org/t/p/w300" + props.movie.poster_path;
    
   
   
    return( 
       
        <div  className={styles.contenedorCard}>
          <Link to={"/movies/"+props.movie.id}>
             
              <div className={styles.contedor2}>
            <div className={styles.contenedorImagen}>
                <img src={imgurl} alt={props.movie} className={styles.movieImage}/>
            </div>  
            
            <div className={styles.contenedorTexto}>
                
                <h4 className={styles.titulo}>{props.titulo}</h4>
                <h6 className={styles.resumen}>{props.resumen}</h6> 
            </div>
            </div>
           
                
                 
 </Link>
    </div>
    );
}