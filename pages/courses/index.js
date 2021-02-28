import Head from "next/head";
import Link from "next/link";

import styles from "./styles/index.module.css";
import courses from "../../public/courses.json";

export default function Courses() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Carlos De La Roca | Courses</title>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Carlos De La Roca. Cal State University - Monterey Bay Computer Science Online Courses and links to projects'
                ></meta>
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
                    <h2 className={styles.courseName}>
                        {name} - {number}
                    </h2>
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
