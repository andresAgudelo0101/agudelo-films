import React from "react";
import { Search } from "../components/Search";
import styles from "./MainPage.module.css";
import {Slider2} from "../Slider/Slider2.js";
import { Recomendacion } from "../components/Recomendacion";
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import useDocumentTitle from "../components/useDocumentTitle";

export function MainPage2(){
  useDocumentTitle("Agudelo Films - Home");
    return (
      <div>
          <Header/>
      <div className={styles.contenedor}>
          
            <Slider2 idm="120" />
       
        <div className={styles.containerSearch}>
        <Search/>
        </div>
        <div className={styles.containerRecomend}>
          <h2 className={styles.titulo}>#Terror</h2>
        <Recomendacion/>
        </div>
       
      </div>  
      <Footer/>
      </div>
    );
}