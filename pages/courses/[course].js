import Head from "next/head";
import { render } from "react-dom";
import styles from "../../styles/CoursePage.module.css";

export default function Courses({ course }) {
    return (
        <div className={styles.container}>
            <Head>
                <html lang='en' />
                <title>
                    {course.name} | {course.number}{" "}
                </title>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content={`${course.name} description page for Carlos De La Roca from California State University - Monterey Bay ILP`}
                ></meta>
            </Head>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1 className={styles.courseName}>
                        {course.name}
                        <span className={styles.courseNumber}>
                            {course.number}
                        </span>
                    </h1>
                    <div className={styles.courseDetails}>
                        <p className={styles.courseTerm}>{course.term}</p>
                        <p className={styles.courseUnits}>
                            Units:&nbsp;{course.units}
                        </p>
                    </div>
                </header>
                <div className={styles.description}>
                    <p>Course Description:</p> {course.description}
                </div>
                {course.projects && (
                    <Projects
                        projects={course.projects}
                        courseNumber={course.number}
                    />
                )}
            </main>
        </div>
    );
}

function Projects({ projects, courseNumber }) {
    return (
        <div className={styles.projects}>
            {projects.map((project) => (
                <div className={styles.project} key={project.number}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                    <p className={styles.projectDescription}>
                        {project.description}
                    </p>
                    <ProjectEmbed {...project} courseNumber={courseNumber} />
                </div>
            ))}
        </div>
    );
}

function ProjectEmbed({ courseNumber, type, ...details }) {
    switch (type) {
        case "pdf":
            return (
                <iframe
                    className={styles.projectEmbed}
                    src={`/courseFiles/${courseNumber}/${details.fileName}`}
                    width='100%'
                ></iframe>
            );
        default:
            return <p>No project</p>;
    }
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
