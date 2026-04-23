import { motion } from "motion/react";
import { ArrowRight, TrendingUp, Target, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

const mockData = [
  { month: "Jan", conversions: 12 },
  { month: "Feb", conversions: 19 },
  { month: "Mar", conversions: 25 },
  { month: "Apr", conversions: 38 },
  { month: "May", conversions: 52 },
  { month: "Jun", conversions: 71 }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary">Trusted by 500+ businesses</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              Turn Clicks Into{" "}
              <span className="text-primary relative inline-block">
                Qualified Leads
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <motion.path
                    d="M2 10C60 2 140 2 198 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed"
            >
              Premium lead generation pages engineered for more enquiries, calls, and booked customers. Not just aesthetics—real conversion science.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg flex items-center justify-center gap-2 text-foreground">
                Get Quote
              </button>
            </motion.div>

            {/* Integration Badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-6 border-t border-border/50">
              <span className="text-sm text-muted-foreground">Integrates with:</span>
              <div className="flex items-center gap-3">
                {['HubSpot', 'Salesforce', 'Mailchimp', 'Zapier'].map((name, i) => (
                  <div
                    key={name}
                    className="px-3 py-1.5 bg-card border border-border/50 rounded-lg text-xs text-foreground"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Analytics Chart */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="bg-gradient-to-br from-card via-card to-card/50 border border-border/50 rounded-2xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
                  <p style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-foreground">+492%</p>
                </div>
                <div className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">6 months</span>
                </div>
              </div>

              <div className="h-64 -mx-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mockData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                    <XAxis
                      dataKey="month"
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <YAxis
                      stroke="#94a3b8"
                      tick={{ fill: '#94a3b8', fontSize: 12 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="conversions"
                      stroke="#10b981"
                      strokeWidth={3}
                      dot={{ fill: '#10b981', r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Leads/Month</p>
                  <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-foreground">71</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Avg. Quality</p>
                  <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-foreground">8.4/10</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Response Time</p>
                  <p style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-foreground">&lt; 2min</p>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className="absolute -top-4 -right-4 bg-card border border-primary/30 rounded-xl p-4 shadow-xl shadow-primary/10"
            >
              <Target className="w-6 h-6 text-primary mb-2" />
              <p className="text-xs text-muted-foreground whitespace-nowrap">A/B Testing</p>
            </motion.div>

            <motion.div
              initial={{ scale: 0, rotate: 12 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-card border border-primary/30 rounded-xl p-4 shadow-xl shadow-primary/10"
            >
              <Zap className="w-6 h-6 text-primary mb-2" />
              <p className="text-xs text-muted-foreground whitespace-nowrap">Fast Load</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
