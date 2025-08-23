import styles from "./Hero.module.css"


function Hero() {
    return (
        <section className={styles.hero}>
            <h2>Transform Your Life Today</h2>
            <p>Work out with top trainers and get the results you deserve.</p>
            <button>Start Free Trial</button>
        </section>

    );
}

export default Hero;