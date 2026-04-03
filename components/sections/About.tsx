import Image from 'next/image';
import { BookOpen, Users, Lightbulb, Link as LinkIcon, Zap, MapPin } from 'lucide-react';
import styles from './About.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export function AboutConference() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.split}>
                    <ScrollReveal animation="fade-right">
                        <div className={styles.textBlock}>
                            <span className="text-uppercase" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>INTRODUCTION</span>
                            <h2>About the Conference</h2>
                            {/* <p>
                                Join us for Parul University&apos;s premier international conference on bridging disciplines.
                            </p> */}
                            <p>
                                Welcome to the International Conference on <strong>“Bridging Disciplines: Expanding Horizons in Liberal Arts (ICBD-2026)”</strong>. This premier forum invites scholars, educators, researchers, and students to explore the value of interdisciplinary approaches in the liberal arts. This event underscores the importance of transcending traditional academic boundaries to address global challenges, such as <strong>Good Health and Wellbeing (SDG 3)</strong>, <strong>Quality Education (SDG 4)</strong>, and <strong>Gender Equality (SDG 5)</strong> to enrich educational practices.
                            </p>
                            <p>
                                The conference promotes collaboration, innovation, and deeper insights into complex issues by fostering connections among disciplines such as literature, history, sociology, psychology, cultural studies, and journalism and mass communication. By aligning with key Sustainable Development Goals, <strong>ICBD-2026</strong> aims to inspire actionable knowledge and transformative practices across diverse academic and societal contexts.
                            </p>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className={styles.imageWrapper} style={{ marginTop: '0' }}>
                            <Image
                                src="/images/venue-slider-2.jpg"
                                alt="Conference Hall"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export function About() {
    return (
        <section className={`section ${styles.about}`} id="about">
            <div className="container">
                <div className={styles.split}>
                    <ScrollReveal animation="fade-right">
                        <div className={styles.textBlock}>
                            <span className="text-uppercase" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>LOCATION</span>
                            <h2>About Parul University</h2>
                            <p>
                                Parul University (Vadodara, Gujarat) is India&apos;s youngest private university to receive <strong>NAAC A++ accreditation</strong> in the first cycle. With a 150+ acre eco-friendly campus and students from every Indian state and 75+ countries, Parul University is a culturally global destination.
                            </p>

                            <h3 className={styles.subheading}>Faculty of Liberal Arts</h3>
                            <p>
                                Established in 2016, the Faculty fosters critical thinking through a personalized curriculum grounded in humanities and social sciences, fully aligned with the <strong>National Education Policy (NEP) 2020</strong>.
                            </p>

                            <div className={styles.locationWrapper}>
                                <MapPin size={20} />
                                <span>Vadodara, Gujarat, India</span>
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal delay={200}>
                        <div className={styles.imageWrapper} style={{ marginTop: '-2rem' }}>
                            <Image
                                src="/images/about-students.jpg"
                                alt="Parul University Campus"
                                fill
                                className={styles.image}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </ScrollReveal>
                </div>

                {/* Statistics Grid */}
                <ScrollReveal animation="fade-up" delay={300}>
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>🏆</div>
                            <div className={styles.statNumber}>NAAC A++</div>
                            <div className={styles.statTitle}>Youngest Pvt. University</div>
                            <div className={styles.statDescription}>First Cycle Accreditation</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>👥</div>
                            <div className={styles.statNumber}>65,000+</div>
                            <div className={styles.statTitle}>Total Students</div>
                            <div className={styles.statDescription}>From every state in India</div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>🌍</div>
                            <div className={styles.statNumber}>75+</div>
                            <div className={styles.statTitle}>Global Countries</div>
                            <div className={styles.statDescription}>4,500+ International Students</div>
                        </div>
                        <div className={`${styles.statCard} ${styles.statCardHighlight}`}>
                            <div className={styles.statIcon}>🎓</div>
                            <div className={styles.statNumber}>200+</div>
                            <div className={styles.statTitle}>Acres Campus</div>
                            <div className={styles.statDescription}>Eco-friendly Environment</div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

export function Objectives() {
    const objectivesList = [
        {
            icon: <BookOpen size={24} />,
            title: "Interdisciplinary Impact",
            text: "To deliberate upon and critically examine case studies, scholarly research, and initiatives that substantiate the transformative implications of interdisciplinary paradigms."
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Critical Thinking",
            text: "To cultivate analytical rigor and intellectual creativity through the integration of diverse academic epistemologies and perspectives."
        },
        {
            icon: <LinkIcon size={24} />,
            title: "Bridging Theory & Practice",
            text: "To reinforce the significance of the liberal arts in synthesizing theoretical constructs with real-world praxis and application."
        },
        {
            icon: <Users size={24} />,
            title: "Networking & Collaboration",
            text: "To facilitate meaningful academic and professional engagement that fosters sustained, cross-sector collaborations among educators, researchers, and industry leaders."
        },
        {
            icon: <Zap size={24} />,
            title: "Tech & Innovation",
            text: "To advance the convergence of emerging technologies and the liberal arts in order to catalyze innovation and interdisciplinary advancement."
        }
    ];

    return (
        <section className={`section ${styles.objectives}`} id="objectives">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center">
                        <span className="text-uppercase" style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>Our Goals</span>
                        <h2>Conference Objectives</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {objectivesList.map((obj, i) => (
                        <ScrollReveal key={i} animation="fade-up" delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500} className={styles.card}>
                            <div className={styles.iconWrapper}>{obj.icon}</div>
                            <h3 className={styles.cardTitle}>{obj.title}</h3>
                            <p className={styles.cardText}>{obj.text}</p>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
