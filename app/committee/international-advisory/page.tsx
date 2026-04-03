'use client';
import { conference } from "@/data/conference";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CommitteeMember } from "@/types";

export default function InternationalAdvisoryPage() {
    return (
        <main style={{ backgroundColor: '#0B1C35', minHeight: '100vh', color: 'white' }}>
            <Header variant="solid" />

            {/* Hero Section */}
            <section style={{ textAlign: 'center', paddingTop: '10rem', paddingBottom: '3rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <ScrollReveal>
                    {/* Breadcrumb */}
                    <p style={{ color: '#FACC15', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        <a href="/committee" style={{ color: '#FACC15', textDecoration: 'none', opacity: 0.7, transition: 'opacity 0.2s' }}>Committee</a>
                        <span style={{ opacity: 0.4, margin: '0 0.75rem' }}>›</span>
                        International Advisory
                    </p>

                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        fontWeight: 900,
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                    }}>
                        International Advisory
                    </h1>

                    <div style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #FACC15, #d4af37)', borderRadius: '2px', margin: '1.5rem auto' }} />

                    <p style={{
                        color: '#94a3b8',
                        maxWidth: '38rem',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                    }}>
                        Distinguished international scholars and experts providing global perspective to ICBD-2026.
                    </p>
                </ScrollReveal>
            </section>

            {/* Members Grid */}
            <section style={{ paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {conference.committees.internationalAdvisory && conference.committees.internationalAdvisory.length > 0 ? (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2.5rem',
                            justifyContent: 'center',
                        }}>
                            {conference.committees.internationalAdvisory.map((person: CommitteeMember, idx: number) => (
                                <ScrollReveal key={idx}>
                                    <div style={{ textAlign: 'center' }}>
                                        {/* Image Block */}
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            aspectRatio: '3.5 / 4',
                                            borderRadius: '1.5rem',
                                            border: '4px solid #FACC15',
                                            overflow: 'hidden',
                                            margin: '0 auto 1.5rem auto',
                                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                                            transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s',
                                        }}
                                            className="advisor-image-container"
                                        >
                                            {person.image ? (
                                                <Image
                                                    src={person.image}
                                                    alt={person.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e293b' }}>
                                                    <span style={{ color: '#475569', fontSize: '3rem' }}>👤</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Text Block */}
                                        <h3 style={{
                                            fontSize: '1.5rem',
                                            fontWeight: 700,
                                            color: 'white',
                                            marginBottom: '0.4rem',
                                            fontFamily: 'var(--font-heading)',
                                            letterSpacing: '0.02em',
                                        }}>
                                            {person.name}
                                        </h3>
                                        {person.role && (
                                            <p style={{
                                                color: '#FACC15',
                                                fontSize: '0.95rem',
                                                fontWeight: 600,
                                                marginBottom: '0.25rem',
                                                lineHeight: 1.3
                                            }}>
                                                {person.role}
                                            </p>
                                        )}
                                        {person.affiliation && (
                                            <p style={{
                                                color: '#94a3b8',
                                                fontSize: '0.9rem',
                                                fontWeight: 500,
                                            }}>
                                                {person.affiliation}
                                            </p>
                                        )}
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2.5rem',
                            justifyContent: 'center',
                        }}>
                            {[1, 2].map((idx) => (
                                <ScrollReveal key={idx}>
                                    <div style={{ textAlign: 'center', opacity: 0.6 }}>
                                        {/* Empty Image Block */}
                                        <div style={{
                                            position: 'relative',
                                            width: '100%',
                                            aspectRatio: '3.5 / 4',
                                            borderRadius: '1.5rem',
                                            border: '4px dashed rgba(250, 204, 21, 0.3)',
                                            overflow: 'hidden',
                                            margin: '0 auto 1.5rem auto',
                                            backgroundColor: 'rgba(30, 41, 59, 0.5)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                            <span style={{ color: 'rgba(148, 163, 184, 0.5)', fontSize: '4rem' }}>👤</span>
                                        </div>

                                        {/* Empty Text Blocks */}
                                        <div style={{
                                            height: '24px',
                                            width: '70%',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '4px',
                                            margin: '0 auto 0.75rem auto',
                                        }} />
                                        <div style={{
                                            height: '16px',
                                            width: '45%',
                                            backgroundColor: 'rgba(250, 204, 21, 0.15)',
                                            borderRadius: '4px',
                                            margin: '0 auto',
                                        }} />
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
