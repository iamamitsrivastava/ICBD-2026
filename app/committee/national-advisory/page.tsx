'use client';
import { conference } from "@/data/conference";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CommitteeMember } from "@/types";

export default function NationalAdvisoryPage() {
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
                        National Advisory
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
                        National Advisory
                    </h1>

                    <div style={{ width: '80px', height: '4px', background: 'linear-gradient(to right, #FACC15, #d4af37)', borderRadius: '2px', margin: '1.5rem auto' }} />

                    <p style={{
                        color: '#94a3b8',
                        maxWidth: '38rem',
                        margin: '0 auto',
                        fontSize: '1.1rem',
                        lineHeight: 1.7,
                    }}>
                        Eminent national scholars and academicians guiding the academic direction of ICBD-2026.
                    </p>
                </ScrollReveal>
            </section>

            {/* Members Grid */}
            <section style={{ paddingBottom: '8rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {conference.committees.nationalAdvisory && conference.committees.nationalAdvisory.length > 0 ? (
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                            gap: '2.5rem',
                            justifyContent: 'center',
                        }}>
                            {conference.committees.nationalAdvisory.map((person: CommitteeMember, idx: number) => (
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
                        <div style={{ textAlign: 'center', padding: '5rem 2rem', color: '#94a3b8' }}>
                            <p style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>🏛️</p>
                            <p>National Advisory Committee members will be announced soon.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
