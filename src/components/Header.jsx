import { NavbarBS } from "../Navbar/NavbarBS";
import styles from "./Header.module.css";
export function Header() {
    return (
        <div className={styles.contenedor}>
      
         <div className={styles.menu}>
         <NavbarBS/>
       </div>
   </div>
    )
}
