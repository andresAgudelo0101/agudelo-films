import { FaSpinner } from 'react-icons/fa';
import styles from "./Spinner.module.css";
export function Spinner() {
    return (
        <div className={`${styles.spinner} ${styles.spinning} `}>
           <FaSpinner size={60}/>
        </div>
    )
}
