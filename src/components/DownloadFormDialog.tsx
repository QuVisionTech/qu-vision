import { useState, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Download, CheckCircle } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const CAPTCHA_SITE_KEY = import.meta.env.VITE_CAPTCHA_SITE_KEY || "";

interface DownloadFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resourceTitle: string;
  downloadUrl?: string;
}

const DownloadFormDialog = ({ open, onOpenChange, resourceTitle, downloadUrl }: DownloadFormDialogProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    industry: "",
    needs: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    if (!captchaToken && CAPTCHA_SITE_KEY) {
      toast({ title: "Please complete the CAPTCHA", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Access granted!", description: "Your download link is ready." });
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      setCaptchaToken(null);
      recaptchaRef.current?.reset();
      setFormData({ name: "", email: "", phone: "", industry: "", needs: "" });
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary">Download Whitepaper</DialogTitle>
          <DialogDescription>{resourceTitle}</DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <CheckCircle className="w-12 h-12 text-secondary mx-auto" />
            <p className="text-sm text-muted-foreground">Thank you! Your download is ready.</p>
            <Button
              variant="hero"
              className="w-full"
              onClick={() => {
                if (downloadUrl) {
                  window.open(downloadUrl, "_blank");
                }
                handleClose(false);
              }}
            >
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Full Name *</label>
              <Input
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                maxLength={100}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email *</label>
              <Input
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                maxLength={255}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Phone</label>
              <Input
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                maxLength={20}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Industry</label>
              <Select onValueChange={(val) => setFormData({ ...formData, industry: val })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="security">Security & Defence</SelectItem>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="energy">Energy</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Your Needs</label>
              <Input
                placeholder="What are you looking for?"
                value={formData.needs}
                onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                maxLength={500}
              />
            </div>

            {CAPTCHA_SITE_KEY && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={CAPTCHA_SITE_KEY}
                  onChange={(token) => setCaptchaToken(token)}
                  onExpired={() => setCaptchaToken(null)}
                />
              </div>
            )}

            <Button variant="hero" type="submit" className="w-full">
              Submit & Get Download Link
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DownloadFormDialog;
