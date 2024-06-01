import styles from "./styles/Hero.module.css";
import Link from "next/link";

export default function Hero({openModal}) {
    return (
        <section>
            <div className={styles.landingMain}>
                <div className={styles.banner}>
                    <p className={styles.small}>Pre-Launching</p>
                    <h1 className={styles.header}>Sumadhura Epitome</h1>
                    <p>Premium 2, 3 & 4 BHK apartments</p>
                    <p>Rachenahalli, Thanisandra, North Bangalore</p>
                    <button className={styles.listButton} onClick={openModal} >
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
}
