import { motion } from "motion/react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    description: "Landing page only",
    price: "$2,995",
    period: "one-time",
    features: [
      "1 landing page design",
      "Mobile responsive",
      "Fast-loading frontend",
      "Basic form integration",
      "SEO fundamentals",
      "2 rounds of revisions"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Growth",
    description: "Landing page + A/B testing",
    price: "$4,995",
    period: "one-time + $499/mo",
    features: [
      "Everything in Starter",
      "A/B testing setup",
      "Advanced CRM integration",
      "Analytics dashboard",
      "Conversion optimization",
      "Monthly reporting",
      "4 rounds of revisions"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Premium",
    description: "Full funnel + CRM + analytics",
    price: "$9,995",
    period: "one-time + $999/mo",
    features: [
      "Everything in Growth",
      "Multi-page funnel",
      "Advanced automation",
      "Custom CRM workflows",
      "Call tracking integration",
      "Priority support",
      "Dedicated account manager",
      "Unlimited revisions"
    ],
    cta: "Book Strategy Call",
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary mb-4 tracking-wider uppercase">Pricing</p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-foreground mb-6"
          >
            Investment that pays for itself
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the package that matches your growth ambitions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative ${tier.popular ? 'md:-mt-4' : ''}`}
            >
              {tier.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-primary-foreground text-sm rounded-full flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <div className={`relative bg-card border ${tier.popular ? 'border-primary/50 shadow-2xl shadow-primary/10' : 'border-border/50'} rounded-2xl p-8 h-full hover:border-primary/30 transition-all backdrop-blur-sm`}>
                {tier.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl" />
                )}

                <div className="relative">
                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="text-2xl text-foreground mb-2"
                  >
                    {tier.name}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {tier.description}
                  </p>

                  <div className="mb-6">
                    <p style={{ fontFamily: 'var(--font-display)' }} className="text-4xl text-foreground mb-1">
                      {tier.price}
                    </p>
                    <p className="text-sm text-muted-foreground">{tier.period}</p>
                  </div>

                  <button className={`w-full px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-2 mb-8 ${
                    tier.popular
                      ? 'bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/30'
                      : 'bg-card border border-border hover:border-primary/50 text-foreground'
                  }`}>
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money-back guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-card border border-primary/20 rounded-full">
            <CheckCircle2 className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">
              30-day conversion improvement guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
