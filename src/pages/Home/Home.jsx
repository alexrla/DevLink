import { Link } from "react-router-dom";

import Logo from '../../components/Logo/Logo';

import styles from "./Home.module.css";

const Home = () => {
    return(
        <div className={styles.home_container}>
            <Logo />
            <span>Crie seus links 👇</span>

            <main className={styles.link_container}>
                <section className={styles.link}>
                    <a href="https://www.youtube.com/">
                        <p className={styles.link_title}>
                            Youtube 
                            <i className="bi bi-youtube"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://www.youtube.com/">
                        <p className={styles.link_title}>
                            Linkedin
                            <i className="bi bi-linkedin"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://www.facebook.com/">
                        <p className={styles.link_title}>
                            Facebook
                            <i className="bi bi-facebook"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://twitter.com/">
                        <p className={styles.link_title}>
                            Twitter
                            <i className="bi bi-twitter"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://www.instagram.com/">
                        <p className={styles.link_title}>
                            Instagram
                            <i className="bi bi-instagram"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://www.twitch.tv/">
                        <p className={styles.link_title}>
                            Twitch
                            <i className="bi bi-twitch"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://br.pinterest.com/">
                        <p className={styles.link_title}>
                            Pinterest
                            <i className="bi bi-pinterest"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://open.spotify.com/">
                        <p className={styles.link_title}>
                            Spotify
                            <i className="bi bi-spotify"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://telegram.org/">
                        <p className={styles.link_title}>
                            Telegram
                            <i className="bi bi-telegram"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://web.whatsapp.com/">
                        <p className={styles.link_title}>
                            Whatsapp
                            <i className="bi bi-whatsapp"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://discord.com/">
                        <p className={styles.link_title}>
                            Discord
                            <i className="bi bi-discord"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://github.com/">
                        <p className={styles.link_title}>
                            GitHub
                            <i className="bi bi-github"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://medium.com/">
                        <p className={styles.link_title}>
                            Medium
                            <i className="bi bi-medium"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://www.reddit.com/">
                        <p className={styles.link_title}>
                            Reddit
                            <i className="bi bi-reddit"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://stackoverflow.com/">
                        <p className={styles.link_title}>
                            Stack Overflow
                            <i className="bi bi-stack-overflow"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://slack.com/intl/pt-br">
                        <p className={styles.link_title}>
                            Slack
                            <i className="bi bi-slack"></i>
                        </p>
                    </a>
                </section>
                <section className={styles.link}>
                    <a href="https://store.steampowered.com/?l=portuguese">
                        <p className={styles.link_title}>
                            Steam
                            <i className="bi bi-steam"></i>
                        </p>
                    </a>
                </section>
            </main>
            <Link className={styles.create} to="/">Criar link</Link>
        </div>
    )
};

export default Home;