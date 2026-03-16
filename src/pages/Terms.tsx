import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Terms = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <article className="container max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 16, 2026</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground mb-4">By accessing and using the QuVision.tech website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. Use of Services</h2>
        <p className="text-muted-foreground mb-4">You agree to use our services only for lawful purposes and in accordance with these terms. You may not use our services in any way that could damage, disable, or impair the website.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. Intellectual Property</h2>
        <p className="text-muted-foreground mb-4">All content, trademarks, and intellectual property on this website are owned by QuVision.tech or its licensors. You may not reproduce, distribute, or create derivative works without prior written consent.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">QuVision.tech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. Governing Law</h2>
        <p className="text-muted-foreground mb-4">These terms shall be governed by the laws of the State of Georgia, United States, without regard to conflict of law principles.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Contact</h2>
        <p className="text-muted-foreground mb-4">For questions regarding these terms, contact us at legal@quvision.tech.</p>
      </article>
    </div>
    <Footer />
  </div>
);

export default Terms;
