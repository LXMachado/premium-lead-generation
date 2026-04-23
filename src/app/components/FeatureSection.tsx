import { motion } from "motion/react";
import { Zap, Smartphone, Database, FileText, MessageSquare, BarChart3, TrendingUp, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast-loading frontend",
    description: "Optimized for speed. No bloat, no lag."
  },
  {
    icon: Smartphone,
    title: "Mobile-first design",
    description: "Perfect experience on every device."
  },
  {
    icon: Database,
    title: "CRM integrations",
    description: "HubSpot, Salesforce, and more."
  },
  {
    icon: FileText,
    title: "Form tracking",
    description: "Monitor every field, every submission."
  },
  {
    icon: MessageSquare,
    title: "Call tracking ready",
    description: "Track phone leads automatically."
  },
  {
    icon: BarChart3,
    title: "Analytics dashboard",
    description: "Real-time performance visibility."
  },
  {
    icon: TrendingUp,
    title: "SEO fundamentals",
    description: "Built with organic search in mind."
  },
  {
    icon: CheckCircle2,
    title: "Copywriting structure",
    description: "Proven frameworks that convert."
  }
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 px-6 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.5) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary mb-4 tracking-wider uppercase">Features</p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-foreground mb-6"
          >
            Everything you need to win
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium features built into every landing page. No compromises.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card/50 border border-border/50 rounded-xl p-6 hover:bg-card hover:border-primary/30 transition-all backdrop-blur-sm hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-lg text-foreground mb-2"
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
