import Link from "next/link";
import styles from "./styles/Location.module.css";

export default function Location() {
    return (
        <section className={styles.location} id="location">
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader}>location</div>
                    <div className={styles.locationHeader2}>
                        At the heart of the Thanisandra!
                    </div>
                    <p>
                        Located just behind Manyata Tech Park, and less than 10
                        mins away from most shopping, healthcare, education and
                        hospitality centres, it would be hard-pressed to find a
                        better location in Rachenahalli, Thanisandra
                    </p>
                    <Link
                        className={styles.link}
                        href="https://maps.app.goo.gl/QeUevEjAgiQ8UfD48"
                    >
                        View on Google Maps
                    </Link>
                </div>
            </div>
            <div className={styles.locationMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5377566066454!2d77.62257497592496!3d13.065068612820436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19ed02ee6f3b%3A0x229315da4e925839!2sSumadhura%20Epitome!5e0!3m2!1sen!2sin!4v1717854967489!5m2!1sen!2sin"
                    width="350"
                    height="300"
                    title="Sumadhura Epitome, Rachenahalli, Thanisandra, North Bangalore"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationMobile}
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5377566066454!2d77.62257497592496!3d13.065068612820436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19ed02ee6f3b%3A0x229315da4e925839!2sSumadhura%20Epitome!5e0!3m2!1sen!2sin!4v1717854967489!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    title="Sumadhura Epitome, Rachenahalli, Thanisandra, North Bangalore"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationDesktop}
                ></iframe>
            </div>
        </section>
    );
}
