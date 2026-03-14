import { motion } from "framer-motion";
import { Shield, Cpu, BrainCircuit, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp } from "@/lib/animations";
  {
    icon: Shield,
    title: "Quantum Cryptography",
    description: "Future-proof your security with post-quantum cryptographic solutions. We implement lattice-based, hash-based, and code-based algorithms to protect against quantum threats.",
    features: ["Post-Quantum Key Exchange", "Quantum Key Distribution (QKD)", "Crypto-Agility Assessment", "Migration Roadmaps"],
    glowClass: "card-glow-indigo",
    accentColor: "text-accent",
    badgeColor: "bg-accent/10 text-accent",
  },
  {
    icon: Cpu,
    title: "Quantum Error Correction",
    description: "Enhance quantum computation reliability with our proprietary error correction protocols. Minimize decoherence and maximize qubit fidelity for practical quantum advantage.",
    features: ["Surface Code Implementation", "Fault-Tolerant Protocols", "Noise Characterization", "Logical Qubit Optimization"],
    glowClass: "card-glow-teal",
    accentColor: "text-secondary",
    badgeColor: "bg-secondary/10 text-secondary",
  },
  {
    icon: BrainCircuit,
    title: "Quantum Machine Learning",
    description: "Leverage quantum-enhanced ML models for exponential speedups in classification, optimization, and generative tasks across industries.",
    features: ["Variational Quantum Eigensolvers", "Quantum Neural Networks", "Hybrid Classical-Quantum Pipelines", "Quantum Feature Maps"],
    glowClass: "card-glow-teal",
    accentColor: "text-secondary",
    badgeColor: "bg-secondary/10 text-secondary",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 section-alt">
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
            Our Solutions
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Quantum-Ready Technology
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enterprise solutions across three pillars of quantum computing — securing today's infrastructure while building tomorrow's quantum advantage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={i + 1}
              className={`${solution.glowClass} rounded-xl p-8 hover:shadow-lg transition-shadow duration-300`}
            >
              <div className={`w-12 h-12 rounded-lg ${solution.badgeColor} flex items-center justify-center mb-6`}>
                <solution.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{solution.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <ArrowRight className={`w-3 h-3 ${solution.accentColor} flex-shrink-0`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="ghost" className={`p-0 ${solution.accentColor} hover:bg-transparent hover:gap-3 gap-2 transition-all`}>
                Learn more <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
