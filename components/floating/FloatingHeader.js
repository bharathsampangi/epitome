import styles from "./styles/FloatingHeader.module.css"

export default function FloatingHeader() {
    return (
        <div className={styles.floating}>
            <button className={styles.button}>
                <a href="tel:7625039382">📞 Call Us</a>
            </button>
            <button className={styles.buttonWhatsapp}>
                <a href="https://wa.link/pv77hu">💬 Whatsapp</a>
            </button>
        </div>
    )
}