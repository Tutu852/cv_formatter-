import React from 'react'
import { Badge } from './ui/Badge'
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

export default function CVPreview({ data }) {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <h1 className="text-3xl font-bold mb-2">{data.header.name}</h1>
        <h2 className="text-xl mb-4 opacity-90">{data.header.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{data.header.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{data.header.phone}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{data.header.location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin className="w-4 h-4" />
            <span>{data.header.linkedin}</span>
          </div>
        </div>
      </div>

      <div className="p-8 space-y-8">
        {/* Profile */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Professional Profile
          </h3>
          <p className="text-gray-700 leading-relaxed">{data.profile}</p>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                  <Badge variant="outline" className="w-fit">{exp.period}</Badge>
                </div>
                <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Education
          </h3>
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-blue-200 pl-6">
                <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                <p className="text-blue-600 font-medium">{edu.school}</p>
                <p className="text-gray-600">{edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
