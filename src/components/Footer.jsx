import styles from "./Footer.module.css";

export function Footer() {
    return ( 
        
    <div>
        <div className={styles.footer}>
        <div className={`${styles.contenedorRedes} ${styles.col}`}>
           <h1 className={styles.titulo}>Siguenos</h1>
               <div className={styles.redes}>
               <a className={styles.icono} href={"https://www.facebook.com/profile.php?id=100009465005730"} target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook.png" width={35} /></a>
        <a className={styles.icono} href={"https://www.instagram.com/andres_agudelo_e/"} target="_blank"><img src="https://img.icons8.com/fluency/48/000000/instagram-new.png" width={35} /></a>
        <a className={styles.icono} href={"https://github.com/andresAgudelo0101"} target="_blank"><img src="https://img.icons8.com/fluency/48/000000/github.png" width={35} /></a>
               </div>
       </div>

       <div className={`${styles.contenedorContacto} ${styles.col}`}>
           <h1 className={styles.titulo}>Contactanos</h1>
               <div className={styles.contacto}>
                   <div>
                       <p><b className={styles.parrafo}>Tel:</b> 5411240</p>
                       <p><b className={styles.parrafo}>Email:</b> contáctame@example.com</p>
          
                   </div>
               </div>
       </div>
    </div>

       <div className={styles.footerinfo2}>
         
                <div>© 2021 Copyright: Andres Agudelo</div>
           
        </div>

   </div>
    );
}
