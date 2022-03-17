import styles from "./MovieDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Get } from "../until/httpClient";
import { Spinner } from "../components/Spinner";
import { Slider2 } from "../Slider/Slider2";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

export function MovieDetails(props){
  useDocumentTitle("Agudelo Films - Movie Detail");
    
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
      setIsLoading(true);

      Get("/movie/" + movieId).then((data) => {
        setMovie(data);
        setIsLoading(false);
       
      });
    }, [movieId]);
  
    if(isLoading){
      return <Spinner/>
    }


    if (!movie) {
      return null;
    }
    
    const imgurl="https://image.tmdb.org/t/p/w300" + movie.poster_path;
    const title=movie.title;
  
 
    
    const score=movie.vote_average;
   
    var color="";
    if(score<7.3){
        
         color=<div><p className={styles.scoreColorRed}>{score}</p> </div>;
        
    }else{
        color=<div><p className={styles.scoreColorGreen}>{score}</p> </div>;
    }
   
   

    return(
      <div>
      <Header/>
      <div className={styles.container}>
        

        <div className={styles.containerDetails}>
            <img src={imgurl} alt={title} className={`${styles.col} ${styles.movieImage}`}/>
            
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <div className={styles.contenedorT}>
                  <p className={styles.titulo}>Titulo:</p> 
                  <span className={styles.texto}>{movie.title}</span>
                </div>
                
                <div className={styles.contenedorT}>
                 <span className={styles.texto}>{color}{movie.video}</span>
                </div>

                <div className={styles.contenedorT}>
                  <p className={styles.titulo}>Descripcion:
                    <span className={styles.texto}>{movie.overview}</span>
                  </p>
                </div>

                <div className={styles.contenedorT}>
                  <p className={styles.titulo}>Genero:</p>
                  <p className={styles.texto}>{movie.genres.map(genre => genre.name).join(", ")}</p>
                </div>

                <div className={styles.contenedorT}>
                  <p className={styles.titulo}>Idiomas:</p>
                  <span className={styles.texto}>{movie.spoken_languages.map(len => len.name).join(", ")}</span>
                </div>
                
                <Link className={styles.btnRegresar} to="/Cuevana3">Regresar</Link>

              
            </div>
           
        </div>

        <div className={styles.contenedorRecomendados}>
         
            <h1 className={styles.tituloR}>Películas Relacionadas</h1>
          
            <Slider2 idm={movieId}/>
        </div>
</div>
      <Footer/>
</div>
    );
}

