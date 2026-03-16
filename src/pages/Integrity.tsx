import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Integrity = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <article className="container max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Integrity & Compliance</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 16, 2026</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Our Commitment</h2>
        <p className="text-muted-foreground mb-4">QuVision.tech is committed to conducting business with the highest standards of integrity, transparency, and ethical behavior. We comply with all applicable laws and regulations in every jurisdiction where we operate.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Anti-Corruption</h2>
        <p className="text-muted-foreground mb-4">We maintain a zero-tolerance policy towards bribery and corruption. All employees and partners are required to comply with applicable anti-corruption laws.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Data Protection</h2>
        <p className="text-muted-foreground mb-4">We adhere to global data protection standards and regulations, including GDPR and CCPA, to ensure the privacy and security of personal information.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Reporting Concerns</h2>
        <p className="text-muted-foreground mb-4">If you become aware of any conduct that may violate our policies or applicable law, please report it to compliance@quvision.tech. All reports are treated confidentially.</p>
      </article>
    </div>
    <Footer />
  </div>
);

export default Integrity;
