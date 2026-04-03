import { Share2, BookOpen, Award, FileCheck } from 'lucide-react';
import { conference } from '@/data/conference';
import styles from './Content.module.css';
import { HighlightItem, GuidelineItem } from '@/types';

export function Highlights() {
    const highlights = conference.highlights.map((item: HighlightItem, index: number) => ({
        ...item,
        icon: [
            <BookOpen key="1" />,
            <Award key="2" />,
            <FileCheck key="3" />,
            <Share2 key="4" />
        ][index]
    }));

    return (
        <section className={`section ${styles.highlights}`} id="highlights">
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <span className="text-uppercase" style={{ color: 'var(--color-secondary)' }}>What to Expect</span>
                    <h2>Conference Highlights</h2>
                </div>

                <div className={styles.grid}>
                    {highlights.map((item: HighlightItem, index: number) => (
                        <div key={index} className={styles.card}>
                            <div style={{ color: 'var(--color-primary)' }}>{item.icon}</div>
                            <p style={{ fontWeight: 500 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Guidelines() {
    const steps = conference.guidelines;

    return (
        <section className={`section ${styles.guidelines}`} id="submit">
            <div className="container">
                <div className="text-center">
                    <span className="text-uppercase" style={{ color: 'var(--color-secondary)' }}>Author Instructions</span>
                    <h2>Submission Guidelines</h2>
                    <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--color-text-muted)' }}>
                        Please ensure your research is original and has not been published elsewhere. Plagiarism checks will be conducted strictly.
                    </p>
                </div>

                <div className={styles.steps}>
                    {steps.map((step: GuidelineItem, index: number) => (
                        <div key={index} className={styles.step}>
                            <span className={styles.stepNumber}>0{index + 1}</span>
                            <div className={styles.stepContent}>
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
