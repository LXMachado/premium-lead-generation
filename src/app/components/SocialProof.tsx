import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Clinic Owner",
    business: "Advanced Dental Care",
    text: "Our enquiries tripled in the first month. The landing page looks professional and the form integration with our CRM was seamless.",
    metric: "+287% enquiries",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Director",
    business: "Chen & Partners Law",
    text: "Finally, a landing page that actually converts. We're booking more consultations than ever, and the analytics dashboard shows exactly what's working.",
    metric: "+156% conversions",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "Founder",
    business: "Urban Landscaping Co",
    text: "The A/B testing made a huge difference. We found the winning headline in week two and haven't looked back. Quality leads, fast turnaround.",
    metric: "+212% lead quality",
    rating: 5
  }
];

export default function SocialProof() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary mb-4 tracking-wider uppercase">Success Stories</p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-4xl md:text-5xl text-foreground mb-6"
          >
            Real results from real businesses
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative bg-card border border-border/50 rounded-2xl p-8 h-full hover:border-primary/30 transition-all backdrop-blur-sm">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Metric Badge */}
                <div className="inline-flex px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg mb-6">
                  <span className="text-sm text-primary">{testimonial.metric}</span>
                </div>

                {/* Author */}
                <div className="border-t border-border/50 pt-6">
                  <p style={{ fontFamily: 'var(--font-display)' }} className="text-foreground mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.business}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl text-primary mb-2">500+</p>
              <p className="text-muted-foreground">Active Clients</p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl text-primary mb-2">247%</p>
              <p className="text-muted-foreground">Avg. Uplift</p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-display)' }} className="text-4xl md:text-5xl text-primary mb-2">24/7</p>
              <p className="text-muted-foreground">Lead Capture</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
