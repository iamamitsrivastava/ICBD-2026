'use client';
import { useState, useEffect } from 'react';
import { MapPin, Award, Users, Globe, TreePine, BookOpen, ChevronRight, Building2 } from 'lucide-react';
import Image from 'next/image';
import styles from './Venue.module.css';

export function Venue() {
    const images = [
        "/images/venue-slider-3.jpg",
        "/images/venue-slider-2.jpg",
        "/images/venue-slider-4.jpg",
        "/images/venue-slider-5.jpg",
        "/images/about-buddha.jpg",
        "/images/gate-hero.jpg",
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const facultyImages = [
        "/images/faculty-kathakali.png",
        "/images/gallery-speaker.png",
        "/images/gallery-cultural-dance.png",
        "/images/gallery-campus-garden.jpg",
    ];
    const [facultyIndex, setFacultyIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            setFacultyIndex((prevIndex: number) => (prevIndex + 1) % facultyImages.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [facultyImages.length]);

    return (
        <section className={styles.venue} id="about-parul">
            <div className="container">

                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <span className={styles.sectionTag}>
                        <Building2 size={14} />
                        The Host Institution
                    </span>
                    <h2 className={styles.sectionTitle}>About Parul University</h2>
                    <p className={styles.sectionSubtitle}>
                        India&apos;s youngest private university to receive NAAC A++ accreditation in the first cycle
                    </p>
                    <div className={styles.titleDivider}>
                        <span className={styles.dividerLine}></span>
                        <span className={styles.dividerDot}></span>
                        <span className={styles.dividerLine}></span>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className={styles.contentGrid}>
                    {/* Text Content */}
                    <div className={styles.textContent}>
                        <p className={styles.bodyText}>
                            Nestled in the vibrant city of <strong>Vadodara, Gujarat</strong>, Parul University has emerged as a beacon of academic excellence and innovation. With a sprawling <strong>150+ acre eco-friendly campus</strong>, the university is home to students from every Indian state and <strong>75+ countries</strong>, making it one of the most culturally diverse educational destinations in the country
                        </p>
                        <p className={styles.bodyText}>
                            Recognized for its world-class infrastructure, industry-aligned curriculum, and outstanding placement records, Parul University houses state-of-the-art research facilities, dedicated innovation and incubation centers, and a diverse range of disciplines across multiple faculties. These include the Faculty of Engineering and Technology, Faculty of Management Studies, Faculty of Applied Sciences, Faculty of Computer Science and Applications, Faculty of Pharmacy, Faculty of Medicine, Faculty of Nursing, Faculty of Architecture and Planning, Faculty of Law, Faculty of Liberal Arts, Faculty of Design, Faculty of Commerce, Faculty of Agriculture, and Faculty of Hospitality and Tourism Management, creating a multidisciplinary academic ecosystem that encourages innovation, research, and holistic learning.
                        </p>

                        {/* Feature chips */}
                        <div className={styles.featureChips}>
                            <span className={styles.chip}>🏗️ World-class Infrastructure</span>
                            <span className={styles.chip}>🔬 Research Facilities</span>
                            <span className={styles.chip}>💡 Innovation Centers</span>
                            <span className={styles.chip}>📚 Multi-disciplinary</span>
                        </div>

                        {/* Location */}
                        <a
                            href="https://www.google.com/maps/place/Parul+University/@22.2930981,73.2242498,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.locationLink}
                        >
                            <div className={styles.locationIcon}>
                                <MapPin size={18} />
                            </div>
                            <div className={styles.locationInfo}>
                                <span className={styles.locationLabel}>CONFERENCE VENUE</span>
                                <span className={styles.locationText}>Vadodara, Gujarat, India</span>
                            </div>
                            <ChevronRight size={16} className={styles.locationArrow} />
                        </a>
                    </div>

                    {/* Image & Badge Side */}
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
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

                            {/* Slider dots */}
                            <div className={styles.sliderDots}>
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.dot} ${currentIndex === index ? styles.dotActive : ''}`}
                                        onClick={() => setCurrentIndex(index)}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={styles.imageAccent}></div>

                        {/* Floating NAAC Badge */}
                        <div className={styles.floatingBadge}>
                            <Award size={24} />
                            <div>
                                <strong>NAAC A++</strong>
                                <span>First Cycle</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Faculty of Liberal Arts - Full width row */}
                <div className={styles.facultyRow}>
                    {/* Text side */}
                    <div className={styles.textContent}>
                        <h3 className={styles.facultyHeading}>
                            <BookOpen size={20} style={{ display: 'inline', marginRight: '0.5rem', color: 'var(--color-secondary)' }} />
                            Faculty of Liberal Arts
                        </h3>
                        <p className={styles.bodyText}>
                            Parul Institute of Liberal Arts (PILA), established in 2016, is a constituent institute of Parul University, aligned with the principles of the National Education Policy (NEP) 2020, PILA adopts a flexible and multidisciplinary approach to learning.
                            The Faculty of Liberal Arts at Parul University offers diverse programs in Psychology, English, JMC, Political Science, History, Geography, Sociology, and Economics at UG, PG, and PhD levels. With over 1000+ students and 35+ faculty members, it fosters a strong culture of mentorship, research, and interdisciplinary learning. The curriculum blends theory with practical application to address real-world challenges. The Faculty promotes holistic development through events like Literature Fest and Maadhyam(Gujarati Biggest Media Festival), and encourages global exposure through international collaborations. Supported by modern infrastructure and active research initiatives, it prepares socially responsible and globally competent individuals.
                        </p>

                        <div className={styles.featureChips}>
                            <span className={styles.chip}>🏗️ 1000+ Students</span>
                            <span className={styles.chip}>🔬 35+ Faculty Members</span>
                            <span className={styles.chip}>💡 20+ Programs</span>
                            <span className={styles.chip}>📚 2+ Flagship Events</span>
                            <span className={styles.chip}>🌍 Global Collaborations</span>
                        </div>
                    </div>

                    {/* Slider side */}
                    <div className={styles.imageSection}>
                        <div className={styles.imageWrapper}>
                            {facultyImages.map((src, index) => (
                                <Image
                                    key={index}
                                    src={src}
                                    alt={`Faculty of Liberal Arts ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    style={{
                                        objectFit: 'cover',
                                        opacity: facultyIndex === index ? 1 : 0,
                                        transition: 'opacity 1s ease-in-out',
                                    }}
                                />
                            ))}
                            <div className={styles.sliderDots}>
                                {facultyImages.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`${styles.dot} ${facultyIndex === index ? styles.dotActive : ''}`}
                                        onClick={() => setFacultyIndex(index)}
                                        aria-label={`View image ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={styles.imageAccent}></div>
                    </div>
                </div>

                {/* Statistics Grid */}

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statIconWrap}>
                            <Award size={28} />
                        </div>
                        <div className={styles.statNumber}>NAAC A++</div>
                        <div className={styles.statTitle}>Youngest Pvt University</div>
                        <div className={styles.statDescription}>First Cycle Accreditation</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIconWrap}>
                            <Users size={28} />
                        </div>
                        <div className={styles.statNumber}>65,000+</div>
                        <div className={styles.statTitle}>Total Students</div>
                        <div className={styles.statDescription}>From every state in India</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIconWrap}>
                            <Globe size={28} />
                        </div>
                        <div className={styles.statNumber}>75+</div>
                        <div className={styles.statTitle}>Global Countries</div>
                        <div className={styles.statDescription}>4,500+ International Students</div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIconWrap}>
                            <TreePine size={28} />
                        </div>
                        <div className={styles.statNumber}>150+</div>
                        <div className={styles.statTitle}>Acres Campus</div>
                        <div className={styles.statDescription}>Eco-friendly Environment</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
