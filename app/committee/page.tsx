'use client';
import { conference } from "@/data/conference";
import Header from "@/components/sections/Header";
import Footer from "../../components/sections/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import advisoryStyles from "@/components/sections/Advisory.module.css";
import { CheckCircle2 } from "lucide-react";
import { CommitteeMember } from "@/types";

export default function CommitteePage() {
    return (
        <main style={{ backgroundColor: '#0B1C35', minHeight: '100vh', color: 'white' }}>
            <Header variant="solid" />

            {/* Hero / Header Section */}
            <section style={{ textAlign: 'center', paddingTop: '10rem', paddingBottom: '2rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
                <ScrollReveal>
                    <h1 style={{
                        fontSize: '3.5rem',
                        fontWeight: 900,
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        marginBottom: '1rem',
                        letterSpacing: '0.02em'
                    }}>
                        Conference Committees
                    </h1>
                    <div style={{ width: '60px', height: '4px', background: '#FACC15', margin: '0.5rem auto 2rem auto', borderRadius: '2px' }}></div>
                </ScrollReveal>
            </section>




            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>

                {/* --- LEADERSHIP --- */}
                <div id="leadership" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '5rem' }}>
                        <div style={{ height: '3px', flex: 1, background: 'linear-gradient(to right, transparent, #FACC15)' }}></div>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#FACC15', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Leadership</h2>
                        <div style={{ height: '3px', flex: 1, background: 'linear-gradient(to left, transparent, #FACC15)' }}></div>
                    </div>

                    {/* President & Vice President Section */}
                    <section style={{ marginBottom: '8rem' }}>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                            gap: '3rem',
                            maxWidth: '1000px',
                            margin: '0 auto',
                            justifyContent: 'center'
                        }}>
                            {/* President */}
                            {conference.committees.president && (
                                <ScrollReveal>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            position: 'relative',
                                            aspectRatio: '1/1.2',
                                            borderRadius: '1.5rem',
                                            overflow: 'hidden',
                                            border: '4px solid #FACC15',
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                            transition: 'transform 0.3s ease',
                                            marginBottom: '2rem'
                                        }}>
                                            {conference.committees.president.image ? (
                                                <Image
                                                    src={conference.committees.president.image}
                                                    alt={conference.committees.president.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e293b' }}>
                                                    <span style={{ color: '#94a3b8' }}>No Image</span>
                                                </div>
                                            )}
                                        </div>
                                        <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{conference.committees.president.name}</h4>
                                        <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.2rem', marginTop: '0.75rem' }}>{conference.committees.president.role}</p>
                                        <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>{conference.committees.president.affiliation}</p>
                                    </div>
                                </ScrollReveal>
                            )}

                            {/* Vice President */}
                            {conference.committees.vicePresidents && conference.committees.vicePresidents.map((person: CommitteeMember, idx: number) => (
                                <ScrollReveal key={idx}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{
                                            position: 'relative',
                                            aspectRatio: '1/1.2',
                                            borderRadius: '1.5rem',
                                            overflow: 'hidden',
                                            border: '4px solid #FACC15',
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                            transition: 'transform 0.3s ease',
                                            marginBottom: '2rem'
                                        }}>
                                            {person.image ? (
                                                <Image
                                                    src={person.image}
                                                    alt={person.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            ) : (
                                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e293b' }}>
                                                    <span style={{ color: '#94a3b8' }}>No Image</span>
                                                </div>
                                            )}
                                        </div>
                                        <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{person.name}</h4>
                                        <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.2rem', marginTop: '0.75rem' }}>{person.role}</p>
                                        <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>{person.affiliation}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </section>


                    {/* Chief Patrons Section */}
                    <section style={{ marginBottom: '8rem' }}>
                        <ScrollReveal>
                            <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: 800,
                                    color: '#FACC15',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    display: 'inline-block',
                                    paddingBottom: '0.5rem',
                                    borderBottom: '2px solid #FACC15'
                                }}>
                                    Chief Patrons
                                </h3>
                            </div>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                                gap: '3rem',
                                maxWidth: '1000px',
                                margin: '0 auto',
                                justifyContent: 'center'
                            }}>
                                {conference.committees.chiefPatrons.slice(0, 2).map((person, idx) => (
                                    <div key={idx} style={{ textAlign: 'center' }}>
                                        <div style={{
                                            position: 'relative',
                                            aspectRatio: '1/1.2',
                                            borderRadius: '1.5rem',
                                            overflow: 'hidden',
                                            border: '4px solid #FACC15',
                                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                            marginBottom: '2rem'
                                        }}>
                                            <Image
                                                src={person.image}
                                                alt={person.name}
                                                fill
                                                style={{ objectFit: 'cover', objectPosition: 'top' }}
                                            />
                                        </div>
                                        <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>{person.name}</h4>
                                        <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>{person.role}</p>
                                        <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>{person.affiliation}</p>
                                    </div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </section>

                    {/* Advisory Links */}
                    <section style={{ marginBottom: '8rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <ScrollReveal>
                                <a href="/committee/national-advisory" style={{
                                    display: 'block',
                                    padding: '2.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(250, 204, 21, 0.3)',
                                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                    className={advisoryStyles.advisoryCard}
                                >
                                    <h3 style={{ fontSize: '1.5rem', color: '#FACC15', fontWeight: 800 }}>National Advisory</h3>
                                    <p style={{ color: '#cbd5e1', marginTop: '0.5rem' }}>View the eminent scholars from across the nation.</p>
                                    <div style={{ marginTop: '1.5rem', color: '#FACC15', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        VIEW MEMBERS <span>→</span>
                                    </div>
                                </a>
                            </ScrollReveal>
                            <ScrollReveal>
                                <a href="/committee/international-advisory" style={{
                                    display: 'block',
                                    padding: '2.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(250, 204, 21, 0.3)',
                                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease'
                                }}
                                    className={advisoryStyles.advisoryCard}
                                >
                                    <h3 style={{ fontSize: '1.5rem', color: '#FACC15', fontWeight: 800 }}>International Advisory</h3>
                                    <p style={{ color: '#cbd5e1', marginTop: '0.5rem' }}>View our global network of experts and advisors.</p>
                                    <div style={{ marginTop: '1.5rem', color: '#FACC15', fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                                        VIEW MEMBERS <span>→</span>
                                    </div>
                                </a>
                            </ScrollReveal>
                        </div>
                    </section>
                </div>

                {/* --- ORGANIZING TEAM --- */}
                <div id="organizing" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to right, transparent, rgba(250, 204, 21, 0.3))' }}></div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FACC15', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Organizing Team</h2>
                        <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to left, transparent, rgba(250, 204, 21, 0.3))' }}></div>
                    </div>

                    {/* Secretary Section - Separate Row */}
                    {conference.committees.secretaries && conference.committees.secretaries.length > 0 && (
                        <section style={{ marginBottom: '6rem' }}>
                            <ScrollReveal>
                                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: 800,
                                        color: '#FACC15',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        display: 'inline-block',
                                        paddingBottom: '0.5rem',
                                        borderBottom: '2px solid #FACC15'
                                    }}>
                                        Secretary
                                    </h3>
                                </div>
                                <div style={{
                                    maxWidth: '400px',
                                    margin: '0 auto',
                                    textAlign: 'center'
                                }}>
                                    {conference.committees.secretaries.map((person: CommitteeMember, idx: number) => (
                                        <div key={`sec-${idx}`}>
                                            <div style={{
                                                position: 'relative',
                                                aspectRatio: '1/1.2',
                                                borderRadius: '1.5rem',
                                                overflow: 'hidden',
                                                border: '4px solid #FACC15',
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                                marginBottom: '2rem',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <Image
                                                    src={person.image!}
                                                    alt={person.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            </div>
                                            <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{person.name}</h4>
                                            <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.2rem', marginTop: '0.75rem' }}>{person.role}</p>
                                            <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>{person.affiliation}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </section>
                    )}

                    {/* Convener & Co-Conveners Section */}
                    <section style={{ marginBottom: '8rem' }}>
                        <ScrollReveal>
                            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                                <h3 style={{
                                    fontSize: '2rem',
                                    fontWeight: 800,
                                    color: '#FACC15',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    display: 'inline-block',
                                    paddingBottom: '0.5rem',
                                    borderBottom: '2px solid #FACC15'
                                }}>
                                    Convener & Co-Conveners
                                </h3>
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                                gap: '4rem',
                                maxWidth: '800px',
                                margin: '0 auto',
                                alignItems: 'start'
                            }}>
                                {/* Convener Column */}
                                <div>
                                    {conference.committees.conveners.map((person: CommitteeMember, idx: number) => (
                                        <div key={`conv-${idx}`} style={{ textAlign: 'center', maxWidth: '350px', margin: '0 auto' }}>
                                            <div style={{
                                                position: 'relative',
                                                aspectRatio: '1/1.2',
                                                borderRadius: '1.5rem',
                                                overflow: 'hidden',
                                                border: '4px solid #FACC15',
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                                marginBottom: '2rem',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <Image
                                                    src={person.image!}
                                                    alt={person.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            </div>
                                            <h4 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'white' }}>{person.name}</h4>
                                            <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.2rem', marginTop: '0.75rem' }}>{person.role}</p>
                                            <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '0.5rem' }}>{person.affiliation}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Co-Conveners Column */}
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                    gap: '3rem'
                                }}>
                                    {conference.committees.coConveners.map((person: CommitteeMember, idx: number) => (
                                        <div key={`coconv-${idx}`} style={{ textAlign: 'center', maxWidth: '350px', margin: '0 auto' }}>
                                            <div style={{
                                                position: 'relative',
                                                aspectRatio: '1/1.2',
                                                borderRadius: '1.5rem',
                                                overflow: 'hidden',
                                                border: '4px solid #FACC15',
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                                marginBottom: '2rem',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <Image
                                                    src={person.image!}
                                                    alt={person.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            </div>
                                            <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>{person.name}</h4>
                                            <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>{person.role}</p>
                                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>{person.affiliation}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    </section>

                    {/* Organizing Secretaries Section */}
                    {conference.committees.organizingSecretaries && conference.committees.organizingSecretaries.length > 0 && (
                        <section style={{ marginBottom: '8rem' }}>
                            <ScrollReveal>
                                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                                    <h3 style={{
                                        fontSize: '2rem',
                                        fontWeight: 800,
                                        color: '#FACC15',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        display: 'inline-block',
                                        paddingBottom: '0.5rem',
                                        borderBottom: '2px solid #FACC15'
                                    }}>
                                        Organizing Secretaries
                                    </h3>
                                </div>
                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '3rem',
                                    maxWidth: '1000px',
                                    margin: '0 auto',
                                    justifyContent: 'center'
                                }}>
                                    {conference.committees.organizingSecretaries.map((person: CommitteeMember, idx: number) => (
                                        <div key={`orgsec-${idx}`} style={{ textAlign: 'center' }}>
                                            <div style={{
                                                position: 'relative',
                                                aspectRatio: '1/1.2',
                                                borderRadius: '1.5rem',
                                                overflow: 'hidden',
                                                border: '4px solid #FACC15',
                                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                                                marginBottom: '2rem',
                                                transition: 'transform 0.3s ease'
                                            }}>
                                                <Image
                                                    src={person.image!}
                                                    alt={person.name}
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                                                />
                                            </div>
                                            <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white' }}>{person.name}</h4>
                                            <p style={{ color: '#FACC15', fontWeight: 600, fontSize: '1.1rem', marginTop: '0.75rem' }}>{person.role}</p>
                                            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '0.5rem' }}>{person.affiliation}</p>
                                        </div>
                                    ))}
                                </div>
                            </ScrollReveal>
                        </section>
                    )}

                </div>

                {/* --- OPERATIONAL COMMITTEES --- */}
                <div id="operational" style={{ paddingBottom: '8rem', scrollMarginTop: '6rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '4rem' }}>
                        <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to right, transparent, rgba(250, 204, 21, 0.3))' }}></div>
                        <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#FACC15', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Operational Committees</h2>
                        <div style={{ height: '2px', flex: 1, background: 'linear-gradient(to left, transparent, rgba(250, 204, 21, 0.3))' }}></div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2.5rem',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {/* Registration */}
                        <ScrollReveal>
                            <div
                                style={{
                                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '3rem 2.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(250, 204, 21, 0.15)',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                                className={advisoryStyles.opCard}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#FACC15', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <CheckCircle2 size={24} color="#0B1C35" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FACC15', letterSpacing: '0.05em' }}>Registration</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {conference.committees.registrationCommittee.map((name, idx) => (
                                        <li key={idx} style={{ padding: '0.75rem 0', color: '#f8fafc', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: idx !== conference.committees.registrationCommittee.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FACC15', flexShrink: 0 }}></div>
                                            <span style={{ fontWeight: 500 }}>{String(name)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Hospitality */}
                        <ScrollReveal>
                            <div
                                style={{
                                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '3rem 2.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(250, 204, 21, 0.15)',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                                className={advisoryStyles.opCard}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#FACC15', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <CheckCircle2 size={24} color="#0B1C35" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FACC15', letterSpacing: '0.05em' }}>Hospitality</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {conference.committees.hospitality.map((name, idx) => (
                                        <li key={idx} style={{ padding: '0.75rem 0', color: '#f8fafc', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: idx !== conference.committees.hospitality.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FACC15', flexShrink: 0 }}></div>
                                            <span style={{ fontWeight: 500 }}>{String(name)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Media */}
                        <ScrollReveal>
                            <div
                                style={{
                                    backgroundColor: 'rgba(30, 41, 59, 0.4)',
                                    backdropFilter: 'blur(12px)',
                                    padding: '3rem 2.5rem',
                                    borderRadius: '1.5rem',
                                    border: '1px solid rgba(250, 204, 21, 0.15)',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                                    height: '100%',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                                className={advisoryStyles.opCard}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', gap: '1rem' }}>
                                    <div style={{ backgroundColor: '#FACC15', width: '40px', height: '40px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <CheckCircle2 size={24} color="#0B1C35" />
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FACC15', letterSpacing: '0.05em' }}>Media & Press</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {conference.committees.mediaCommittee.map((name, idx) => (
                                        <li key={idx} style={{ padding: '0.75rem 0', color: '#f8fafc', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: idx !== conference.committees.mediaCommittee.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#FACC15', flexShrink: 0 }}></div>
                                            <span style={{ fontWeight: 500 }}>{String(name)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

            </div>

            <Footer />
        </main>
    );
}
