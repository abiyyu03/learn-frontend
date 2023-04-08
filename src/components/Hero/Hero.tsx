import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.hero__left}>
                    <h3 className={styles.hero__title}>Sapeiderman</h3>
                    <p className={styles.hero__genre}>Action, Horror, Drama</p>
                    <p className={styles.hero__description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit, maxime eos praesentium amet fugiat! Fugit, nemo.</p>
                    <button className={styles.hero__button}>Watch</button>
                </div>
                <div className={styles.hero__right}>
                    <img src="https://picsum.photos/536/354" alt="" className={styles.hero__image} />
                </div>
            </div>
        </div>
    );
}

export default Hero;