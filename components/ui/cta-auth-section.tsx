'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Mail, 
  Shield, 
  Star, 
  Users, 
  Clock,
  CheckCircle,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function CTAAuthSection() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      // Here would be the actual Clerk authentication
      console.log('Sign up with:', email, password)
    }, 2000)
  }

  const handleOAuthSignUp = (provider: 'google' | 'microsoft') => {
    // Here would be the actual OAuth integration with Clerk
    console.log(`Sign up with ${provider}`)
  }

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechCorp",
      content: "CodeGuide reduced our documentation time by 80%. Our team can now focus on building instead of writing.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Startup Founder",
      content: "From idea to investor pitch in minutes, not days. This tool is a game-changer for entrepreneurs.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Research Director",
      content: "The AI understands context better than any tool I've used. Perfect for academic and research projects.",
      rating: 5
    }
  ]

  const stats = [
    { number: "50K+", label: "Happy Users" },
    { number: "2M+", label: "Documents Created" },
    { number: "70%", label: "Time Saved" },
    { number: "4.9/5", label: "User Rating" }
  ]

  const features = [
    "Unlimited outline & summary generation",
    "All export formats (DOCX, PDF, Markdown)",
    "Real-time collaboration",
    "Advanced customization options",
    "Priority customer support",
    "30-day money-back guarantee"
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Social Proof Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center"
        >
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - CTA Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Ready to Transform
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Your Workflow?
                </span>
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Join thousands of professionals who are already saving hours every week 
                with AI-powered document creation.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400 shrink-0" />
                  <span className="text-blue-100">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Testimonials Preview */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What our users say:</h3>
              <div className="space-y-4">
                {testimonials.slice(0, 2).map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"
                  >
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-blue-100 mb-2">&ldquo;{testimonial.content}&rdquo;</p>
                    <div className="text-xs">
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-blue-300">{testimonial.role}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Sign Up Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Start Your Free Trial</h3>
                <p className="text-blue-200">No credit card required • Full access for 14 days</p>
              </div>

              {!showSignUp ? (
                <div className="space-y-4">
                  {/* OAuth Buttons */}
                  <Button
                    onClick={() => handleOAuthSignUp('google')}
                    variant="secondary"
                    size="lg"
                    className="w-full bg-white text-gray-900 hover:bg-gray-100 flex items-center justify-center gap-3"
                  >
                    <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full"></div>
                    Continue with Google
                  </Button>

                  <Button
                    onClick={() => handleOAuthSignUp('microsoft')}
                    variant="secondary"
                    size="lg"
                    className="w-full bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-3"
                  >
                    <div className="w-5 h-5 bg-white rounded"></div>
                    Continue with Microsoft
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/30"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="bg-transparent px-4 text-blue-200">or</span>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowSignUp(true)}
                    variant="outline"
                    size="lg"
                    className="w-full border-white/30 text-white hover:bg-white/10 flex items-center justify-center gap-3"
                  >
                    <Mail className="h-5 w-5" />
                    Sign up with Email
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleEmailSignUp} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
                    />
                  </div>
                  <div>
                    <Input
                      type="password"
                      placeholder="Create a password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="bg-white/10 border-white/30 text-white placeholder:text-blue-200"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSignUp(false)}
                    className="w-full text-blue-200 hover:text-white hover:bg-white/10"
                  >
                    Back to other options
                  </Button>
                </form>
              )}

              {/* Trust Indicators */}
              <div className="space-y-4 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                  <Shield className="h-4 w-4" />
                  <span>Enterprise-grade security</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                  <Users className="h-4 w-4" />
                  <span>Trusted by 50,000+ professionals</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-blue-200">
                  <Clock className="h-4 w-4" />
                  <span>Setup in under 2 minutes</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="text-center text-xs text-blue-300">
                By signing up, you agree to our{' '}
                <a href="#" className="underline hover:text-white">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="underline hover:text-white">Privacy Policy</a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-4">&ldquo;{testimonial.content}&rdquo;</p>
              <div>
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-blue-300">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}