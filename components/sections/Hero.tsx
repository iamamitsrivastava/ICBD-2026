'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, MapPin, ArrowRight, FileText, Award, Layers, Search, Globe } from 'lucide-react';
import Image from 'next/image';
import { conference } from '@/data/conference';
import styles from './Hero.module.css';

export default function Hero() {
    const landmarkImages = [
        '/images/landmark-palace.jpg',
        '/images/landmark-statue.png',
        '/images/landmark-temple-1.jpg',
        '/images/landmark-temple-2.png',
        '/images/landmark-temple-3.png'
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % landmarkImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [landmarkImages.length]);

    return (
        <section className={styles.hero} id="home">
            <div className={styles.background}>
                <div
                    className={styles.backgroundImage}
                    style={{ width: '100%', height: '100%', position: 'absolute', background: 'url(/images/gate-hero.jpg) center/cover' }}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.container}>
                <div className={styles.heroGrid}>
                    <div className={styles.content}>
                        <div className={`${styles.presenter} ${styles.animate} ${styles['delay-100']}`}>PARUL INSTITUTE OF LIBERAL ARTS PRESENTS</div>

                        <h1 className={`${styles.title} ${styles.animate} ${styles['delay-200']}`}>
                            {conference.title}
                        </h1>

                        <p className={`${styles.subtitle} ${styles.animate} ${styles['delay-300']}`}>
                            International Conference on Bridging Disciplines:
                            <br />
                            <span style={{ fontWeight: 600, color: 'white' }}>Expanding Horizons in Liberal Arts</span>
                        </p>

                        <div className={`${styles.meta} ${styles.animate} ${styles['delay-400']}`}>
                            <div className={styles.metaItem}>
                                <Calendar className={styles.metaIcon} size={24} />
                                <span>{conference.dates}</span>
                            </div>
                            <div className={styles.metaItem}>
                                <MapPin className={styles.metaIcon} size={24} />
                                <span>Parul University, Vadodara</span>
                            </div>
                        </div>

                        <div className={`${styles.actions} ${styles.animate} ${styles['delay-500']}`}>
                            <Link href="/registration" className={styles.btnPrimary} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Register Now <ArrowRight size={20} />
                            </Link>
                            <Link href="#submit" className={styles.btnSecondary} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                Submit Paper <FileText size={20} />
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className={`${styles.trustBar} ${styles.animate} ${styles['delay-600']}`}>
                            <div className={styles.trustItem}>
                                <Award className={styles.trustIcon} size={20} />
                                <span>NAAC A++ Accredited University</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Globe className={styles.trustIcon} size={20} />
                                <span>International Conference</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Layers className={styles.trustIcon} size={20} />
                                <span>Peer-Reviewed Publications</span>
                            </div>
                            <div className={styles.trustItem}>
                                <Search className={styles.trustIcon} size={20} />
                                <span>Indexed in Scopus / WoS</span>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className={`${styles.statsRow} ${styles.animate} ${styles['delay-700']}`}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>300+</span>
                                <span className={styles.statLabel}>Attendees</span>
                            </div>
                            <div className={styles.statLine}></div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>20+</span>
                                <span className={styles.statLabel}>Speakers</span>
                            </div>
                            <div className={styles.statLine}></div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Countries</span>
                            </div>
                            <div className={styles.statLine}></div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>2+</span>
                                <span className={styles.statLabel}>Workshops / Panel Discussion</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Visuals - Autoplay Slider */}
                    <div className={`${styles.visuals} ${styles.animate} ${styles['delay-500']}`}>
                        <div className={styles.sliderContainer}>
                            {landmarkImages.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={`Landmark ${index + 1}`}
                                    fill
                                    className={`${styles.slideImage} ${index === currentSlide ? styles.active : ''}`}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{
                                        objectFit: 'cover'
                                    }}
                                />
                            ))}
                            {/* Slide Indicators */}
                            <div className={styles.sliderIndicators}>
                                {landmarkImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
                                        onClick={() => setCurrentSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
