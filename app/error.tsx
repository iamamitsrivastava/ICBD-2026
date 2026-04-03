'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Unhandled error:', error);
    }, [error]);

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
            <div style={{ textAlign: 'center', maxWidth: '500px' }}>
                <div style={{
                    fontSize: '4rem',
                    marginBottom: '1rem',
                    opacity: 0.6,
                }}>⚠️</div>

                <h1 style={{
                    fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading, serif)',
                    marginBottom: '1rem',
                    letterSpacing: '0.02em',
                }}>
                    Something Went Wrong
                </h1>

                <p style={{
                    color: '#94a3b8',
                    fontSize: '1.05rem',
                    lineHeight: 1.6,
                    marginBottom: '2rem',
                }}>
                    An unexpected error occurred. Our team has been notified.
                    Please try again or return to the homepage.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button
                        onClick={() => reset()}
                        style={{
                            padding: '0.85rem 2rem',
                            borderRadius: '9999px',
                            background: 'linear-gradient(135deg, #FACC15, #d4af37)',
                            color: '#0B1C35',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, box-shadow 0.2s',
                        }}
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        style={{
                            padding: '0.85rem 2rem',
                            borderRadius: '9999px',
                            border: '2px solid rgba(250, 204, 21, 0.4)',
                            color: '#FACC15',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            textDecoration: 'none',
                            transition: 'transform 0.2s',
                        }}
                    >
                        Go Home
                    </Link>
                </div>

                {error.digest && (
                    <p style={{
                        marginTop: '2rem',
                        fontSize: '0.75rem',
                        color: '#475569',
                    }}>
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
    );
}
