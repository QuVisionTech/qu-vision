import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <article className="container max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Statement</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 16, 2026</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-4">We collect information you provide directly, such as your name, email address, phone number, company name, and any messages or inquiries submitted through our forms. We also automatically collect usage data including IP addresses, browser type, and pages visited.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">We use collected information to respond to inquiries, provide our services, improve our website, send relevant communications, and comply with legal obligations.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Data Sharing</h2>
        <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share data with trusted service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Data Security</h2>
        <p className="text-muted-foreground mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Your Rights</h2>
        <p className="text-muted-foreground mb-4">You have the right to access, correct, delete, or port your personal data. To exercise these rights, please contact us at privacy@quvision.tech.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Contact Us</h2>
        <p className="text-muted-foreground mb-4">For questions about this Privacy Statement, please contact us at privacy@quvision.tech.</p>
      </article>
    </div>
    <Footer />
  </div>
);

export default Privacy;
