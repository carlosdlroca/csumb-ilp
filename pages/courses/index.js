import Head from "next/head";
import styles from "../../styles/Courses.module.css";

export default function Courses() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Carlos De La Roca | Courses</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
        </div>
    );
}
