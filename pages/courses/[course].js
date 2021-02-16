import Head from "next/head";
import styles from "../../styles/CoursePage.module.css";

export default function Courses({ course }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    {course.name} | {course.number}{" "}
                </title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main className={styles.main}>course name: {course.name}</main>
        </div>
    );
}

export async function getStaticProps(ctx) {
    let { course: number } = ctx.params;
    const file = await require("../../public/courses.json");
    const foundCourse = file.filter(
        (courseObj) => courseObj.number == number
    )[0];
    return { props: { course: foundCourse } };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { course: "300" } },
            { params: { course: "338" } },
            { params: { course: "363" } },
            { params: { course: "334" } },
            { params: { course: "311" } },
            { params: { course: "336" } },
            { params: { course: "462S" } },
            { params: { course: "328" } },
            { params: { course: "370" } },
            { params: { course: "383" } },
            { params: { course: "329" } },
            { params: { course: "438" } },
            { params: { course: "499" } },
        ],
        fallback: false,
    };
}
