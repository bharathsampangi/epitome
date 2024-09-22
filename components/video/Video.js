import styles from "./styles/Video.module.css";

const Video = () => {
    return (
        <section className={styles.container}>
            <video className={styles.video} controls autoPlay muted>
                <source src="/videos/epitome.mp4" type="video/mp4" media="(min-width: 768px)"/>
                Your browser does not support HTML video.
            </video>
        </section>
    );
};

export default Video;