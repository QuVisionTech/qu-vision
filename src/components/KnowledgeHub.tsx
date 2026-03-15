import { useState } from "react";
import { motion } from "framer-motion";
import { FileText, BookOpen, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
import DownloadFormDialog from "@/components/DownloadFormDialog";

const resources = [
  {
    type: "whitepaper",
    tag: "Whitepaper",
    title: "Agentic Middleware for Quantum-Accelerated R&D",
    description: "How QuVision-MCP (QuV-MCP) bridges the 'Quantum Chasm' for enterprise research — from intent to hardware-specific circuits.",
    category: "Quantum Computing",
    readTime: "25 min read",
    blogUrl: "/blog/agentic-middleware-quv-mcp",
    downloadUrl: "/whitepapers/agentic-middleware-quv-mcp.pdf",
  },
  {
    type: "whitepaper",
    tag: "Whitepaper",
    title: "Agentic RL-Decoders for Fault-Tolerant Quantum Computing",
    description: "Autonomous error mitigation and neural decoding using QuVision-MCP — integrating deep RL decoders into the QEC cycle.",
    category: "Error Correction",
    readTime: "35 min read",
    blogUrl: "/blog/rl-decoders-fault-tolerant-qc",
    downloadUrl: "/whitepapers/rl-decoders-fault-tolerant-qc.pdf",
  },
  {
    type: "blog",
    tag: "Research",
    title: "Post-Quantum Cryptography Migration Guide",
    description: "A comprehensive framework for transitioning enterprise systems to quantum-resistant cryptographic standards before Q-Day.",
    category: "Cryptography",
    readTime: "25 min read",
  },
  {
    type: "blog",
    tag: "Research",
    title: "Surface Codes and the Road to Fault Tolerance",
    description: "How topological quantum error correction is paving the way for reliable quantum computation at scale.",
    category: "Error Correction",
    readTime: "8 min read",
  },
  {
    type: "blog",
    tag: "Insights",
    title: "Quantum ML for Financial Risk Modeling",
    description: "Exploring variational quantum algorithms for portfolio optimization and Monte Carlo simulations in quantitative finance.",
    category: "Machine Learning",
    readTime: "30 min read",
  },
  {
    type: "blog",
    tag: "Insights",
    title: "Hybrid Quantum-Classical Architectures",
    description: "Why the near-term future of quantum computing lies in intelligent integration with classical systems.",
    category: "Machine Learning",
    readTime: "10 min read",
  },
];

const categoryColor: Record<string, string> = {
  "Quantum Computing": "bg-accent/10 text-accent",
  Cryptography: "bg-accent/10 text-accent",
  "Error Correction": "bg-secondary/10 text-secondary",
  "Machine Learning": "bg-secondary/10 text-secondary",
};

const KnowledgeHub = () => {
  const [downloadDialog, setDownloadDialog] = useState<{ open: boolean; title: string; downloadUrl: string }>({
    open: false,
    title: "",
    downloadUrl: "",
  });

  return (
    <section id="knowledge" className="py-24">
      <div className="container max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4 block">
            Knowledge Hub
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Insights & Research
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whitepapers and articles from our quantum research team — bridging the gap between theory and enterprise application.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, i) => (
            <motion.article
              key={resource.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={i + 1}
              className="group card-glow-primary rounded-xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor[resource.category]}`}>
                  {resource.category}
                </span>
                <span className="text-xs text-muted-foreground">{resource.readTime}</span>
              </div>

              <div className="flex items-start gap-3 mb-3">
                {resource.type === "whitepaper" ? (
                  <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                ) : (
                  <BookOpen className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                )}
                <h3 className="text-base font-bold text-primary leading-snug">
                  {resource.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                {resource.description}
              </p>

              <div className="flex items-center gap-3">
                {resource.type === "whitepaper" && (
                  <>
                    <Button
                      variant="ghost"
                      className="p-0 text-sm text-secondary hover:bg-transparent hover:gap-3 gap-2 transition-all"
                      onClick={() =>
                        setDownloadDialog({ open: true, title: resource.title, downloadUrl: resource.downloadUrl || "" })
                      }
                    >
                      Download PDF
                      <Download className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="ghost"
                      className="p-0 text-sm text-accent hover:bg-transparent hover:gap-3 gap-2 transition-all"
                      asChild
                    >
                      <a href={resource.blogUrl}>
                        Read Blog
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  </>
                )}
                {resource.type === "blog" && (
                  <Button
                    variant="ghost"
                    className="p-0 text-sm text-secondary hover:bg-transparent hover:gap-3 gap-2 transition-all"
                  >
                    Read Article
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <DownloadFormDialog
        open={downloadDialog.open}
        onOpenChange={(open) => setDownloadDialog({ ...downloadDialog, open })}
        resourceTitle={downloadDialog.title}
        downloadUrl={downloadDialog.downloadUrl}
      />
    </section>
  );
};

export default KnowledgeHub;
