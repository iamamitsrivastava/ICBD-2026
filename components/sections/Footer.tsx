'use client';
import Link from 'next/link';
import { Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';
import { conference } from '@/data/conference';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    {/* Column 1: Information */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerHeading}>Information</h4>
                        <ul className={styles.footerList}>
                            <li><Link href="/#about">About the Conference</Link></li>
                            <li><Link href="/#themes">Themes</Link></li>
                            <li><Link href="/committee">Organizing Committee</Link></li>
                            <li><Link href="/privacy">Privacy Policy</Link></li>
                            <li><Link href="/terms">Terms & Conditions</Link></li>
                        </ul>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerHeading}>Quick Links</h4>
                        <ul className={styles.footerList}>
                            <li><Link href="#speakers">Speakers</Link></li>
                            <li><Link href="#schedule">Schedule</Link></li>
                            <li><Link href="contact">Sponsorships</Link></li>
                            <li><Link href="#submit">Abstract Submission</Link></li>
                            <li><Link href="#venue">Venue</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Support */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.footerHeading}>Support</h4>
                        <ul className={styles.footerList}>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li><a href={`mailto:${conference.contact.email}`}>{conference.contact.email}</a></li>
                            <li><a href={`tel:${conference.contact.phone}`}>{conference.contact.phone}</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Branding & Date */}
                    <div className={`${styles.footerCol} ${styles.brandingCol}`}>
                        <div className={styles.footerBrand}>
                            <div className={styles.logoPlaceholder}>
                                <div className={styles.logoWrapper}>
                                    <Image
                                        src="/parul-university-logo.svg"
                                        alt="Parul University"
                                        width={200}
                                        height={60}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <h3 className={styles.footerConferenceTitle}>{conference.title}</h3>
                        <p className={styles.footerConferenceSubtitle}>International Conference on Bridging Disciplines</p>

                        <div className={styles.footerMeta}>
                            <p>Vadodara, Gujarat, India</p>
                            <p>{conference.dates}</p>
                        </div>

                        <div className={styles.socialIcons}>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialIconLink}><Linkedin size={20} /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialIconLink}><Instagram size={20} /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialIconLink}><Facebook size={20} /></a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className={styles.socialIconLink}><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>

                <div className={styles.copy}>
                    Copyright &copy; 2026 {conference.host}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
