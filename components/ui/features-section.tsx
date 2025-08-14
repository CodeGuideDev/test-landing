'use client'

import { motion } from 'framer-motion'
import { 
  Sparkles, 
  FileText, 
  Settings, 
  Users, 
  Download, 
  Shield,
  Zap,
  RefreshCw,
  BarChart3,
  Bot
} from 'lucide-react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
  delay: number
}

const FeatureCard = ({ icon, title, description, gradient, delay }: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <div className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-5 ${gradient}`}></div>
      <div className="relative">
        <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${gradient.replace('bg-gradient-to-br', 'bg-gradient-to-r')} text-white`}>
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export function FeaturesSection() {
  const features = [
    {
      icon: <Bot className="h-7 w-7" />,
      title: "AI-Powered Outline Generation",
      description: "Transform raw project ideas into well-structured outlines using advanced GPT-4 technology. Input your goals and audience to get comprehensive section breakdowns instantly.",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      delay: 0.1
    },
    {
      icon: <FileText className="h-7 w-7" />,
      title: "Smart Summary Creation", 
      description: "Turn lengthy text into concise, high-impact summaries. Our NLP engine distills key information while preserving essential context and meaning.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-600",
      delay: 0.2
    },
    {
      icon: <Settings className="h-7 w-7" />,
      title: "Advanced Customization Panel",
      description: "Fine-tune tone, adjust length, control detail levels, and select from pre-built templates or create your own. Complete control over output style.",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600",
      delay: 0.3
    },
    {
      icon: <Users className="h-7 w-7" />,
      title: "Real-Time Collaboration",
      description: "Co-edit documents with your team using WebSocket-powered live editing. Complete with version history and change tracking for seamless teamwork.",
      gradient: "bg-gradient-to-br from-orange-500 to-red-600",
      delay: 0.4
    },
    {
      icon: <Download className="h-7 w-7" />,
      title: "Multi-Format Export",
      description: "Export your outlines and summaries as DOCX, PDF, or Markdown files. Perfect for sharing, presenting, or integrating into your existing workflows.",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-600",
      delay: 0.5
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Secure Sharing Links",
      description: "Generate secure sharing links with granular permissions. Control who can view, comment, or edit your documents with enterprise-grade security.",
      gradient: "bg-gradient-to-br from-emerald-500 to-green-600",
      delay: 0.6
    },
    {
      icon: <Zap className="h-7 w-7" />,
      title: "Lightning Fast Performance",
      description: "Generate comprehensive outlines in under 2 seconds. Optimized for speed without compromising on quality or accuracy.",
      gradient: "bg-gradient-to-br from-yellow-500 to-orange-600",
      delay: 0.7
    },
    {
      icon: <RefreshCw className="h-7 w-7" />,
      title: "Template Library",
      description: "Access pre-built templates for common use cases or save your own custom templates. Streamline your workflow with reusable document structures.",
      gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
      delay: 0.8
    },
    {
      icon: <BarChart3 className="h-7 w-7" />,
      title: "Usage Analytics",
      description: "Track your productivity gains with detailed analytics. Monitor template usage, content ratings, and time saved across all your projects.",
      gradient: "bg-gradient-to-br from-violet-500 to-purple-600",
      delay: 0.9
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
              <Sparkles className="mr-2 h-4 w-4" />
              Core Features
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Ideas
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-xl">
            Our comprehensive platform combines cutting-edge AI with intuitive design to help you create, 
            collaborate, and export professional documents faster than ever before.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
              delay={feature.delay}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
              Ready to boost your productivity?
            </h3>
            <p className="mb-8 text-lg text-gray-600">
              Join thousands of professionals who have already saved hundreds of hours using CodeGuide.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl"
              >
                Start Creating Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-medium text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
              >
                View Demo
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}