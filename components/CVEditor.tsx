'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Plus, X, Sparkles } from 'lucide-react'

interface CVData {
  header: {
    name: string
    title: string
    email: string
    phone: string
    location: string
    linkedin: string
  }
  profile: string
  experience: Array<{
    title: string
    company: string
    period: string
    description: string
  }>
  education: Array<{
    degree: string
    school: string
    year: string
  }>
  skills: string[]
}

interface CVEditorProps {
  data: CVData
  onChange: (data: CVData) => void
}

export default function CVEditor({ data, onChange }: CVEditorProps) {
  const [newSkill, setNewSkill] = useState('')

  const updateHeader = (field: string, value: string) => {
    onChange({
      ...data,
      header: { ...data.header, [field]: value }
    })
  }

  const updateProfile = (value: string) => {
    onChange({ ...data, profile: value })
  }

  const addExperience = () => {
    onChange({
      ...data,
      experience: [
        ...data.experience,
        { title: '', company: '', period: '', description: '' }
      ]
    })
  }

  const updateExperience = (index: number, field: string, value: string) => {
    const updated = [...data.experience]
    updated[index] = { ...updated[index], [field]: value }
    onChange({ ...data, experience: updated })
  }

  const removeExperience = (index: number) => {
    onChange({
      ...data,
      experience: data.experience.filter((_, i) => i !== index)
    })
  }

  const addEducation = () => {
    onChange({
      ...data,
      education: [
        ...data.education,
        { degree: '', school: '', year: '' }
      ]
    })
  }

  const updateEducation = (index: number, field: string, value: string) => {
    const updated = [...data.education]
    updated[index] = { ...updated[index], [field]: value }
    onChange({ ...data, education: updated })
  }

  const removeEducation = (index: number) => {
    onChange({
      ...data,
      education: data.education.filter((_, i) => i !== index)
    })
  }

  const addSkill = () => {
    if (newSkill.trim()) {
      onChange({
        ...data,
        skills: [...data.skills, newSkill.trim()]
      })
      setNewSkill('')
    }
  }

  const removeSkill = (index: number) => {
    onChange({
      ...data,
      skills: data.skills.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="space-y-8 max-h-[800px] overflow-y-auto pr-4">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Personal Information</span>
            <Button size="sm" variant="outline" className="ml-auto">
              <Sparkles className="w-4 h-4 mr-2" />
              Enhance with AI
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <Input
                value={data.header.name}
                onChange={(e) => updateHeader('name', e.target.value)}
                placeholder="John Smith"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Professional Title</label>
              <Input
                value={data.header.title}
                onChange={(e) => updateHeader('title', e.target.value)}
                placeholder="Senior Software Engineer"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input
                type="email"
                value={data.header.email}
                onChange={(e) => updateHeader('email', e.target.value)}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
              <Input
                value={data.header.phone}
                onChange={(e) => updateHeader('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <Input
                value={data.header.location}
                onChange={(e) => updateHeader('location', e.target.value)}
                placeholder="San Francisco, CA"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
              <Input
                value={data.header.linkedin}
                onChange={(e) => updateHeader('linkedin', e.target.value)}
                placeholder="linkedin.com/in/johnsmith"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Profile Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <span>Professional Profile</span>
            <Button size="sm" variant="outline" className="ml-auto">
              <Sparkles className="w-4 h-4 mr-2" />
              Enhance with AI
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={data.profile}
            onChange={(e) => updateProfile(e.target.value)}
            placeholder="Write a compelling professional summary..."
            rows={4}
            className="resize-none"
          />
        </CardContent>
      </Card>

      {/* Experience Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Professional Experience</span>
            <Button onClick={addExperience} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Experience
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {data.experience.map((exp, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900">Experience {index + 1}</h4>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Enhance
                  </Button>
                  <Button
                    onClick={() => removeExperience(index)}
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                  <Input
                    value={exp.title}
                    onChange={(e) => updateExperience(index, 'title', e.target.value)}
                    placeholder="Senior Software Engineer"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(index, 'company', e.target.value)}
                    placeholder="Tech Corp"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                <Input
                  value={exp.period}
                  onChange={(e) => updateExperience(index, 'period', e.target.value)}
                  placeholder="2020 - Present"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <Textarea
                  value={exp.description}
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  placeholder="Describe your key achievements and responsibilities..."
                  rows={3}
                  className="resize-none"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Education Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Education</span>
            <Button onClick={addEducation} size="sm" variant="outline">
              <Plus className="w-4 h-4 mr-2" />
              Add Education
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {data.education.map((edu, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-900">Education {index + 1}</h4>
                <Button
                  onClick={() => removeEducation(index)}
                  size="sm"
                  variant="outline"
                  className="text-red-600 hover:text-red-700"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Degree</label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    placeholder="Bachelor of Science in Computer Science"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEducation(index, 'school', e.target.value)}
                    placeholder="University of California, Berkeley"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                  <Input
                    value={edu.year}
                    onChange={(e) => updateEducation(index, 'year', e.target.value)}
                    placeholder="2018"
                  />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill..."
              onKeyPress={(e) => e.key === 'Enter' && addSkill()}
            />
            <Button onClick={addSkill}>
              <Plus className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-pointer group"
                onClick={() => removeSkill(index)}
              >
                {skill}
                <X className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
