import styles from "./Titulo.module.css";


export  function Titulo(props){
return(
    <div>
    
    <h1 className={styles.titulo}>{props.titulo}<img src="http://simpleicon.com/wp-content/uploads/roll-film-2.png" className={styles.loopLogo}/> </h1>
    
    </div>
);
}