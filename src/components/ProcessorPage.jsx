import React, { useState, useEffect } from 'react'
import { ArrowLeft, Download, Edit, Eye, Sparkles, CheckCircle, Clock, AlertCircle } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'
import { Badge } from './ui/Badge'
import CVPreview from './CVPreview'
import CVEditor from './CVEditor'

export default function ProcessorPage({ onBack }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [activeTab, setActiveTab] = useState('preview')
  const [cvData, setCvData] = useState({
    header: {
      name: "John Smith",
      title: "Senior Software Engineer",
      email: "john.smith@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/johnsmith"
    },
    profile: "Experienced software engineer with 8+ years of expertise in full-stack development, cloud architecture, and team leadership. Proven track record of delivering scalable solutions and mentoring junior developers.",
    experience: [
      {
        title: "Senior Software Engineer",
        company: "Tech Corp",
        period: "2020 - Present",
        description: "Led development of microservices architecture serving 1M+ users. Mentored team of 5 junior developers and improved deployment efficiency by 40%."
      },
      {
        title: "Software Engineer",
        company: "StartupXYZ",
        period: "2018 - 2020",
        description: "Built responsive web applications using React and Node.js. Collaborated with design team to implement pixel-perfect UI components."
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        year: "2018"
      }
    ],
    skills: [
      "JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"
    ]
  })

  const steps = [
    { name: "File Processing", status: "completed", description: "Extracting content from your CV" },
    { name: "AI Enhancement", status: "completed", description: "Improving content with GPT-4" },
    { name: "Content Optimization", status: "completed", description: "Optimizing with Claude AI" },
    { name: "Final Formatting", status: "completed", description: "Applying EHS standards" },
    { name: "Quality Check", status: "completed", description: "Final review and validation" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1
        }
        clearInterval(timer)
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [steps.length])

  const getStepIcon = (index, status) => {
    if (index < currentStep || status === 'completed') {
      return <CheckCircle className="w-5 h-5 text-green-600" />
    } else if (index === currentStep) {
      return <Clock className="w-5 h-5 text-blue-600 animate-spin" />
    } else {
      return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const isProcessingComplete = currentStep >= steps.length - 1

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Button>
              <h1 className="text-xl font-semibold text-gray-900">CV Processing</h1>
            </div>
            {isProcessingComplete && (
              <div className="flex items-center space-x-3">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download DOCX</span>
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Processing Status */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span>AI Processing Status</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {getStepIcon(index, step.status)}
                    <div className="flex-1">
                      <p className={`font-medium ${
                        index <= currentStep ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </p>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                    {index <= currentStep && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Done
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {isProcessingComplete && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-green-600">Processing Complete!</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Your CV has been successfully enhanced and formatted. You can now preview, edit, or download it.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Content Enhancement</span>
                      <span className="text-green-600 font-medium">+25% improvement</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>ATS Compatibility</span>
                      <span className="text-green-600 font-medium">98% score</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Professional Format</span>
                      <span className="text-green-600 font-medium">EHS Compliant</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* CV Preview/Editor */}
          <div className="lg:col-span-2">
            {isProcessingComplete ? (
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Your Enhanced CV</CardTitle>
                    <div className="flex space-x-2">
                      <Button
                        variant={activeTab === 'preview' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('preview')}
                        className="flex items-center space-x-2"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Preview</span>
                      </Button>
                      <Button
                        variant={activeTab === 'edit' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setActiveTab('edit')}
                        className="flex items-center space-x-2"
                      >
                        <Edit className="w-4 h-4" />
                        <span>Edit</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {activeTab === 'preview' ? (
                    <CVPreview data={cvData} />
                  ) : (
                    <CVEditor data={cvData} onChange={setCvData} />
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    AI is enhancing your CV...
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our AI agents are analyzing and improving your content. This usually takes 30-60 seconds.
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
