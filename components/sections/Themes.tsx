'use client';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { conference } from '@/data/conference';
import styles from './Themes.module.css';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Themes() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="section" id="themes">
            <div className="container">
                <ScrollReveal>
                    <div className="text-center" style={{ marginBottom: '4rem' }}>
                        <span className="text-uppercase" style={{ color: 'var(--color-secondary)' }}>Tracks</span>
                        <h2>Themes & Sub-Themes</h2>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up" delay={200}>
                    <div className={styles.container}>
                        <div className={styles.tabList}>
                            {conference.themes.map((theme, index) => (
                                <button
                                    key={index}
                                    className={styles.tabBtn}
                                    data-active={activeTab === index}
                                    onClick={() => setActiveTab(index)}
                                >
                                    {theme.title}
                                </button>
                            ))}
                        </div>

                        <div className={styles.contentPanel}>
                            <h3 className={styles.panelTitle}>
                                {conference.themes[activeTab].title}
                            </h3>
                            <ul className={styles.subThemeList}>
                                {conference.themes[activeTab].subthemes.map((sub, i) => (
                                    <li key={i} className={styles.subThemeItem}>
                                        <CheckCircle2 size={20} className={styles.bullet} />
                                        <span>{sub}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
