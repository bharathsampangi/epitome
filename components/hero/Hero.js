import styles from "./styles/Hero.module.css";
import Link from "next/link";

export default function Hero({openModal}) {
    return (
        <section>
            <div className={styles.landingMain}>
                <div className={styles.banner}>
                    <button className={styles.listButton} onClick={openModal} >
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
}
