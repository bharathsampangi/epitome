import styles from "./styles/Amenities.module.css";

export default function Amenities() {
    return (
        <section className={styles.container}>
            <div className={styles.element}>
                <h3 className={styles.header}>Top-tier Amenities</h3>
                <div className={styles.amenitiesContainer}>
                    <ul className={styles.list}>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/club.svg"
                            />
                            Club House
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/children.svg"
                            />Kids Play Area</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/pool.svg"
                            />
                            Swimming Pool
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/gym.svg"
                            />
                            Gym
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/park.svg"
                            />
                            Open Space
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/power.svg"
                            />Power Backup</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/parking.svg"
                            />Car Parking</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/security.svg"
                            />
                            3 Tier Security
                        </li>
                    </ul>
                    <ul className={styles.list}>
                    <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/nature.svg"
                            />Vastu Compliant</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/hall.svg"
                            />Multipurpose Hall</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/cctv.svg"
                            />Video Security</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/gas.svg"
                            />Piped Gas</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/lift.svg"
                            />Lift</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/security.svg"
                            />24X7 Security</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/running.svg"
                            />Jogging Track</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/staff.svg"
                            />Maintenance Staff</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
