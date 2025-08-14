import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight, FileText, BookOpen, Sparkles, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['Outlines', 'Summaries', 'Documents', 'Ideas', 'Projects'], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2500)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-32">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://codeguide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-3 mb-6"
            >
              <Image src="/codeguide-logo.png" alt="CodeGuide" width={48} height={48} />
              <span className="logo-text text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CodeGuide
              </span>
            </a>
          </motion.div>

          {/* Benefit Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge variant="outline" className="px-6 py-2 text-sm font-medium bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <Clock className="w-4 h-4 mr-2" />
              Save 70% of your time on document creation
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <div className="flex flex-col gap-6 text-center">
            <motion.h1 
              className="font-bold max-w-5xl text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Turn Ideas Into Structured{' '}
              <span className="relative inline-block">
                <span className="relative flex justify-center overflow-hidden h-[1.2em]">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
                      animate={
                        titleNumber === index
                          ? {
                              y: 0,
                              opacity: 1,
                            }
                          : {
                              y: titleNumber > index ? -100 : 100,
                              opacity: 0,
                            }
                      }
                    >
                      {title}
                    </motion.span>
                  ))}
                </span>
              </span>
              <br />
              <span className="text-gray-700">In Seconds</span>
            </motion.h1>

            <motion.p 
              className="max-w-3xl text-center text-lg sm:text-xl leading-relaxed text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Transform your raw project ideas into well-structured outlines and concise summaries using AI. 
              Stop juggling multiple documents and fragmented brainstorming sessions.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button size="lg" className="gap-3 text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <FileText className="h-5 w-5" />
              Create Outline
              <MoveRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="gap-3 text-lg px-8 py-6 border-2">
              <BookOpen className="h-5 w-5" />
              Create Summary
            </Button>
          </motion.div>

          {/* Features Preview */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-b from-blue-50 to-white border border-blue-100">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered Generation</h3>
              <p className="text-sm text-muted-foreground">
                Advanced NLP creates structured content from your raw ideas
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-b from-purple-50 to-white border border-purple-100">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Generate comprehensive outlines in under 2 seconds
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-b from-green-50 to-white border border-green-100">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Export Ready</h3>
              <p className="text-sm text-muted-foreground">
                Download as DOCX, PDF, or Markdown instantly
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
