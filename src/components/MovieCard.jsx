import { Link } from "react-router-dom";
import styles  from "./MovieCard.module.css";

export function MovieCard(props){
    const imgurl="https://image.tmdb.org/t/p/w300" + props.movie.poster_path;
    const score=props.movie.vote_average;
   
    var color="";
    if(score<7.3){
        
         color=<div><h5 className={styles.scoreColorRed}>{score}</h5> </div>;
        
    }else{
        color=<div><h5 className={styles.scoreColorGreen}>{score}</h5> </div>;
    }
    

    return( 
    <li className={styles.movieCard}>
        <Link to={"/movies/"+props.movie.id}>
        <img  width={props.ancho} height={props.alto} src={imgurl} alt={props.movie} className={styles.movieImage}/>
        <div className={styles.contenedorTitulo}><h4 className={styles.titulo}>{props.titulo}{props.id}</h4></div>
        <div className={styles.contenedorYear}><h4 className={styles.tituloYear}>{props.year}</h4></div>
        <div className={styles.contenedorScore}>{color}</div>
        
        </Link>
    </li>
    );
}