import Link from "next/link";
import styles from "./styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerOptions}>
                    <div className={styles.footerOption1}>
                        <div className={styles.head}>
                            <a href="tel:7625039382">📞+91 76250 39382</a>
                        </div>
                        <div className={styles.text}>
                            The information provided on this website is intended for
                            informational purposes and is subject to potential
                            changes. It is solely for informational purposes and
                            should not be regarded as an official website. This
                            website is owned by an official channel partner of
                            Sumadhura Group. The information presented, including
                            project details, is gathered from various sources to the
                            best of our ability. It should not be interpreted as
                            advertising, invitations, offers for sale, legal advice,
                            solicitations, or marketing. Prior to making any
                            decisions based on the content displayed, it is
                            recommended that you visit the relevant RERA website.
                            Your use or access of the website implies your agreement
                            to this disclaimer without any reservations or
                            limitations.
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.footerEnd}>
                    <div></div>
                    <div>Terms & Conditions</div>
                </div>
            </div>
        </footer>
    );
}
