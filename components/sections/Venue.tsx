'use client';
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import styles from './Footer.module.css';

export function Venue() {
    const images = [
        "/images/venue-slider-3.jpg", // Moved to top for visibility check
        "/images/venue-slider-2.jpg",
        "/images/venue-slider-4.jpg",
        "/images/venue-slider-5.jpg",
        "/images/venue-slider-1.jpg",
        "/images/gate-hero.jpg",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, 2500); // Change image every 2.5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className={`section ${styles.venue}`} id="venue">
            <div className="container">
                <div className={styles.venueGrid}>
                    <div>
                        <span className="text-uppercase" style={{ color: 'var(--color-secondary)' }}>Location</span>
                        <h2 style={{ marginBottom: '1rem' }}>About Parul University</h2>
                        <p style={{ marginBottom: '1rem', lineHeight: '1.6', fontSize: '1rem', textAlign: 'justify' }}>
                            Parul University&apos;s ICBD-2026 brings together global thought leaders.
                        </p>


                        {/* About parul */}

                        <p style={{ marginBottom: '1rem', lineHeight: '1.6', fontSize: '1rem', textAlign: 'justify' }}>
                            Parul University (Vadodara, Gujarat) is India&apos;s youngest private university to receive <strong>NAAC A++ accreditation</strong> in its first cycle. With a 150+ acre campus and students from 75+ countries, it creates a vibrant, multicultural hub for learning.
                        </p>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1rem', textAlign: 'justify' }}>
                            Recognized for its world-class infrastructure, industry-aligned curriculum, and outstanding placement records, Parul University stands as a premier beacon of higher education. The university houses state-of-the-art research facilities, dedicated innovation and incubation centers, and a diverse range of disciplines across multiple faculties, fostering a holistic academic environment where future leaders are nurtured.
                        </p>

                        <h3 style={{ marginTop: '2rem', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Faculty of Liberal Arts</h3>
                        <p style={{ marginBottom: '1.5rem', lineHeight: '1.6', fontSize: '1rem', textAlign: 'justify' }}>
                            Established in 2016, the Faculty fosters critical thinking through a personalized curriculum grounded in humanities and social sciences, fully aligned with the <strong>National Education Policy (NEP) 2020</strong>. It offers students unparalleled opportunities to bridge traditional academic boundaries, encouraging interdisciplinary exploration and independent intellectual growth.
                        </p>

                        <div className="flex items-center gap-2 mb-4" style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>
                            <MapPin size={20} className="text-secondary" />
                            <span>Vadodara, Gujarat, India</span>
                        </div>
                    </div>
                    <div className={styles.mapWrapper}>
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Parul University Campus View ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{
                                    objectFit: 'cover',
                                    opacity: currentIndex === index ? 1 : 0,
                                    transition: 'opacity 1s ease-in-out',
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Statistics Grid */}
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
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>🎓</div>
                        <div className={styles.statNumber}>200+</div>
                        <div className={styles.statTitle}>Acres Campus</div>
                        <div className={styles.statDescription}>Eco-friendly Environment</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
