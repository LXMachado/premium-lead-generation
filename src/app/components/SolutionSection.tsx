import { motion } from "motion/react";
import { Target, BarChart3, Database } from "lucide-react";

const solutions = [
  {
    icon: Target,
    title: "Conversion Design",
    description: "Pages structured for action and trust. Every element engineered to guide visitors toward booking, calling, or submitting."
  },
  {
    icon: BarChart3,
    title: "A/B Testing",
    description: "Test headlines, offers, CTAs, and layouts. Data-driven optimization that compounds results month over month."
  },
  {
    icon: Database,
    title: "CRM Integration",
    description: "Capture and automate every lead instantly. No manual data entry. No leads slipping through the cracks."
  }
];

export default function SolutionSection() {
  return (
    <section id="services" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary mb-4 tracking-wider uppercase">The Solution</p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-foreground mb-6"
          >
            Landing Pages Built to Convert
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not just good-looking. Strategically designed, rigorously tested, and seamlessly integrated.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />

                <div className="relative bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 transition-all backdrop-blur-sm">
                  <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-2xl text-foreground mb-4"
                  >
                    {solution.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
