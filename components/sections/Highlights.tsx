import { BookOpen, Award, FileText, Share2, Mic, BadgeCheck } from 'lucide-react';
import styles from './Highlights.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

const highlightsData = [
    {
        icon: <BookOpen size={24} strokeWidth={1.5} />,
        title: "Scopus-Indexed Publication",
        text: "Selected papers will be published in reputed Scopus-indexed journals, ensuring global academic visibility and recognition"
    },
    {
        icon: <Award size={24} strokeWidth={1.5} />,
        title: "Best Paper Awards",
        text: "Outstanding research contributions will be recognised with Best Paper Awards across every technical session"
    },
    {
        icon: <FileText size={24} strokeWidth={1.5} />,
        title: "ISBN Conference Proceedings",
        text: "All accepted papers will be compiled into official conference proceedings with a registered ISBN number"
    },
    {
        icon: <Share2 size={24} strokeWidth={1.5} />,
        title: "Global Networking",
        text: "Connect and collaborate with distinguished scholars, researchers, and industry leaders from around the world"
    },
    {
        icon: <Mic size={24} strokeWidth={1.5} />,
        title: "International Speakers",
        text: "Gain insights from renowned academicians and thought leaders delivering keynote addresses on interdisciplinary themes"
    },
    {
        icon: <BadgeCheck size={24} strokeWidth={1.5} />,
        title: "Certificate of Participation",
        text: "All presenters and attendees will receive official certificates recognising their contribution to the conference"
    }
];

export function Highlights() {
    return (
        <section className={`section ${styles.highlights}`} id="highlights">
            <div className="container">
                <ScrollReveal>
                    <div className={styles.header}>
                        <span className={styles.subtitle}>WHAT TO EXPECT</span>
                        <h2 className={styles.title}>Conference Highlights</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.grid}>
                    {highlightsData.map((item, index) => (
                        <ScrollReveal
                            key={index}
                            animation="fade-up"
                            delay={(index * 100) as 0 | 100 | 200 | 300 | 400 | 500}
                        >
                            <div className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.text}>{item.text}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
