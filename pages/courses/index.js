import Head from "next/head";
import Link from "next/link";

import styles from "../../styles/Courses.module.css";
import courses from "../../public/courses.json";

export default function Courses() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Carlos De La Roca | Courses</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <header className={styles.header}>
                <h1 className={styles.title}>Program Courses</h1>
                <p className={styles.description}></p>
            </header>
            <main className={styles.main}>
                <ListCourses />
            </main>
        </div>
    );
}

function ListCourses() {
    return (
        <ul className={styles.courses}>
            {courses.map((course) => (
                <CourseItem {...course} key={course.number} />
            ))}
        </ul>
    );
}

function CourseItem({ name, number, description }) {
    const href = `/courses/${number}`;
    return (
        <li className={styles.course}>
            <Link href={href}>
                <a>
                    <h3 className={styles.courseName}>
                        {name} - {number}
                    </h3>
                </a>
            </Link>
            <div className={styles.details}>
                <p>
                    {description.substring(0, 112)}&hellip;
                    <Link href={href}>
                        <a>[Read More]</a>
                    </Link>
                </p>
            </div>
        </li>
    );
}
