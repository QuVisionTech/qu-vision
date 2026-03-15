import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogAgenticMiddleware = () => {
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
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">Whitepaper</span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-accent/10 text-accent">Quantum Computing</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> 25 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Agentic Middleware for Quantum-Accelerated R&D
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              How QuVision-MCP (QuV-MCP) Bridges the "Quantum Chasm" for Enterprise Research.
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1} className="prose prose-lg max-w-none">
            <div className="space-y-10 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. The Challenge: The R&D "Quantum Chasm"</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  While working with our R&D partners, we identified a recurring bottleneck. Even with access to state-of-the-art QPUs, an Expertise Gap prevented meaningful adoption. Researchers were forced to act as "Human Compilers"—manually managing circuit transpilation, noise profiles, and backend queues.
                </p>
                <h3 className="text-lg font-semibold text-primary mb-3">The "Pain Points" we solved:</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Semantic Disconnect:</strong> AI Agents could write Python but were "blind" to live quantum hardware status.</li>
                  <li><strong className="text-foreground">Context Fragmentation:</strong> Developers had to manually feed noise models into prompts, leading to hallucinated gate mappings.</li>
                  <li><strong className="text-foreground">The Governance Risk:</strong> Automated loops risked burning thousands of dollars in QPU credits through unoptimized retry loops or "Puppet Attacks."</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. The Solution: QuVision-MCP (QuV-MCP)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We built QuV-MCP, a production-ready Model Context Protocol server. It transforms an AI agent from a "code suggester" into a <strong className="text-foreground">Quantum Architect</strong> by exposing quantum capabilities as native semantic tools.
                </p>
                <h3 className="text-lg font-semibold text-primary mb-3">Core Architectural Pillars</h3>
                <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Intent-to-Circuit Engine:</strong> Converts high-level goals (e.g., "Optimize this portfolio") into hardware-specific OpenQASM.</li>
                  <li><strong className="text-foreground">Hardware-Aware Orchestration:</strong> Dynamically selects backends (IBM, IonQ, AWS) based on a Heuristic Fidelity Score.</li>
                  <li><strong className="text-foreground">Zero-Noise Extrapolation (ZNE) Layer:</strong> Automatically applies error mitigation before the agent receives data, ensuring "clean" results for classical gradient descent.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Technical Implementation & Developer Workflow</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To ensure adoption, we implemented a "One-Minute Setup" that embeds these capabilities directly into the IDE.
                </p>
                <div className="bg-muted rounded-lg p-6 my-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Fast-Path Onboarding</h4>
                  <div className="space-y-2 text-sm text-muted-foreground font-mono">
                    <p><span className="text-secondary">Step 1 — Install:</span> Register the MCP Server</p>
                    <code className="block bg-background rounded p-2 text-xs">claude mcp add wideanchor -- command "npx @quvision/server"</code>
                    <p className="mt-3"><span className="text-secondary">Step 2 — Configure:</span> Drop the Rulebook</p>
                    <code className="block bg-background rounded p-2 text-xs">Save quantum.mdc to .cursor/rules/</code>
                    <p className="mt-3"><span className="text-secondary">Step 3 — Execute:</span> Trigger the Agent</p>
                    <code className="block bg-background rounded p-2 text-xs">Type: "Find a quantum speedup for this ML model."</code>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Strategic Benefits for Teams</h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Rapid Prototyping:</strong> Reduces "Hello World" on real hardware from hours to seconds.</li>
                  <li><strong className="text-foreground">Abstracted Complexity:</strong> R&D researchers focus on domain logic; the MCP handles the physics.</li>
                  <li><strong className="text-foreground">Agentic Autonomy:</strong> AI agents can "loop" (Design → Simulate → Test → Refactor) until the circuit meets target accuracy.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Developer Assets: The "Brain" of the Agent</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We provide pre-configured rules to ensure the AI follows R&D best practices without manual prompting.
                </p>
                <div className="bg-muted rounded-lg p-6 my-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">Wideanchor Quantum Standards</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Discovery:</strong> Use <code className="bg-background px-1.5 py-0.5 rounded text-xs">wideanchor.check_quantum_utility()</code> before coding.</li>
                    <li><strong className="text-foreground">Hardware:</strong> Always query <code className="bg-background px-1.5 py-0.5 rounded text-xs">wideanchor.get_backend_status()</code> for queue times.</li>
                    <li><strong className="text-foreground">Error Mitigation:</strong> Wrap all hardware jobs in the ZNE layer.</li>
                  </ul>
                </div>
              </section>
            </div>
          </motion.div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogAgenticMiddleware;
