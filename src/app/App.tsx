import { motion } from "motion/react";
import {
  TrendingUp,
  Target,
  Zap,
  BarChart3,
  Smartphone,
  Database,
  FileText,
  MessageSquare,
  CheckCircle2,
  X,
  ArrowRight,
  Sparkles
} from "lucide-react";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import FeatureSection from "./components/FeatureSection";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Ambient Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse"
             style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] animate-pulse"
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <FeatureSection />
        <SocialProof />
        <Pricing />
        <FinalCTA />

        {/* Footer */}
        <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)' }} className="text-xl text-foreground">ConvertPro</span>
                </div>
                <p className="text-muted-foreground max-w-sm">
                  Premium lead generation landing pages engineered for conversion, not just aesthetics.
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-foreground" style={{ fontFamily: 'var(--font-display)' }}>Services</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">Landing Pages</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">A/B Testing</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">CRM Integration</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Analytics</a></li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 text-foreground" style={{ fontFamily: 'var(--font-display)' }}>Company</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                  <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground text-sm">
              © 2026 ConvertPro. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
