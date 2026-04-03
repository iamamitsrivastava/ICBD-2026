import Header from "@/components/sections/Header";
import Footer from "../../components/sections/Footer";
import Contact from "@/components/sections/Contact";

export default function ContactPage() {
    return (
        <main style={{ backgroundColor: '#0F172A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header variant="solid" />
            <div style={{ paddingTop: '80px', flex: 1 }}>
                <Contact />
            </div>
            <Footer />
        </main>
    );
}
