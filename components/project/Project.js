import styles from "./styles/Project.module.css";

export default function Project({openModal}) {
    return (
        <section className={styles.container} id="overview">
            <div className={styles.element}>
                <h3 className={styles.header}>Project Overview</h3>
                <div className={styles.listContainer}>
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
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>
                                No. of Towers:{" "}
                            </span>
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>Structure: </span>
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>No. of Units: </span>
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>
                                Unit Variants:{" "}
                            </span>
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
                            <span className={styles.title}>
                                Possession Date:{" "}
                            </span>
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>RERA No.: </span>
                            <span>Awaiting approval</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
