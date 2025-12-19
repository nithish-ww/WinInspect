import { useState } from 'react';
import { ArrowLeft, Sparkles, CheckCircle2, Clock, ChevronDown, ChevronRight, Shield, Zap, Code, TestTube, FileText, Server, Upload } from 'lucide-react';

interface NewProjectFormProps {
  onBack: () => void;
}

const techStackOptions = {
  Frontend: ['React', 'Angular', 'Vue', 'Next.js', 'Svelte'],
  Backend: ['Node.js', 'Java', 'Python', 'Go', '.NET', 'Ruby'],
  Database: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'DynamoDB'],
  Cloud: ['AWS', 'Azure', 'GCP', 'On-Premise'],
  Other: ['Docker', 'Kubernetes', 'Microservices', 'GraphQL', 'REST API'],
};

export default function NewProjectForm({ onBack }: NewProjectFormProps) {
  const [step, setStep] = useState<'form' | 'analyzing' | 'results'>('form');
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: '',
    techStack: [] as string[],
    releaseDate: '',
    businessImpact: '',
    description: '',
  });
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files) {
      const newFiles = Array.from(files);
      setUploadedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('analyzing');
    setTimeout(() => setStep('results'), 2000);
  };

  const handleTechStackToggle = (tech: string) => {
    setFormData(prev => ({
      ...prev,
      techStack: prev.techStack.includes(tech)
        ? prev.techStack.filter(t => t !== tech)
        : [...prev.techStack, tech]
    }));
  };

  const checklist = [
    {
      category: 'Architecture & Design',
      icon: Server,
      items: [
        'System architecture diagram',
        'High-level design document',
        'Component interaction diagrams',
        'Data flow diagrams',
        'Infrastructure architecture',
      ],
    },
    {
      category: 'Security & Compliance',
      icon: Shield,
      items: [
        'OWASP security scan results',
        'Penetration test report',
        'Authentication/authorization design',
        'Data encryption strategy',
        'Compliance documentation (PCI-DSS)',
      ],
    },
    {
      category: 'Performance & Scalability',
      icon: Zap,
      items: [
        'Load test results',
        'Performance benchmarks',
        'Scalability analysis',
        'Resource utilization metrics',
        'Caching strategy',
      ],
    },
    {
      category: 'Code Quality',
      icon: Code,
      items: [
        'Code coverage report (≥75%)',
        'Static analysis results',
        'Code duplication analysis',
        'Technical debt assessment',
        'Dependency vulnerability scan',
      ],
    },
    {
      category: 'Testing',
      icon: TestTube,
      items: [
        'Test strategy document',
        'Unit test results',
        'Integration test results',
        'UAT sign-off',
        'Test automation coverage',
      ],
    },
    {
      category: 'Operations',
      icon: FileText,
      items: [
        'Deployment runbook',
        'Rollback procedures',
        'Monitoring & alerting setup',
        'Disaster recovery plan',
        'SLA definitions',
      ],
    },
  ];

  if (step === 'analyzing') {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl border border-slate-200 p-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-slate-900 mb-2">Analyzing Your Project</h2>
            <p className="text-slate-600 mb-8">
              AI is generating a customized review checklist based on your inputs...
            </p>
            <div className="space-y-3 text-left max-w-md mx-auto">
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Technology stack analyzed
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                Project type mapped to review template
              </div>
              <div className="flex items-center gap-3 text-slate-700">
                <div className="w-5 h-5 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
                Generating customized checklist...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'results') {
    return (
      <div className="max-w-5xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Dashboard
        </button>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-slate-900 mb-2">Project Successfully Initiated</h2>
              <p className="text-slate-700 mb-4">
                Your TQA review request has been created. AI has generated a customized checklist based on your project details.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white rounded-lg border border-green-200 p-4">
                  <p className="text-slate-600 text-sm mb-1">Review ID</p>
                  <p className="font-semibold text-slate-900">TQA-2025-1238</p>
                </div>
                <div className="bg-white rounded-lg border border-green-200 p-4">
                  <p className="text-slate-600 text-sm mb-1">Estimated Timeline</p>
                  <p className="font-semibold text-slate-900">5-7 business days</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 mb-8">
          <div className="p-6 border-b border-slate-200">
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-6 h-6 text-indigo-600" />
              <h3 className="text-slate-900">AI-Generated Review Checklist</h3>
            </div>
            <p className="text-slate-600 text-sm">
              Based on your project type ({formData.projectType}) and technology stack, we've created a customized checklist with {checklist.reduce((acc, cat) => acc + cat.items.length, 0)} items.
            </p>
          </div>

          <div className="p-6">
            <div className="space-y-3">
              {checklist.map((category) => {
                const Icon = category.icon;
                const isExpanded = expandedCategory === category.category;
                
                return (
                  <div key={category.category} className="border border-slate-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedCategory(isExpanded ? null : category.category)}
                      className="w-full p-4 flex items-center justify-between hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-slate-900">{category.category}</p>
                          <p className="text-sm text-slate-600">{category.items.length} required items</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                          Pending
                        </span>
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5 text-slate-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        )}
                      </div>
                    </button>
                    
                    {isExpanded && (
                      <div className="px-4 pb-4 space-y-2 bg-slate-50">
                        {category.items.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200">
                            <div className="w-5 h-5 border-2 border-slate-300 rounded mt-0.5 flex-shrink-0" />
                            <div className="flex-1">
                              <p className="text-sm text-slate-900">{item}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl border border-blue-200 p-6 mb-8">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">Estimated Timeline</h4>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Review Preparation: 2-3 business days
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Reviewer Assignment: 1 day
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Document Analysis: 1-2 days
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  Review Meeting: 1-2 hours
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
          >
            Save as Draft
          </button>
          <button
            onClick={onBack}
            className="flex-1 px-6 py-3 text-white rounded-lg transition-all shadow-lg font-medium"
            style={{ backgroundColor: '#003087' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#002366')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#003087')}
          >
            Submit for Review
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form - Left Side (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2" style={{ color: '#003087' }}>Request New TQA Review</h2>
              <p className="text-slate-600">
                Fill out the project details. AI will analyze and generate a customized review checklist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Project Name & Type - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.projectName}
                    onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                    placeholder="e.g., Payment Gateway v2.0"
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="New Feature">New Feature</option>
                    <option value="Enhancement">Enhancement</option>
                    <option value="Major Release">Major Release</option>
                    <option value="Critical Bug Fix">Critical Bug Fix</option>
                  </select>
                </div>
              </div>

              {/* Release Date & Business Impact - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Target Release Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.releaseDate}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Business Impact <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.businessImpact}
                    onChange={(e) => setFormData({ ...formData, businessImpact: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                  >
                    <option value="">Select impact</option>
                    <option value="Critical">Critical</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
              </div>

              {/* Technology Stack */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Technology Stack <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {Object.entries(techStackOptions).map(([category, options]) => (
                    <div key={category} className="bg-slate-50 rounded-lg p-4">
                      <p className="text-xs font-medium text-slate-600 mb-2">{category}</p>
                      <div className="flex flex-wrap gap-2">
                        {options.map((tech) => (
                          <button
                            key={tech}
                            type="button"
                            onClick={() => handleTechStackToggle(tech)}
                            className={`px-3 py-1.5 text-sm rounded-md border transition-all ${
                              formData.techStack.includes(tech)
                                ? 'border-[#003087] text-white'
                                : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                            }`}
                            style={formData.techStack.includes(tech) ? { backgroundColor: '#003087' } : {}}
                          >
                            {tech}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Project Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your project, goals, and key technical decisions..."
                  rows={4}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={onBack}
                  className="px-6 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!formData.projectName || !formData.projectType || formData.techStack.length === 0}
                  className="flex-1 px-6 py-2.5 text-white rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#003087' }}
                  onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#002366')}
                  onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#003087')}
                >
                  <Sparkles className="w-5 h-5" />
                  Submit for Review
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Document Upload - Right Side (1/3 width) */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sticky top-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-1" style={{ color: '#003087' }}>Upload Documents</h3>
              <p className="text-sm text-slate-600">Upload key project documents</p>
            </div>

            {/* Upload Area */}
            <button
              type="button"
              className={`w-full border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer ${
                isDragging 
                  ? 'border-[#003087] bg-blue-50 scale-[1.02]' 
                  : 'border-slate-300 hover:border-[#003087] hover:bg-blue-50'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => {
                const fileInput = document.getElementById('file-upload') as HTMLInputElement;
                if (fileInput) {
                  fileInput.click();
                }
              }}
            >
              <Upload className="w-12 h-12 mx-auto mb-3 pointer-events-none" style={{ color: '#003087' }} />
              <p className="text-sm font-medium text-slate-900 mb-1 pointer-events-none">Click to select documents</p>
              <p className="text-xs text-slate-500 mb-2 pointer-events-none">or drag and drop files here</p>
              <p className="text-xs text-slate-400 pointer-events-none">PDF, DOC, XLS up to 50MB</p>
            </button>
            
            {/* Hidden file input outside the visible area */}
            <input
              id="file-upload"
              type="file"
              multiple
              accept=".pdf,.doc,.docx,.xls,.xlsx,.txt"
              onChange={handleFileUpload}
              className="hidden"
              style={{ display: 'none' }}
            />

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-xs font-medium text-slate-600 mb-2">Uploaded Files ({uploadedFiles.length})</p>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <FileText className="w-4 h-4 flex-shrink-0" style={{ color: '#003087' }} />
                      <span className="text-xs text-slate-700 truncate">{file.name}</span>
                      <span className="text-xs text-slate-400 flex-shrink-0">
                        {(file.size / 1024).toFixed(1)} KB
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Document Categories Checklist */}
            <div className="mt-6 space-y-2">
              <p className="text-xs font-medium text-slate-600 mb-3">Recommended Documents:</p>
              {checklist.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.category} className="flex items-center gap-2 text-sm text-slate-600 p-2 rounded hover:bg-slate-50">
                    <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#003087' }} />
                    <span className="text-xs">{category.category}</span>
                    <span className="ml-auto text-xs text-slate-400">0/{category.items.length}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Total Progress</span>
                <span className="font-semibold" style={{ color: '#003087' }}>0%</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
