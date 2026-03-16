import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CookieNoticePage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <article className="container max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Cookie Notice</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 16, 2026</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">What Are Cookies</h2>
        <p className="text-muted-foreground mb-4">Cookies are small text files placed on your device when you visit our website. They help us provide you with a better experience and allow certain features to function.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Types of Cookies We Use</h2>
        <p className="text-muted-foreground mb-2"><strong className="text-foreground">Necessary Cookies:</strong> Required for the website to function properly. These cannot be disabled.</p>
        <p className="text-muted-foreground mb-2"><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting anonymous usage data.</p>
        <p className="text-muted-foreground mb-4"><strong className="text-foreground">Marketing Cookies:</strong> Used to deliver personalized advertisements and measure campaign effectiveness.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Managing Your Preferences</h2>
        <p className="text-muted-foreground mb-4">You can manage your cookie preferences at any time by clicking the "Cookie Preferences" link in the footer or adjusting your browser settings.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Contact Us</h2>
        <p className="text-muted-foreground mb-4">For questions about our cookie practices, please contact us at privacy@quvision.tech.</p>
      </article>
    </div>
    <Footer />
  </div>
);

export default CookieNoticePage;
