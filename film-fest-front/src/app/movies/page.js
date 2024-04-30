import Image from "next/image";
import styles from './movies.module.css';

export default function Movies(){
    return(
        <main>
            <h2 className={styles.test}>Salesianum Film Festival Presents:</h2>
            <Image 
                src="/images/cannes.jpeg"
                alt="Cannes Logo"
                width={100}
                height={80}
                priority
            />
        </main>
    );
}

