import styles from "./styles/FloatingHeader.module.css"

export default function FloatingHeader() {
    return (
        <div className={styles.floating}>
            <button className={styles.button}>
                <a href="tel:7625039382" className={styles.link}><img className={styles.icon} src="/images/phone.svg" alt="Let's talk" /> Call Us</a>
            </button>
            <button className={styles.buttonWhatsapp}>
                <a href="https://wa.link/0m3f8q" className={styles.link}><img className={styles.icon} src="/images/whatsapp.svg" alt="Let's Chat" /> Chat With Us</a>
            </button>
        </div>
    )
}