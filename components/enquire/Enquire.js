import styles from "./styles/Enquire.module.css"

export default function Enquire() {
    return (
        <section className={styles.enquire} id="enquire">
            <div className={styles.header}>Download Brochure</div>
            <form className={styles.form} action="https://api.web3forms.com/submit" method="POST">
                <input type="hidden" name="access_key" value="e0445da9-5959-4e89-88cf-0b1a0d2c5c54" />
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Name</label>
                        <input type="text" name="name" required/>
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <div className={styles.formElement}>
                        <label className={styles.label}>Phone Number</label>
                        <input type="number" name="phone_number" required />
                    </div>
                </div>
                <button type="submit" className={styles.button}>Download Now</button>
            </form>
        </section>
    )
}