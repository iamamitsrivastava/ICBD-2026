'use client';
import { conference } from "@/data/conference";
import Header from "@/components/sections/Header";
import Footer from "../../components/sections/Footer";

export default function RegistrationPage() {
    const categories = conference.registration.categories;
    const account = conference.registration.accountDetails;

    return (
        <main style={{ backgroundColor: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
            <Header variant="solid" />
            <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem', maxWidth: '1000px', margin: '0 auto' }}>

                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{
                        color: '#16a34a', // Green-600
                        fontWeight: '700',
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        fontFamily: 'var(--font-heading)'
                    }}>Registration</h1>
                    <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Register for {conference.title} to join the conversation and access all sessions, workshops, and networking events.
                    </p>
                </div>

                {/* Fees Table Section */}
                <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden', marginBottom: '4rem' }}>
                    <div style={{ padding: '2rem', borderBottom: '1px solid #e2e8f0' }}>
                        <h2 style={{ color: '#166534', fontSize: '1.75rem', fontWeight: 'bold' }}>Registration Fees</h2>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead style={{ background: '#f0fdf4' }}>
                                <tr>
                                    <th style={{ padding: '1rem 2rem', borderBottom: '2px solid #e2e8f0', color: '#166534', fontWeight: '600' }}>Category</th>
                                    <th style={{ padding: '1rem 2rem', borderBottom: '2px solid #e2e8f0', color: '#166534', fontWeight: '600', width: '200px' }}>Fee</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((item, index) => (
                                    <tr key={index} style={{ borderBottom: index === categories.length - 1 ? 'none' : '1px solid #e2e8f0' }}>
                                        <td style={{ padding: '1rem 2rem', fontWeight: '500' }}>{item.category}</td>
                                        <td style={{ padding: '1rem 2rem', fontWeight: '700', color: '#16a34a' }}>{item.fee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Bank Details Section */}
                <div style={{ background: 'white', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '2rem', marginBottom: '4rem' }}>
                    <h2 style={{ color: '#166534', fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '2rem' }}>Bank Details for Payment</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Account Name</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0f172a' }}>{account.accountName}</p>
                        </div>
                        <div>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Bank Name</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0f172a' }}>{account.bank}</p>
                        </div>
                        <div>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Account Number</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0f172a' }}>{account.accountNumber}</p>
                        </div>
                        <div>
                            <p style={{ color: '#64748b', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>IFSC Code</p>
                            <p style={{ fontSize: '1.2rem', fontWeight: '600', color: '#0f172a' }}>{account.ifsc}</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </main>
    );
}
