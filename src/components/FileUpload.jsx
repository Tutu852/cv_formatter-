import React, { useState, useCallback } from 'react'
import { Upload, FileText, X } from 'lucide-react'
import { Button } from './ui/Button'
import { Card, CardContent } from './ui/Card'

export default function FileUpload({ onUpload }) {
  const [dragActive, setDragActive] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleDrag = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback((e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      setSelectedFile(file)
    }
  }, [])

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-8">
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-200 ${
            dragActive 
              ? 'border-blue-500 bg-blue-50' 
              : selectedFile 
                ? 'border-green-500 bg-green-50' 
                : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf,.docx,.xlsx,.xls"
            onChange={handleFileSelect}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          
          {selectedFile ? (
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3">
                <FileText className="w-8 h-8 text-green-600" />
                <div className="text-left">
                  <p className="font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-gray-500 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <Button 
                onClick={handleUpload}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg"
              >
                Process CV with AI
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-lg font-medium text-gray-900 mb-2">
                  Drop your CV here or click to browse
                </p>
                <p className="text-sm text-gray-500">
                  Supports PDF, DOCX, and Excel files up to 10MB
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-blue-50 rounded-lg">
            <FileText className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-xs font-medium text-blue-900">PDF</p>
          </div>
          <div className="p-3 bg-green-50 rounded-lg">
            <FileText className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-xs font-medium text-green-900">DOCX</p>
          </div>
          <div className="p-3 bg-purple-50 rounded-lg">
            <FileText className="w-6 h-6 text-purple-600 mx-auto mb-2" />
            <p className="text-xs font-medium text-purple-900">Excel</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
