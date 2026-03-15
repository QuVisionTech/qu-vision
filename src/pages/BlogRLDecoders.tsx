import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogRLDecoders = () => {
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
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-secondary/10 text-secondary">Error Correction</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground"><Clock className="w-3 h-3" /> 35 min read</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 leading-tight">
              Agentic RL-Decoders for Fault-Tolerant Quantum Computing
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              Autonomous Error Mitigation and Neural Decoding using QuVision-MCP
            </p>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1} className="prose prose-lg max-w-none">
            <div className="space-y-10 text-foreground">
              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Executive Summary: The Decoding Bottleneck</h2>
                <p className="text-muted-foreground leading-relaxed">
                  In the quest for fault-tolerant quantum computing, the "Surface Code" is the gold standard. However, the classical task of decoding—identifying and correcting errors based on syndrome measurements—often becomes a bottleneck. Traditional algorithmic decoders like Minimum Weight Perfect Matching struggle with real-time speed and noise-model adaptability.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  This whitepaper outlines how QuVision has integrated Deep Reinforcement Learning (RL) decoders—specifically On-Policy V-MPO and Deep Q-Networks (DQN)—into the QuVision-MCP ecosystem, allowing AI agents to autonomously manage the error-correction cycle.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Technical Approach: RL-Driven Quantum Error Correction</h2>
                <h3 className="text-lg font-semibold text-primary mb-3">Neural Decoding Architectures</h3>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">V-MPO:</strong> An on-policy RL agent using a Convolutional DNN + 1-layer LSTM to process syndrome history. The decoder can "remember" previous error states, making it effective against time-correlated noise.</li>
                  <li><strong className="text-foreground">Multi-Action Bernoulli Distributions:</strong> Executes multiple Pauli operations in a single feed-forward pass, significantly reducing correction loop latency.</li>
                  <li><strong className="text-foreground">Dynamic Error-Rate Scaling:</strong> Uses "Curriculum Learning"—begins training at low noise floor (p=0.005) and autonomously scales to higher error rates as performance stabilizes.</li>
                </ul>

                <h3 className="text-lg font-semibold text-primary mb-3 mt-6">The QuVision-MCP Integration</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These RL agents are "wrapped" as MCP tools, enabling an Agentic IDE to perform:
                </p>
                <div className="bg-muted rounded-lg p-6 my-4 space-y-2 font-mono text-sm">
                  <code className="block text-secondary">wideanchor.deploy_rl_decoder(code_type="surface", distance=d)</code>
                  <p className="text-xs text-muted-foreground">Deploy a pre-trained neural decoder optimized for specific hardware topology</p>
                  <code className="block text-secondary mt-3">wideanchor.monitor_syndrome_density()</code>
                  <p className="text-xs text-muted-foreground">Visualize error clusters in real-time within the IDE</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Product Features: The QuV-MCP QEC Module</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-3 font-semibold text-primary">Feature</th>
                        <th className="text-left p-3 font-semibold text-primary">Implementation</th>
                        <th className="text-left p-3 font-semibold text-primary">R&D Benefit</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="p-3 font-medium text-foreground">Async Collector</td>
                        <td className="p-3">Batch-processing of multiple environment inputs</td>
                        <td className="p-3">10x faster decoding simulation</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 font-medium text-foreground">Referee-Aided Training</td>
                        <td className="p-3">Uses a "referee" decoder to guide early policy</td>
                        <td className="p-3">Reduces cold start problem</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 font-medium text-foreground">Fault-Tolerant Scaffolding</td>
                        <td className="p-3">Integration into standard Python wrappers</td>
                        <td className="p-3">Deploy with single command</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Strategic Benefits for R&D Teams</h2>
                <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                  <li><strong className="text-foreground">Hardware-Specific Optimization:</strong> The RL agent "learns" the unique noise fingerprint of a specific QPU, leading to higher logical qubit lifetimes.</li>
                  <li><strong className="text-foreground">Reduced Latency:</strong> Multi-action V-MPO minimizes time between syndrome measurement and corrective action, crucial for preventing error propagation.</li>
                  <li><strong className="text-foreground">Agentic Autonomy:</strong> The AI agent can monitor running jobs, detect error rate increases, and autonomously suggest higher-distance error-correction codes.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">5. The Conv-LSTM "Memory" Advantage</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most decoders treat errors as isolated events. QuVision's approach utilizes a Convolutional Neural Network combined with an LSTM layer. Real-world quantum hardware has "drift" and time-correlated noise. The LSTM gives the decoder a "memory," allowing it to anticipate and correct temporal noise patterns that standard algorithmic decoders simply miss.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">6. Summary: The Turnkey Value Proposition</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                    <thead>
                      <tr className="bg-muted">
                        <th className="text-left p-3 font-semibold text-primary">Traditional QEC</th>
                        <th className="text-left p-3 font-semibold text-primary">QuVision's RL Approach</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-t border-border">
                        <td className="p-3">Requires manual tuning for every hardware noise model</td>
                        <td className="p-3 text-secondary font-medium">Self-Adapting: Learns noise model automatically</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3">Struggles with time-correlated noise</td>
                        <td className="p-3 text-secondary font-medium">LSTM-Enabled: Remembers and predicts error drifts</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3">Slow, iterative single-step correction</td>
                        <td className="p-3 text-secondary font-medium">Multi-Action: Corrects the whole code in one "shot"</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3">Static performance</td>
                        <td className="p-3 text-secondary font-medium">Curriculum-Driven: Constantly improves</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-primary mb-4">7. Live Syndrome-to-Decoder Pipeline</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In a live QPU environment, syndromes are extracted through repetitive parity measurements. The goal is to stream these binary strings without stalling the quantum clock.
                </p>
                <div className="bg-muted rounded-lg p-6 my-4">
                  <h4 className="text-sm font-semibold text-primary mb-3">Phase 1: Syndrome Extraction Layer (Edge)</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-foreground">Component:</strong> Asynchronous Syndrome Buffer</li>
                    <li><strong className="text-foreground">Action:</strong> Hardware controller pushes "Syndrome Volumes" (d × d × T) into a high-speed Redis or Shared-Memory buffer</li>
                    <li><strong className="text-foreground">Advantage:</strong> QuVision's Conv-LSTM thrives on 3D volumes, identifying patterns across both space and time</li>
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

export default BlogRLDecoders;
