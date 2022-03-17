
import Carousel from 'react-bootstrap/Carousel'
import { useState,useEffect } from 'react';
import styles from "./Slider.module.css";
import { Get } from '../until/httpClient';
import { MovieCard2 } from '../components/MovieCard2';

 

export function Slider2({idm,titulom}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [movies, setMovies]=useState([]);

    useEffect(() =>  {
       
        const searchUrl = "/movie/"+idm+"/recommendations";
        
        
        Get(searchUrl).then((datos)=> {
        setMovies(datos.results);
        
          });
          
        }, []);


  return (
    <div className={styles.container}>
   <Carousel activeIndex={index} onSelect={handleSelect} > 
   {movies.map((val) => (
     
    <Carousel.Item key={val.id}>
        
          <MovieCard2 key={val.id}  movie={val}  year={val.release_date} titulo2={titulom} titulo={val.title} resumen={val.overview}  />
          
    </Carousel.Item>
    
      )
      )} 
    </Carousel>

   
    </div>
  );
}


