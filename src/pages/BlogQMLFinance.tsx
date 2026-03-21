import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogQMLFinance = () => {
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
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">Insights</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">Machine Learning</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> 30 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Quantum ML for Financial Risk Modeling
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Exploring variational quantum algorithms for portfolio optimization and Monte Carlo simulations in quantitative finance.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1} className="prose prose-lg max-w-none">
            <div className="space-y-10 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">I. The Problem: The NP-Hard Geometry of Optimization</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In classical computational finance, aligning multiple risk factors and optimizing across large portfolios is a combinatorial nightmare. As you add more assets, the number of possible allocations grows factorially. Classical solvers like gradient descent often get stuck in local minima, leading to suboptimal hedging strategies.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Quantum approaches reframe these "impossible" problems into <strong className="text-foreground">QUBO (Quadratic Unconstrained Binary Optimization)</strong> forms that quantum hardware can tackle natively.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">II. The Quantum Pivot: From Variables to QUBO</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Instead of searching for optimal allocations iteratively, we treat the entire portfolio as a single graph and map the optimization objective to the energy state of a quantum system.
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Data Qubits:</strong> Represent potential portfolio positions and asset allocations.</li>
                  <li><strong className="text-foreground">Constraints:</strong> Penalty terms enforce risk limits, position sizing rules, and regulatory constraints as energy penalties in the Hamiltonian.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">III. Implementation: The Frank-Wolfe Hybrid Approach</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Following the QuVision Q-FW (Quantum Frank-Wolfe) framework, the full problem isn't solved entirely on a noisy QPU. Instead, we use a hybrid loop:
                </p>
                <div className="bg-muted rounded-lg p-6 my-6">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p><span className="text-secondary font-semibold">1. Classical:</span> Calculate the gradient of the portfolio loss function using standard risk metrics (VaR, CVaR).</p>
                    <p><span className="text-secondary font-semibold">2. Quantum:</span> Use a D-Wave Advantage system to solve the resulting linear sub-problem—the "hard" combinatorial part.</p>
                    <p><span className="text-secondary font-semibold">3. Iteration:</span> Repeat until the global optimum is reached, with each quantum step refining the classical solution.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">IV. Enterprise "Shadow Mode" Integration</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  For enterprise architects, this isn't science fiction. By running in <strong className="text-foreground">"Shadow Mode"</strong>—where your classical pipeline remains the source of truth but a quantum-assisted layer suggests optimizations—you can achieve measurable improvements:
                </p>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">15–20% increase</strong> in portfolio alignment precision for complex multi-asset strategies.</li>
                  <li><strong className="text-foreground">Faster Monte Carlo convergence</strong> using quantum amplitude estimation versus classical sampling.</li>
                  <li><strong className="text-foreground">Subtle pattern detection</strong> in fraud and risk scenarios that classical transformers might overlook.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">V. Content Pillars for Quantum Finance</h2>
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 text-primary font-semibold">Pillar</th>
                        <th className="text-left p-3 text-primary font-semibold">Focus</th>
                        <th className="text-left p-3 text-primary font-semibold">Example Topic</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-3 font-medium text-foreground">The Optimizer</td>
                        <td className="p-3">Low-level hardware benchmarks</td>
                        <td className="p-3">Benchmarking D-Wave Advantage 6.4 for Graph Matching</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3 font-medium text-foreground">The Architect</td>
                        <td className="p-3">Hybrid system design</td>
                        <td className="p-3">Orchestrating Quantum Kernels within LangGraph Workflows</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-foreground">The Visionary</td>
                        <td className="p-3">Future-looking applications</td>
                        <td className="p-3">Quantum-Enhanced Non-Maximum Suppression for Dense Object Detection</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">Summary</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The quantum approach to financial risk modeling follows a consistent 4-step logic: identify the classical <strong className="text-foreground">bottleneck</strong> suffering from combinatorial explosion, <strong className="text-foreground">map</strong> it to an Ising Hamiltonian or QUBO matrix, select the <strong className="text-foreground">solver</strong> (D-Wave Annealers, IBM Gate-based, QAOA), and always conclude with how the quantum part integrates into a classical PyTorch or AWS Braket pipeline. This hybrid reality is the practical path forward.
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

export default BlogQMLFinance;