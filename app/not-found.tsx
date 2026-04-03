import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0B1C35 0%, #1e293b 100%)',
            color: 'white',
            fontFamily: 'var(--font-body, system-ui, sans-serif)',
            padding: '2rem',
        }}>
            <div style={{ textAlign: 'center', maxWidth: '520px' }}>
                <div style={{
                    fontSize: '6rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-heading, serif)',
                    background: 'linear-gradient(135deg, #FACC15, #d4af37)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                }}>
                    404
                </div>

                <h1 style={{
                    fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                    fontWeight: 700,
                    fontFamily: 'var(--font-heading, serif)',
                    marginBottom: '1rem',
                }}>
                    Page Not Found
                </h1>

                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    marginBottom: '2.5rem',
                }}>
                    The page you are looking for does not exist or has been moved.
                    Let us take you back to the conference.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        href="/"
                        style={{
                            padding: '0.85rem 2.5rem',
                            borderRadius: '9999px',
                            background: 'linear-gradient(135deg, #FACC15, #d4af37)',
                            color: '#0B1C35',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                        }}
                    >
                        Back to Home
                    </Link>

                    <Link
                        href="/contact"
                        style={{
                            padding: '0.85rem 2.5rem',
                            borderRadius: '9999px',
                            border: '2px solid rgba(250, 204, 21, 0.4)',
                            color: '#FACC15',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                        }}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
