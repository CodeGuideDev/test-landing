'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  UserPlus, 
  LayoutDashboard, 
  Edit3, 
  Bot, 
  Settings, 
  Download,
  ChevronRight,
  Play,
  CheckCircle
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FlowStepProps {
  step: number
  title: string
  description: string
  icon: React.ReactNode
  isActive: boolean
  isCompleted: boolean
  onClick: () => void
  mockupContent: React.ReactNode
}

const FlowStep = ({ 
  step, 
  title, 
  description, 
  icon, 
  isActive, 
  isCompleted, 
  onClick, 
  mockupContent 
}: FlowStepProps) => {
  return (
    <>
      {/* Step Button */}
      <motion.button
        onClick={onClick}
        className={`flex w-full items-start gap-4 rounded-xl p-6 text-left transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg' 
            : isCompleted
            ? 'bg-green-50 border border-green-200'
            : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md'
        }`}
        whileHover={{ scale: isActive ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
          isActive 
            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
            : isCompleted
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 text-gray-600'
        }`}>
          {isCompleted ? <CheckCircle className="h-6 w-6" /> : icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-sm font-medium ${
              isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
            }`}>
              Step {step}
            </span>
            {!isCompleted && !isActive && <ChevronRight className="h-4 w-4 text-gray-400" />}
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </motion.button>

      {/* Mockup Content */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
            {mockupContent}
          </div>
        </motion.div>
      )}
    </>
  )
}

export function UserFlowSection() {
  const [activeStep, setActiveStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const handleStepClick = (step: number) => {
    if (step <= activeStep || completedSteps.includes(step)) {
      setActiveStep(step)
    }
  }

  const handleNextStep = () => {
    if (activeStep < 6) {
      setCompletedSteps(prev => [...prev, activeStep])
      setActiveStep(activeStep + 1)
    }
  }

  const steps = [
    {
      title: "Sign Up & Get Started",
      description: "Create your account with email or OAuth providers like Google and Microsoft",
      icon: <UserPlus className="h-6 w-6" />,
      mockupContent: (
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-8 w-8 rounded bg-blue-100 flex items-center justify-center">
              <span className="text-blue-600 font-semibold text-sm">CG</span>
            </div>
            <span className="text-xl font-bold">Welcome to CodeGuide</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <input 
                className="w-full p-3 border border-gray-200 rounded-lg" 
                placeholder="Enter your email"
                value="john@example.com"
                readOnly
              />
              <input 
                className="w-full p-3 border border-gray-200 rounded-lg" 
                placeholder="Create password"
                type="password"
                value="••••••••"
                readOnly
              />
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg font-medium">
                Create Account
              </button>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-center text-gray-500 text-sm">or continue with</div>
              <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="w-5 h-5 bg-red-500 rounded"></div>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div className="w-5 h-5 bg-blue-500 rounded"></div>
                Microsoft
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Choose Your Action",
      description: "Access your dashboard and select between creating outlines or summaries",
      icon: <LayoutDashboard className="h-6 w-6" />,
      mockupContent: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Welcome back, John!</h3>
            <p className="text-gray-600">What would you like to create today?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border-2 border-blue-200 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 cursor-pointer hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Edit3 className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Create Outline</h4>
              <p className="text-gray-600 text-sm">Transform your project ideas into structured outlines</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-xl bg-white cursor-pointer hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Bot className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Create Summary</h4>
              <p className="text-gray-600 text-sm">Turn long text into concise summaries</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Input Your Content",
      description: "Fill in project details, goals, audience, or paste text for summarization",
      icon: <Edit3 className="h-6 w-6" />,
      mockupContent: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Create New Outline</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Title</label>
                <input 
                  className="w-full p-3 border border-gray-200 rounded-lg" 
                  placeholder="Enter your project title"
                  value="Mobile App Development Strategy"
                  readOnly
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea 
                  className="w-full p-3 border border-gray-200 rounded-lg h-24 resize-none" 
                  placeholder="Describe your project goals and requirements"
                  value="We need to develop a comprehensive mobile app that helps users track their fitness goals..."
                  readOnly
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                  <input 
                    className="w-full p-3 border border-gray-200 rounded-lg" 
                    placeholder="Who is this for?"
                    value="Health-conscious adults 25-45"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Timeline</label>
                  <input 
                    className="w-full p-3 border border-gray-200 rounded-lg" 
                    placeholder="Project timeline"
                    value="6 months"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AI Generation Process",
      description: "Watch as our AI processes your input and generates structured content",
      icon: <Bot className="h-6 w-6" />,
      mockupContent: (
        <div className="space-y-6 text-center">
          <div className="flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">AI is crafting your outline...</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Analyzing project requirements</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-sm">Structuring content hierarchy</span>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-5 w-5 bg-blue-500 rounded-full"
                />
                <span className="text-sm">Generating detailed sections</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700">Average generation time: 1.8 seconds</p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Customize & Edit",
      description: "Fine-tune tone, length, and structure with our customization tools",
      icon: <Settings className="h-6 w-6" />,
      mockupContent: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-lg font-semibold">Customization Panel</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
                  <select className="w-full p-2 border border-gray-200 rounded">
                    <option>Professional</option>
                    <option>Casual</option>
                    <option>Academic</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Length</label>
                  <div className="flex items-center gap-3">
                    <span className="text-sm">Brief</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                    </div>
                    <span className="text-sm">Detailed</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Template</label>
                  <select className="w-full p-2 border border-gray-200 rounded">
                    <option>Business Plan</option>
                    <option>Project Proposal</option>
                    <option>Technical Spec</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Generated Outline</h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-3 max-h-64 overflow-y-auto">
                <div className="font-semibold">1. Executive Summary</div>
                <div className="ml-4 text-sm text-gray-600">• Project overview and objectives</div>
                <div className="ml-4 text-sm text-gray-600">• Target market analysis</div>
                
                <div className="font-semibold">2. Technical Requirements</div>
                <div className="ml-4 text-sm text-gray-600">• Platform specifications</div>
                <div className="ml-4 text-sm text-gray-600">• Development stack</div>
                
                <div className="font-semibold">3. User Experience Design</div>
                <div className="ml-4 text-sm text-gray-600">• Interface mockups</div>
                <div className="ml-4 text-sm text-gray-600">• User journey mapping</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Export & Share",
      description: "Download your content or share it securely with your team",
      icon: <Download className="h-6 w-6" />,
      mockupContent: (
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Your outline is ready!</h3>
            <p className="text-gray-600">Choose how you&apos;d like to export or share it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Export Options</h4>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="w-6 h-6 bg-blue-500 rounded"></div>
                  Download as DOCX
                </button>
                <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="w-6 h-6 bg-red-500 rounded"></div>
                  Download as PDF
                </button>
                <button className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div className="w-6 h-6 bg-gray-500 rounded"></div>
                  Download as Markdown
                </button>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Sharing Options</h4>
              <div className="space-y-2">
                <button className="w-full p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg">
                  Generate Sharing Link
                </button>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-2 mb-2">
                    <input type="checkbox" checked readOnly />
                    <span>Allow comments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" readOnly />
                    <span>Allow editing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-medium text-purple-800">
              <Play className="mr-2 h-4 w-4" />
              How It Works
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            From Idea to
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Structured Document
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 lg:text-xl">
            See exactly how CodeGuide transforms your raw ideas into professional documents 
            in just a few simple steps.
          </p>
        </motion.div>

        {/* Interactive Flow */}
        <div className="mx-auto max-w-6xl">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FlowStep
                  step={index + 1}
                  title={step.title}
                  description={step.description}
                  icon={step.icon}
                  isActive={activeStep === index + 1}
                  isCompleted={completedSteps.includes(index + 1)}
                  onClick={() => handleStepClick(index + 1)}
                  mockupContent={step.mockupContent}
                />
              </motion.div>
            ))}
          </div>

          {/* Progress Actions */}
          {activeStep < 6 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center"
            >
              <Button
                onClick={handleNextStep}
                size="lg"
                className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                {activeStep === 5 ? 'Complete Flow' : 'Next Step'}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {/* Completion Message */}
          {activeStep === 6 && completedSteps.length === 5 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-12 text-center"
            >
              <div className="mx-auto max-w-2xl rounded-xl bg-gradient-to-r from-green-50 to-blue-50 p-8 border border-green-200">
                <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to experience this yourself?
                </h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of professionals who are already saving hours every week.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  Get Started Now
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}