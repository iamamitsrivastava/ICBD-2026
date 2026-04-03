import { CalendarClock, Send, CheckCircle } from 'lucide-react';
import { conference } from '@/data/conference';
import styles from './Timeline.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { TimelineItem } from '@/types';

export default function Timeline() {
    const icons = [
        <CheckCircle key="1" size={24} />, // Registration
        <Send key="2" size={24} />,        // Submission
        <CalendarClock key="3" size={24} />, // Conference
    ];

    return (
        <section className={`section ${styles.timelineSection}`} id="dates">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="text-uppercase" style={{ color: 'var(--color-secondary)' }}>Timeline</span>
                        <h2 style={{ color: 'white' }}>Key Dates</h2>
                    </div>
                </ScrollReveal>

                <div className={styles.timeline}>
                    {conference.timeline.map((item: TimelineItem, index: number) => (
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        <ScrollReveal key={index} delay={(index * 100) as any} animation="fade-up">
                            <div className={styles.item}>
                                <div className={styles.dot}>
                                    {icons[index]}
                                </div>
                                <span className={styles.date}>{item.date}</span>
                                <span className={styles.label}>{item.label}</span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
