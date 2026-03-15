import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const contactInfo = [
    { icon: MapPin, labelKey: "footer.address", value: "123 Business Avenue, London, EC2A 1BB" },
    { icon: Phone, labelKey: "footer.phone", value: "(555) 123-4567" },
    { icon: Mail, labelKey: "footer.email", value: "hello@pineco.com" },
    { icon: Clock, labelKey: "footer.hours", value: "Mon–Fri: 9am–6pm" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: t("contact.missingFields"), description: t("contact.missingFieldsDesc"), variant: "destructive" });
      return;
    }
    toast({ title: t("contact.messageSent"), description: t("contact.messageSentDesc") });
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="bg-background">
      <Navbar />
      <div className="pt-28 pb-12 container mx-auto px-4 lg:px-8 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          {t("contact.title")} <span className="text-gradient-primary">{t("contact.titleHighlight")}</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
      </div>

      <section className="pb-24 container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-2xl p-8 card-elevated">
            <h2 className="font-heading text-2xl font-bold text-card-foreground mb-6">{t("contact.sendMessage")}</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.yourName")}</label>
                  <Input placeholder={t("contact.namePlaceholder")} className="rounded-lg" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.email")}</label>
                  <Input type="email" placeholder={t("contact.emailPlaceholder")} className="rounded-lg" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.company")}</label>
                <Input placeholder={t("contact.companyPlaceholder")} className="rounded-lg" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">{t("contact.message")}</label>
                <Textarea placeholder={t("contact.messagePlaceholder")} rows={5} className="rounded-lg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary-dark text-primary-foreground rounded-full py-6 font-semibold text-base">
                {t("contact.sendBtn")}
              </Button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-2">{t("contact.reachOut")}</h2>
            <p className="text-muted-foreground mb-6">{t("contact.reachOutDesc")}</p>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.labelKey} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{t(item.labelKey)}</p>
                    <p className="text-muted-foreground text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
