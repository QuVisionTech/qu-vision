import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { fadeInUp, fadeIn } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle, Users, Lightbulb, Globe, Upload } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY || "";

const teamValues = [
  { icon: Lightbulb, title: "Innovation First", description: "We push the boundaries of what's possible in quantum computing, turning theoretical breakthroughs into practical enterprise solutions." },
  { icon: Users, title: "Collaborative Excellence", description: "Our diverse team of physicists, engineers, and domain experts work together to solve the hardest problems in quantum technology." },
  { icon: Globe, title: "Global Impact", description: "From Atlanta to Bangalore to Kuala Lumpur, we're building a quantum-ready future for organizations worldwide." },
];

const Team = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    interest: "",
    info: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.interest) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!captchaToken && CAPTCHA_SITE_KEY) {
      toast({ title: "Please complete the CAPTCHA", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Application submitted!", description: "We'll review your application and get back to you soon." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero intro */}
      <section className="pt-24 pb-16 hero-bg text-primary-foreground">
        <div className="container max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4 block">Our Team</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Engineering the <span className="text-secondary">Quantum Future</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
              QuVision.tech brings together world-class researchers, engineers, and industry experts united by a shared mission: 
              making quantum computing accessible and impactful for enterprises worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={0} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Drives Us</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our culture is built on curiosity, collaboration, and a relentless pursuit of quantum advantage.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamValues.map((v, i) => (
              <motion.div key={v.title} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} custom={i + 1} className="card-glow-primary rounded-xl p-8 text-center">
                <v.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="text-lg font-bold text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join our team form */}
      <section className="py-20 section-alt">
        <div className="container max-w-2xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <span className="text-sm font-semibold tracking-widest uppercase text-secondary mb-4 block">Careers</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Join Our Team</h2>
            <p className="text-muted-foreground text-lg">
              We're always looking for exceptional talent. Share your interest and we'll be in touch.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
              <p className="text-muted-foreground">We've received your application and will review it shortly.</p>
            </motion.div>
          ) : (
            <motion.form initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} onSubmit={handleSubmit} className="space-y-6 card-glow-primary rounded-xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name *</label>
                  <Input placeholder="Jane Smith" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} maxLength={100} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email *</label>
                  <Input type="email" placeholder="jane@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} maxLength={255} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Area of Interest *</label>
                <Select onValueChange={(val) => setFormData({ ...formData, interest: val })}>
                  <SelectTrigger><SelectValue placeholder="Select area of interest" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quantum-engineering">Quantum Engineering</SelectItem>
                    <SelectItem value="quantum-research">Quantum Research</SelectItem>
                    <SelectItem value="software-engineering">Software Engineering</SelectItem>
                    <SelectItem value="machine-learning">Machine Learning</SelectItem>
                    <SelectItem value="product-management">Product Management</SelectItem>
                    <SelectItem value="business-development">Business Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Tell Us About Yourself</label>
                <Textarea placeholder="Your background, experience, and what excites you about quantum computing..." rows={5} value={formData.info} onChange={(e) => setFormData({ ...formData, info: e.target.value })} maxLength={2000} />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Resume / CV</label>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-background cursor-pointer hover:border-primary/40 transition-colors text-sm text-muted-foreground">
                    <Upload className="w-4 h-4" />
                    {resumeFile ? resumeFile.name : "Choose file"}
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                    />
                  </label>
                  {resumeFile && (
                    <button type="button" onClick={() => setResumeFile(null)} className="text-xs text-muted-foreground hover:text-destructive">Remove</button>
                  )}
                </div>
                <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (max 5MB)</p>
              </div>

              {CAPTCHA_SITE_KEY && (
                <div className="flex justify-center">
                  <ReCAPTCHA ref={recaptchaRef} sitekey={CAPTCHA_SITE_KEY} onChange={(token) => setCaptchaToken(token)} onExpired={() => setCaptchaToken(null)} />
                </div>
              )}

              <Button variant="hero" size="lg" type="submit" className="w-full">
                <Send className="w-4 h-4" />
                Submit Application
              </Button>
            </motion.form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;
