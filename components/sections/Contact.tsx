'use client';

import { useState } from 'react';
import styles from './Contact.module.css';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                alert(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to send message. Please check your connection and try again.');
        }
    };

    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                <h2 className={styles.heading}>Contact Us</h2>
                <div className={styles.underline}></div>

                <div className={styles.grid}>
                    {/* Contact Info Column */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoBlock}>
                            <h3 className={styles.subHeading}>Primary Contact :</h3>

                            <div className={styles.contactItem}>
                                <h4>Conference Chairman</h4>
                                <p>Prof. Anand Kumar (+91-9415202167)</p>
                            </div>

                            <div className={styles.contactItem}>
                                <h4>Organizing Secretary</h4>
                                <p>Dr. Kranti K. Srivastava (+91-7065559559)</p>
                            </div>

                            <div className={styles.contactItem}>
                                <h4>E-mail :</h4>
                                <p>
                                    <a href="mailto:2303051240028@paruluniversity.ac.in" style={{ color: '#f0c040', wordBreak: 'break-all' }}>
                                        2303051240028@paruluniversity.ac.in
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.infoBlock}>
                            <h3 className={styles.subHeading}>For Sponsorship :</h3>
                            <div className={styles.contactItem}>
                                <p>Dr. Vijendra Nath Pathak (+91-7905765113)</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className={styles.formColumn}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Your Contact Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={styles.input}
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    required
                                    rows={5}
                                ></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
