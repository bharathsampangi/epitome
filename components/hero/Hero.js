import styles from "./styles/Hero.module.css";
import Link from "next/link";

export default function Hero({openModal}) {
    return (
        <section>
            <div className={styles.landingMain}>
                <div className={styles.banner}>
                    <h1 className={styles.header}>Sumadhura Epitome</h1>
                </div>
            </div>
        </section>
    );
}
