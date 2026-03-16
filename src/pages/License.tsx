import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const License = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-24 pb-16">
      <article className="container max-w-3xl prose prose-slate">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">License Agreements</h1>
        <p className="text-muted-foreground mb-6">Last updated: March 16, 2026</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Software Licenses</h2>
        <p className="text-muted-foreground mb-4">QuVision.tech software and tools are provided under specific license agreements. Each product or service may be governed by its own license terms, which will be provided at the time of purchase or download.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Open Source Components</h2>
        <p className="text-muted-foreground mb-4">Certain components of our software may include open-source software subject to their respective licenses. A list of open-source components and their licenses is available upon request.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Restrictions</h2>
        <p className="text-muted-foreground mb-4">Unless explicitly authorized, you may not reverse engineer, decompile, or create derivative works based on our proprietary software or documentation.</p>

        <h2 className="text-xl font-bold text-primary mt-8 mb-4">Contact</h2>
        <p className="text-muted-foreground mb-4">For licensing inquiries, contact us at licensing@quvision.tech.</p>
      </article>
    </div>
    <Footer />
  </div>
);

export default License;
