import styles from "./styles/FloatingHeader.module.css"

export default function FloatingHeader() {
    return (
        <div className={styles.floating}>
            <button className={styles.button}>
                <a href="tel:7625039382">📞 Call Us</a>
            </button>
            <button className={styles.buttonWhatsapp}>
                <a href="https://wa.link/pv77hu?text=I'm%20Interested%20in%20this%20Property.%20Let's%20Connect">💬 Whatsapp</a>
            </button>
        </div>
    )
}