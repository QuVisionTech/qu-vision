import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPQCMigration = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <article className="container max-w-3xl">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
            <Button variant="ghost" className="mb-8 text-muted-foreground" asChild>
              <a href="/knowledge"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Knowledge Hub</a>
            </Button>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">Research</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">Cryptography</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> 25 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Post-Quantum Cryptography Migration Guide
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              A comprehensive framework for transitioning enterprise systems to quantum-resistant cryptographic standards before Q-Day.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1} className="prose prose-lg max-w-none">
            <div className="space-y-10 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. The Core Challenge: Crypto-Agility</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In the evolving landscape of cybersecurity, the arrival of cryptographically relevant quantum computers (CRQC)—often termed Q-Day—poses a systemic risk to the asymmetric encryption (RSA, ECC) that secures our digital economy. The transition to PQC is not a simple "patch and forget" update.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Because PQC algorithms have significantly different key sizes and signature lengths compared to classical methods, systems must be designed for <strong className="text-foreground">crypto-agility</strong>. The PQCrypto framework addresses this by integrating a fork of the Go 1.17.6 standard library with the Open Quantum Safe (OQS) library (liboqs), allowing developers to swap classical primitives for quantum-resistant ones without rebuilding the entire application logic.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Selecting the Right Algorithms</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Current enterprise strategies should focus on NIST Round 3 finalists and established national standards:
                </p>
                <h3 className="text-lg font-semibold text-primary mb-3">Lattice-Based Signatures</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                  <li><strong className="text-foreground">CRYSTALS-Dilithium:</strong> Preferred for general-purpose digital signatures due to its balanced performance.</li>
                  <li><strong className="text-foreground">Falcon:</strong> Ideal for environments with strict bandwidth constraints, producing the smallest signature sizes.</li>
                </ul>
                <h3 className="text-lg font-semibold text-primary mb-3">Multivariate Cryptography</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                  <li><strong className="text-foreground">Rainbow:</strong> Useful for specific high-performance verification needs, though it requires larger public keys.</li>
                </ul>
                <h3 className="text-lg font-semibold text-primary mb-3">National Standards (SM Series)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  For organizations with global operations, integrating PQC with Chinese national commercial algorithms like SM2, SM3, and SM4 is essential for regulatory compliance and cross-border interoperability.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Step-by-Step Migration Roadmap</h2>

                <h3 className="text-lg font-semibold text-primary mb-3">Phase I: Inventory and Assessment</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">Identify every instance of public-key cryptography in your stack:</p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-6">
                  <li><strong className="text-foreground">Data-at-Rest:</strong> Focus on long-term sensitive data that could be subject to "Harvest Now, Decrypt Later" attacks.</li>
                  <li><strong className="text-foreground">Data-in-Transit:</strong> Inventory TLS terminators, VPNs, and internal service-to-service communication.</li>
                </ul>

                <h3 className="text-lg font-semibold text-primary mb-3">Phase II: Infrastructure Adaptation</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">To begin testing, organizations can leverage the PQCrypto environment to simulate a "Shadow Mode" migration:</p>
                <div className="bg-muted rounded-lg p-6 my-6">
                  <div className="space-y-2 text-sm text-muted-foreground font-mono">
                    <p><span className="text-secondary">Step 1 — Environment Setup:</span> Ubuntu 18.04+ with Go 1.17.6+</p>
                    <p><span className="text-secondary">Step 2 — Library Integration:</span> Integrate liboqs-go wrappers for quantum-safe C implementations</p>
                    <p><span className="text-secondary">Step 3 — Namespace Management:</span> Use explicit package aliases to avoid conflicts during the hybrid period</p>
                    <code className="block bg-background rounded p-2 text-xs mt-2">import dilithium2 "crypto/pqc/dilithium/dilithium2"</code>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-primary mb-3">Phase III: PKI and Certificate Migration</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Hybrid Certificates:</strong> Issue certificates containing both an RSA/ECC key and a PQC key (Dilithium or Falcon). Legacy systems still function while quantum-ready systems use PQC.</li>
                  <li><strong className="text-foreground">Format Conversion:</strong> Use PKCS#8 standards for private key storage to ensure compatibility across cryptographic modules.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Implementation Example: Quantum-Safe Signing</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Using the PQCrypto library, a standard signing workflow transitions from classical ECDSA to a quantum-safe variant like Falcon-512:
                </p>
                <div className="bg-muted rounded-lg p-6 my-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Go — Falcon-512 Signing</h4>
                  <pre className="bg-background rounded p-4 text-xs text-muted-foreground overflow-x-auto">
{`import (
  falcon512 "crypto/pqc/falcon/falcon512"
)

// Generate Keypair
pub, priv, err := falcon512.GenerateKey(rand.Reader)

// Sign Message
signature, err := falcon512.Sign(rand.Reader, priv, message)`}
                  </pre>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Looking Toward Q-Day</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Migration is a multi-year journey. Enterprises should prioritize:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Upgrading PKI:</strong> Transitioning your Certificate Authority to support PQC-signed certificates.</li>
                  <li><strong className="text-foreground">Blockchain & Ledger Security:</strong> Updating digital wallet signatures to prevent future asset theft.</li>
                  <li><strong className="text-foreground">Continuous Monitoring:</strong> Keeping pace with NIST Round 4 adjustments and new hardware-accelerated implementations.</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPQCMigration;