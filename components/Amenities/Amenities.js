import styles from "./styles/Amenities.module.css"

export default function Amenities() {
    return (
        <section className={styles.container}>
            <div className={styles.element}>
                <h3 className={styles.header}>Top-tier Amenities</h3>
                <div className={styles.amenitiesContainer}>
                    <ul className={styles.list}>
                        <li>Club House</li>
                        <li>Kids Play Area</li>
                        <li>Swimming Pool</li>
                        <li>Gym</li>
                        <li>Open Space</li>
                        <li>Power Backup</li>
                        <li>Car Parking</li>
                        <li>3 Tier Security</li>
                    </ul>
                    <ul className={styles.list}>
                        <li>Vastu Compliant</li>
                        <li>Multipurpose Hall</li>
                        <li>Video Security</li>
                        <li>Piped Gas</li>
                        <li>Lift</li>
                        <li>24X7 Security</li>
                        <li>Jogging Track</li>
                        <li>Maintenance Staff</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
