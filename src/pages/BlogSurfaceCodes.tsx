import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogSurfaceCodes = () => {
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
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">Error Correction</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> 8 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Surface Codes and the Road to Fault Tolerance
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              How topological quantum error correction is paving the way for reliable quantum computation at scale.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1} className="prose prose-lg max-w-none">
            <div className="space-y-10 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. The Physics of the Scaling "Knob"</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For an Enterprise Architect, the transition from NISQ (Noisy Intermediate-Scale Quantum) to FTQC (Fault-Tolerant Quantum Computing) is essentially a transition from probabilistic outcomes to deterministic infrastructure. "Scaling" isn't just about adding more qubits; it's about managing the <strong className="text-foreground">Physical-to-Logical (P:L) Overhead</strong> while staying below the Fault-Tolerance Threshold.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In Quantum Error Correction (QEC), the "scaling knob" is the <strong className="text-foreground">Code Distance (d)</strong>—the minimum number of physical operations required to transform one logical state into another.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Error Suppression:</strong> For a code with distance d, the system can correct up to t=⌊(d−1)/2⌋ physical errors.</li>
                  <li><strong className="text-foreground">The Exponential Gain:</strong> If the physical error rate (p) is below the code's threshold (p<sub>th</sub>), the logical error rate is suppressed <em>exponentially</em> relative to the distance. Linearly increasing the qubit footprint yields an exponential increase in reliability.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Space-Time Volume & Overhead</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Scaling a quantum algorithm requires accounting for the Space-Time Volume—the total number of physical qubit cycles needed.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Qubit Footprint (Space):</strong> A standard Surface Code logical qubit requires d² data qubits and d²−1 ancilla qubits. For distance d=3 (correcting 1 error), you need 17 physical qubits. For d=31 (required for algorithms like Shor's), you need nearly 2,000 physical qubits per logical qubit.</li>
                  <li><strong className="text-foreground">Cycle Latency (Time):</strong> Each round of syndrome extraction takes finite time (~1 μs for superconducting circuits). The faster the classical decoder processes results, the faster the logical clock speed.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Surface Codes vs. Color Codes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A critical trade-off exists in architectural scaling between the two dominant approaches:
                </p>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-primary font-semibold">Feature</th>
                        <th className="text-left p-3 text-primary font-semibold">Surface Codes</th>
                        <th className="text-left p-3 text-primary font-semibold">Color Codes</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-3 font-medium text-foreground">Connectivity</td>
                        <td className="p-3">2D Nearest Neighbor (Grid)</td>
                        <td className="p-3">Higher-degree (Hexagonal/Triangular)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3 font-medium text-foreground">Threshold</td>
                        <td className="p-3">High (~1% for depolarizing noise)</td>
                        <td className="p-3">Lower (~0.1% to 0.5%)</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3 font-medium text-foreground">Logical Gates</td>
                        <td className="p-3">Complex "Magic State" distillation</td>
                        <td className="p-3">Transversal Clifford gates (Fast)</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-foreground">Scaling Cost</td>
                        <td className="p-3">High qubit overhead per gate</td>
                        <td className="p-3">Lower space-time overhead</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Surface codes are easier to build physically but slower to run logically because they require "Magic State Distillation" for non-Clifford gates. Color codes allow for <strong className="text-foreground">transversal gates</strong>, where a logical operation is performed by applying the same gate to all physical qubits simultaneously—drastically reducing time overhead for deep algorithms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. The Decoding Bottleneck</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A major technical hurdle to scaling is Decoding Latency. As you scale the distance d, syndrome data per second explodes.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Minimum Weight Perfect Matching (MWPM):</strong> The standard algorithm scales as O(n³), which eventually becomes too slow for real-time correction.</li>
                  <li><strong className="text-foreground">Neural Decoders:</strong> Machine learning decoders using CNNs or Reinforcement Learning can "guess" error locations faster than traditional graph-matching algorithms—essential for maintaining logical clock speed at scale.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. The Road Ahead</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As hardware providers push physical error rates below 0.1%, the viability of both surface codes and color codes expands dramatically. The key insight for enterprise architects is that fault tolerance isn't a single milestone—it's a <strong className="text-foreground">continuous scaling curve</strong> where each incremental improvement in code distance, decoder speed, and physical error rates compounds into exponentially more reliable quantum computation.
                </p>
              </section>
            </div>
          </motion.div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogSurfaceCodes;
