import styles from "./styles/About.module.css";

export default function About() {
    return (
        <section className={styles.location} id="about">
            <div className={styles.aboutContainer}>
                <img
                    src="/images/epitome-home-mobile.webp"
                    id="eptiome-home"
                    alt="Sumadhura Epitome"
                />
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader2}>
                        The Essence of Exclusivity
                    </div>
                    <p>
                        Welcome to a world of calmness which blends with the
                        unique Mediterranean theme. It’s going to be a new
                        discovery of personalized, relaxed ecosphere that’s
                        plentiful with ultra- modern amenities. An ample
                        inclusion of natural light, breeze and cozy corners for
                        we value your intimate moments! So much said; if you ask
                        us to define our latest beloved project in a word, we
                        would, pronounce it as “Exclusivity” with a crucial
                        presence around everything that’s worth your
                        attention-Hence, the name ‘Epitome’.
                    </p>
                </div>
            </div>
        </section>
    );
}
