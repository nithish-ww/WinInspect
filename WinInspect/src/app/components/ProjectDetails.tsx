import { useState } from 'react';
import { ArrowLeft, Upload, CheckCircle2, AlertCircle, XCircle, Clock, FileText, Shield, Zap, Calendar, User, Tag } from 'lucide-react';
import DocumentUpload from './DocumentUpload';
import PreReviewAnalysis from './PreReviewAnalysis';
import ReviewScheduling from './ReviewScheduling';
import ActionItemsTracker from './ActionItemsTracker';
import ReviewReport from './ReviewReport';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

// Mock project data based on ID
const getProjectData = (id: string) => {
  const projects: Record<string, any> = {
    'TQA-2025-1234': {
      name: 'Payment Gateway v2.0',
      status: 'Approved',
      currentStep: 'approved',
      readinessScore: 96,
      submittedDate: 'Dec 18, 2025',
      reviewDate: 'Dec 21, 2025',
      approvalDate: 'Dec 23, 2025',
      type: 'Major Release',
      reviewers: ['Sarah Chen', 'Michael Torres'],
    },
    'TQA-2025-1235': {
      name: 'Mobile App Performance Optimization',
      status: 'Review Scheduled',
      currentStep: 'scheduling',
      readinessScore: 89,
      submittedDate: 'Dec 20, 2025',
      reviewDate: 'Dec 26, 2025',
      type: 'Enhancement',
      reviewers: ['David Kim'],
    },
    'TQA-2025-1236': {
      name: 'User Authentication Service',
      status: 'Action Items Pending',
      currentStep: 'action-items',
      readinessScore: 78,
      submittedDate: 'Dec 19, 2025',
      reviewDate: 'Dec 21, 2025',
      type: 'New Feature',
      actionItems: 3,
      reviewers: ['Sarah Chen'],
    },
    'TQA-2025-1237': {
      name: 'Data Analytics Dashboard',
      status: 'Document Upload',
      currentStep: 'upload',
      readinessScore: 65,
      submittedDate: 'Dec 22, 2025',
      type: 'New Feature',
      reviewers: [],
    },
  };
  
  return projects[id] || projects['TQA-2025-1237'];
};

export default function ProjectDetails({ projectId, onBack }: ProjectDetailsProps) {
  const project = getProjectData(projectId);
  const [activeTab, setActiveTab] = useState(project.currentStep);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Review Scheduled':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Action Items Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const steps = [
    { id: 'upload', label: 'Document Upload', icon: Upload },
    { id: 'analysis', label: 'Pre-Review Analysis', icon: Zap },
    { id: 'scheduling', label: 'Review Scheduling', icon: Calendar },
    { id: 'action-items', label: 'Action Items', icon: AlertCircle },
    { id: 'approved', label: 'Final Approval', icon: CheckCircle2 },
  ];

  const getStepStatus = (stepId: string) => {
    const stepIndex = steps.findIndex(s => s.id === stepId);
    const currentIndex = steps.findIndex(s => s.id === project.currentStep);
    
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      {/* Project Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-slate-900">{project.name}</h1>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" style={{ color: '#003087' }} />
                {projectId}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="w-4 h-4" style={{ color: '#003087' }} />
                {project.type}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" style={{ color: '#003087' }} />
                Submitted: {project.submittedDate}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 mb-1">Readiness Score</p>
            <p className="text-3xl font-bold" style={{ color: 'rgb(0, 48, 135)' }}>
              {project.readinessScore}
              <span className="text-lg text-slate-400">/100</span>
            </p>
          </div>
        </div>

        {/* Reviewers */}
        {project.reviewers.length > 0 && (
          <div className="flex items-center gap-3 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600">Reviewers:</p>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {project.reviewers.map((reviewer: string, idx: number) => (
                  <div
                    key={idx}
                    className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-xs text-white relative reviewer-tooltip"
                  >
                    {reviewer.split(' ').map(n => n[0]).join('')}
                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-2 hidden bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10 pointer-events-none reviewer-tooltip-content">
                      {reviewer}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                    </div>
                  </div>
                ))}
              </div>
              <span className="text-sm text-slate-700">{project.reviewers.join(', ')}</span>
            </div>
          </div>
        )}
      </div>

      {/* Progress Steps */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const status = getStepStatus(step.id);
            
            return (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <button
                    onClick={() => setActiveTab(step.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      status === 'completed'
                        ? 'bg-green-600 text-white'
                        : status === 'current'
                        ? 'text-white'
                        : 'bg-slate-100 text-slate-400'
                    } ${activeTab === step.id ? 'ring-4 ring-indigo-200' : ''}`}
                    style={status === 'current' ? { backgroundColor: 'rgb(0, 48, 135)' } : {}}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                  <p className={`mt-2 text-xs text-center ${
                    status === 'current' ? 'text-slate-900 font-medium' : 'text-slate-600'
                  }`}>
                    {step.label}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`h-0.5 flex-1 -mx-4 ${
                    getStepStatus(steps[index + 1].id) === 'completed' || getStepStatus(steps[index + 1].id) === 'current'
                      ? 'bg-green-600'
                      : 'bg-slate-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'upload' && <DocumentUpload projectId={projectId} />}
        {activeTab === 'analysis' && <PreReviewAnalysis projectId={projectId} />}
        {activeTab === 'scheduling' && <ReviewScheduling project={project} />}
        {activeTab === 'action-items' && <ActionItemsTracker projectId={projectId} />}
        {activeTab === 'approved' && <ReviewReport project={project} />}
      </div>
    </div>
  );
}
