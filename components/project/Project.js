import styles from "./styles/Project.module.css"

export default function Project() {

    return (
        <section>
            <h3 className={styles.header}>Project Overview</h3>
            <ul className={styles.list}>
                <li>
                    <span className={styles.title}>Project: </span>
                    <span>Luxury Apartments Township</span>
                </li>
                <li>
                    <span className={styles.title}>Location: </span>
                    <span>Rachenahalli, North Bangalore</span>
                </li>
                <li>
                    <span className={styles.title}>Area: </span>
                    <span>Upon Request</span>
                </li>
                <li>
                    <span className={styles.title}>No. of Towers: </span>
                    <span>Upon Request</span>
                </li>
                <li>
                    <span className={styles.title}>Structure: </span>
                    <span>Upon Request</span>
                </li>
                <li>
                    <span className={styles.title}>No. of Units: </span>
                    <span>Upon Request</span>
                </li>
                <li>
                    <span className={styles.title}>Unit Variants: </span>
                    <span>2, 3 & 4 BHK</span>
                </li>
                <li>
                    <span className={styles.title}>Size Range: </span>
                    <span>1280 - 2100 Sq.Ft</span>
                </li>
                <li>
                    <span className={styles.title}>Price Range: </span>
                    <span>Starts from ₹1.27Cr* Onwards</span>
                </li>
                <li>
                    <span className={styles.title}>Possession Date: </span>
                    <span>NA</span>
                </li>
                <li>
                    <span className={styles.title}>RERA No.: </span>
                    <span>Awaiting approval</span>
                </li>
            </ul>
        </section>
    )
}