import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Carlos De La Roca | ILP</title>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Carlos De La Roca ILP Portfolio Website for California State University - Monterey Bay'></meta>
            </Head>

            <main className={styles.main}>
                <img
                    src='/csumb-logo-blue.svg'
                    alt='CSUMB Logo'
                    className={styles.Logo}
                />
                <h1 className={styles.title}>Carlos De La Roca</h1>

                <p className={styles.description}>
                    Welcome to my ILP Portfolio Website!
                </p>
                <p className={styles.description}>
                    I transferred from the beautiful school of Santa Monica
                    College. I am a web developer and I am excited to continue
                    my Computer Science Degree education.
                </p>
                <p className={styles.description}>
                    The CS Degree Completion program, provided by Cal State
                    Monterey Bay, is a fully online program that provides a
                    balanced education in both Computer Science and Software
                    Engineering. By the time I complete this degree, I will be a
                    professional engineer with multiple completed projects and a
                    robust education in Computer Science.
                </p>

                <div className={styles.grid}>
                    <Link href='/courses'>
                        <a className={styles.card}>
                            <h2>Courses &rarr;</h2>
                            <p>
                                Find in-depth information about the courses I
                                have taken in my CS degree program
                            </p>
                        </a>
                    </Link>

                    <a
                        href='https://catalog.csumb.edu/preview_program.php?catoid=2&poid=421&returnto=107'
                        className={styles.card}>
                        <h2>Program&rarr;</h2>
                        <p>
                            Learn about the Computer Science, BS Online Degree
                            Completion Program
                        </p>
                    </a>

                    <a
                        href='https://csumb-carlos.blogspot.com/'
                        className={styles.card}>
                        <h2>CS Blog &rarr;</h2>
                        <p>
                            Join me and read about my journey through the CS
                            Degree program
                        </p>
                    </a>

                    <a href='' className={styles.card}>
                        <h2>Portfolio &rarr;</h2>
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
