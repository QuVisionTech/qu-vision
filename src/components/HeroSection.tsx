import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-quantum.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden hero-bg">
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 particle-bg" />

      <div className="container max-w-6xl relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-secondary/80 mb-6">
              Quantum Computing Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Engineering the{" "}
              <span className="text-gradient">Quantum Future</span>
            </h1>
            <p className="text-lg text-primary-foreground/70 max-w-lg mb-10 leading-relaxed">
              QuVision.tech delivers enterprise quantum solutions across cryptography, 
              error correction, and machine learning — helping organizations harness 
              quantum advantage today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="#contact">Request Consultation</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#solutions">Explore Solutions</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Abstract qubit visualization */}
              <div className="absolute inset-0 rounded-full border border-secondary/20 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-6 rounded-full border border-accent/15 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              <div className="absolute inset-12 rounded-full border border-secondary/25 animate-spin" style={{ animationDuration: "10s" }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-secondary shadow-lg shadow-secondary/50 animate-float" />
              </div>
              {/* Orbital dots */}
              {[0, 60, 120, 180, 240, 300].map((deg) => (
                <div
                  key={deg}
                  className="absolute w-2 h-2 rounded-full bg-secondary/40"
                  style={{
                    top: `${50 + 42 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 42 * Math.cos((deg * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
