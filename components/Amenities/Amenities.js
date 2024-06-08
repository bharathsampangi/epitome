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
                                alt="Club House"
                            />
                            Club House
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/children.svg"
                                alt="Kids Play Area"
                            />Kids Play Area</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/pool.svg"
                                alt="Swimming Pool"
                            />
                            Swimming Pool
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/gym.svg"
                                alt="Gym"
                            />
                            Gym
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/park.svg"
                                alt="Open Space"
                            />
                            Open Space
                        </li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/power.svg"
                                alt="Power Backup"
                            />Power Backup</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/parking.svg"
                                alt="Car Parking"
                            />Car Parking</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/security.svg"
                                alt="3 Tier Security"
                            />
                            3 Tier Security
                        </li>
                    </ul>
                    <ul className={styles.list}>
                    <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/nature.svg"
                                alt="Vastu Compliant"
                            />Vastu Compliant</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/hall.svg"
                                alt="Multipurpose Hall"
                            />Multipurpose Hall</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/cctv.svg"
                                alt="Video Security"
                            />Video Security</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/gas.svg"
                                alt="Piped Gas"
                            />Piped Gas</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/lift.svg"
                                alt="Lift"
                            />Lift</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/security.svg"
                                alt="24X7 Security"
                            />24X7 Security</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/running.svg"
                                alt="Jogging Track"
                            />Jogging Track</li>
                        <li className={styles.iconBox}>
                            <img
                                className={styles.icon}
                                src="/images/staff.svg"
                                alt="Maintenance Staff"
                            />Maintenance Staff</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
