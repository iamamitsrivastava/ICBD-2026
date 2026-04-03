import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Travel from '@/components/sections/Travel';

export const metadata = {
    title: 'Travel & Accommodation | ICBD-2026',
    description: 'Travel information and accommodation options for ICBD-2026 conference at Parul University.',
};

export default function TravelPage() {
    return (
        <main>
            <Header variant="solid" />
            <div style={{ paddingTop: '80px' }}> {/* Space for fixed header */}
                <Travel />
            </div>
            <Footer />
        </main>
    );
}
