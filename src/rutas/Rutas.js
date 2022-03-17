import { BrowserRouter, Route, Routes } from "react-router-dom";


/*IMPORTACION PAGINAS CUEVANA3*/

import { MoviesIncoming } from "../pages/MoviesIncoming";
import { MoviesRated } from "../pages/MoviesRated";
import { MoviesPlaying } from "../pages/MoviesPlaying";
import { MovieDetails } from "../pages/MovieDetails";
import { MainPage2 } from "../pages/MainPage2";
import { Comedia } from "../components/CategoriaPeliculas/Comedia";
import { Accion } from "../components/CategoriaPeliculas/Accion";
import { Terror } from "../components/CategoriaPeliculas/Terror";
import { Aventura } from "../components/CategoriaPeliculas/Aventura";

/*TERMINA CUEVANA3*/


export function Rutas() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        

          {/* RUTA PAGINAS PROYECTO CUEVANA3*/}
          <Route exact path="/Incoming" element={<MoviesIncoming />} />
          <Route exact path="/RatedFilms" element={<MoviesRated />} />
          <Route exact path="/NowPlaying" element={<MoviesPlaying />} />
          <Route exact path="/Comedia" element={<Comedia />} />
          <Route exact path="/Accion" element={<Accion />} />
          <Route exact path="/Terror" element={<Terror />} />
          <Route exact path="/Aventura" element={<Aventura />} />
          <Route exact path="/movies/:movieId" element={<MovieDetails />} />
          <Route exact path="/Cuevana3" element={<MainPage2 />} />
         

          <Route exact path="/" element={<MainPage2 />} />
          <Route path="*" element={<h1>Error Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
