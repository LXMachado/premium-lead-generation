import { motion } from "motion/react";
import { X } from "lucide-react";

const problems = [
  {
    title: "Paying for ads with weak results",
    description: "Traffic coming in, but visitors leave without converting"
  },
  {
    title: "Website traffic not converting",
    description: "High bounce rates and zero form submissions"
  },
  {
    title: "Slow follow-up losing leads",
    description: "Leads go cold while waiting for manual responses"
  },
  {
    title: "No visibility into performance",
    description: "Can't tell what's working or where money is wasted"
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary mb-4 tracking-wider uppercase">The Problem</p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-foreground mb-6"
          >
            Your campaigns deserve better
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Most businesses waste budget on traffic that never converts. Sound familiar?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card/30 border border-destructive/20 rounded-xl p-6 hover:border-destructive/40 transition-all backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <X className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg text-foreground mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
