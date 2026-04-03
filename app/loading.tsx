export default function Loading() {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0B1C35',
        }}>
            <div style={{ textAlign: 'center' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    border: '4px solid rgba(250, 204, 21, 0.2)',
                    borderTopColor: '#FACC15',
                    borderRadius: '50%',
                    margin: '0 auto 1.5rem',
                    animation: 'spin 0.8s linear infinite',
                }} />
                <p style={{
                    color: '#94a3b8',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body, system-ui, sans-serif)',
                }}>
                    Loading...
                </p>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
            </div>
        </div>
    );
}
