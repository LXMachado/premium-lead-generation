import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative"
      >
        <div className="bg-gradient-to-br from-card via-card to-card/80 border border-primary/30 rounded-3xl p-12 md:p-16 text-center backdrop-blur-xl shadow-2xl shadow-primary/10">
          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-8 right-8 w-20 h-20 bg-primary/10 border border-primary/20 rounded-2xl blur-sm"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-8 left-8 w-16 h-16 bg-primary/10 border border-primary/20 rounded-2xl blur-sm"
          />

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
          >
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary">Free 30-minute strategy session</span>
          </motion.div>

          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight"
          >
            Ready for a Landing Page That{" "}
            <span className="text-primary">Pays for Itself?</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your goals, analyze your current funnel, and map out a conversion strategy that works.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center justify-center gap-2 text-lg"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all flex items-center justify-center gap-2 text-lg text-foreground"
            >
              View Case Studies
            </motion.button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              No obligation
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Free audit included
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Same-day response
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
