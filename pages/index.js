import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Carlos De La Roca | ILP</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main className={styles.main}>
                <img
                    src='/csumb-logo-blue.svg'
                    alt='CSUMB Logo'
                    className={styles.Logo}
                />
                <h1 className={styles.title}>Carlos De La Roca</h1>

                <p className={styles.description}>
                    ILP Portfolio Website Shell
                </p>

                <div className={styles.grid}>
                    <Link href='/courses'>
                        <a className={styles.card}>
                            <h3>Courses &rarr;</h3>
                            <p>
                                Find in-depth information about the courses I
                                have taken in my CS degree program
                            </p>
                        </a>
                    </Link>

                    <a
                        href='https://catalog.csumb.edu/preview_program.php?catoid=2&poid=421&returnto=107'
                        className={styles.card}
                    >
                        <h3>Program&rarr;</h3>
                        <p>
                            Learn about the Computer Science, BS Online Degree
                            Completion Program
                        </p>
                    </a>

                    <a
                        href='https://csumb-carlos.blogspot.com/'
                        className={styles.card}
                    >
                        <h3>CS Blog &rarr;</h3>
                        <p>
                            Join me and read about my journey through the CS
                            Degree program
                        </p>
                    </a>

                    <a href='https://carlosdlr.me' className={styles.card}>
                        <h3>Portfolio &rarr;</h3>
                        <p>
                            Visit my Online Portfolio and check out my personal
                            projects{" "}
                            <span className={styles.code}>
                                site a work in progress
                            </span>
                        </p>
                    </a>
                </div>
            </main>
        </div>
    );
}
