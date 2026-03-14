import { motion } from "framer-motion";
import { Building2, HeartPulse, ShieldCheck, Cpu, Zap } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const industries = [
  { icon: Building2, name: "Finance", description: "Quantum risk modeling, portfolio optimization, and post-quantum security for financial infrastructure." },
  { icon: Cpu, name: "Technology", description: "Quantum algorithm development, hybrid architectures, and quantum cloud integration." },
  { icon: HeartPulse, name: "Healthcare", description: "Drug discovery acceleration, protein folding simulation, and secure health data networks." },
  { icon: ShieldCheck, name: "Security & Defence", description: "Quantum-safe communications, threat modeling, and cryptographic migration for critical systems." },
  { icon: Zap, name: "Energy", description: "Quantum simulation for materials science, grid optimization, and clean energy research." },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24">
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
            Industries
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Domain Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our quantum specialists bring deep industry knowledge to deliver solutions tailored to your sector's unique challenges.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={i + 1}
              className="group p-6 rounded-xl border border-border hover:border-secondary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <industry.icon className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{industry.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
