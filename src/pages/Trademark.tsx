import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Trademark = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <article className="container max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Trademark Usage Guidelines</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 16, 2026</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">QuVision.tech Trademarks</h2>
        <p className="text-muted-foreground mb-4">The QuVision.tech name, logo, and related marks are trademarks of QuVision Technologies. These guidelines govern the use of our trademarks by third parties.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Permitted Use</h2>
        <p className="text-muted-foreground mb-4">You may use our trademarks to truthfully refer to or link to our products and services, provided you do not imply endorsement or affiliation without authorization.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Prohibited Use</h2>
        <p className="text-muted-foreground mb-4">You may not use our trademarks in a manner that is misleading, defamatory, or in connection with any product or service that is not ours. Modification of our logos or marks is not permitted.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Contact</h2>
        <p className="text-muted-foreground mb-4">For trademark usage inquiries, contact us at legal@quvision.tech.</p>
      </article>
    </div>
    <Footer />
  </div>
);

export default Trademark;
