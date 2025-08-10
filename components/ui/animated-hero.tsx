import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Download, ChevronRight, Code } from 'lucide-react'
import { Button } from './button'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['Intelligent', 'Efficient', 'Powerful', 'Modern'], [])

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
    <div className="w-full min-h-screen bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-12 py-20 lg:py-32">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 border-2 border-black rounded-lg">
                <Terminal className="h-8 w-8 text-black" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-black font-mono">
                Codespace
              </h1>
            </div>
            <div className="h-px w-24 bg-black"></div>
          </div>

          {/* Animated Title */}
          <div className="flex flex-col gap-6 text-center">
            <div className="relative">
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
                <span className="relative flex w-full justify-center overflow-hidden text-center">
                  {titles.map((title, index) => (
                    <motion.span
                      key={index}
                      className="absolute font-light"
                      initial={{ opacity: 0, y: 100 }}
                      transition={{ type: 'spring', stiffness: 60, damping: 20 }}
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
              </h2>
              <div className="mt-4">
                <h3 className="text-4xl md:text-5xl font-mono font-bold tracking-tight">
                  AI CLI Tool
                </h3>
              </div>
            </div>

            <p className="max-w-2xl text-xl md:text-2xl leading-relaxed text-gray-700 font-light">
              Supercharge your development workflow with an intelligent command-line interface
              that understands your code and accelerates your productivity.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-gray-800 border-0 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-200"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-black text-black bg-transparent hover:bg-black hover:text-white px-8 py-6 text-lg font-medium rounded-lg transition-all duration-200"
            >
              View Documentation
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full max-w-4xl">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors duration-200">
              <Code className="h-8 w-8 text-black mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Smart Code Analysis</h4>
              <p className="text-gray-600 text-sm">
                Understands your codebase and provides intelligent suggestions and optimizations.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors duration-200">
              <Terminal className="h-8 w-8 text-black mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">Natural Language</h4>
              <p className="text-gray-600 text-sm">
                Execute complex commands using plain English. No need to memorize syntax.
              </p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-black transition-colors duration-200">
              <div className="h-8 w-8 text-black mx-auto mb-4 border-2 border-black rounded flex items-center justify-center">
                <span className="text-xs font-bold">AI</span>
              </div>
              <h4 className="text-lg font-semibold mb-2">Context Aware</h4>
              <p className="text-gray-600 text-sm">
                Learns from your project structure and coding patterns for personalized assistance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
