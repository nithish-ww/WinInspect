import { useState } from 'react';
import { ArrowLeft, FileText, Calendar, CheckCircle2, AlertCircle, Eye, Edit, FileCheck } from 'lucide-react';
import PreReviewPreparation from './PreReviewPreparation';
import DocumentReview from './DocumentReview';
import ManualFindings from './ManualFindings';
import ReviewMeeting from './ReviewMeeting';
import ReportGeneration from './ReportGeneration';
import FollowUpTracking from './FollowUpTracking';

interface ReviewerProjectViewProps {
  projectId: string;
  onBack: () => void;
}

// Mock project data
const getProjectData = (id: string) => {
  return {
    id,
    name: 'Mobile App Performance Optimization',
    engineer: 'John Engineer',
    type: 'Enhancement',
    status: 'preparation',
    readinessScore: 89,
    submittedDate: 'Dec 20, 2025',
    reviewDate: 'Dec 26, 2025',
    priority: 'high',
    currentStage: 'preparation',
  };
};

export default function ReviewerProjectView({ projectId, onBack }: ReviewerProjectViewProps) {
  const project = getProjectData(projectId);
  const [activeTab, setActiveTab] = useState<string>(project.currentStage);

  const tabs = [
    { id: 'preparation', label: 'Pre-Review Preparation', icon: Eye },
    { id: 'document-review', label: 'Document Review', icon: FileText },
    { id: 'findings', label: 'Manual Findings', icon: Edit },
    { id: 'meeting', label: 'Review Meeting', icon: Calendar },
    { id: 'report', label: 'Generate Report', icon: FileCheck },
    { id: 'follow-up', label: 'Track Follow-ups', icon: CheckCircle2 },
  ];

  const getTabStatus = (tabId: string) => {
    const tabIndex = tabs.findIndex(t => t.id === tabId);
    const currentIndex = tabs.findIndex(t => t.id === project.currentStage);
    
    if (tabIndex < currentIndex) return 'completed';
    if (tabIndex === currentIndex) return 'current';
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
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-slate-900">{project.name}</h1>
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium border border-orange-200">
                {project.priority.toUpperCase()} PRIORITY
              </span>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                {project.id}
              </span>
              <span>{project.type}</span>
              <span>Engineer: {project.engineer}</span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Review: {project.reviewDate}
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-slate-500 mb-1">AI Readiness Score</p>
            <p className="text-3xl font-bold text-blue-600">
              {project.readinessScore}
              <span className="text-lg text-slate-400">/100</span>
            </p>
          </div>
        </div>
      </div>

      {/* Progress Tabs */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between overflow-x-auto">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const status = getTabStatus(tab.id);
            
            return (
              <div key={tab.id} className="flex items-center flex-1 min-w-0">
                <div className="flex flex-col items-center flex-1">
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      status === 'completed'
                        ? 'bg-green-100 text-green-600'
                        : status === 'current'
                        ? 'text-white'
                        : 'bg-slate-100 text-slate-400'
                    } ${activeTab === tab.id ? 'ring-4 ring-indigo-200' : ''}`}
                    style={status === 'current' ? { backgroundColor: 'rgb(0, 48, 135)' } : {}}
                  >
                    <Icon className="w-6 h-6" />
                  </button>
                  <p className={`mt-2 text-xs text-center ${
                    status === 'current' ? 'text-slate-900 font-medium' : 'text-slate-600'
                  }`}>
                    {tab.label}
                  </p>
                </div>
                {index < tabs.length - 1 && (
                  <div className={`h-0.5 flex-1 -mx-4 ${
                    getTabStatus(tabs[index + 1].id) === 'completed' || getTabStatus(tabs[index + 1].id) === 'current'
                      ? 'bg-green-300'
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
        {activeTab === 'preparation' && <PreReviewPreparation project={project} />}
        {activeTab === 'document-review' && <DocumentReview project={project} />}
        {activeTab === 'findings' && <ManualFindings project={project} />}
        {activeTab === 'meeting' && <ReviewMeeting project={project} />}
        {activeTab === 'report' && <ReportGeneration project={project} />}
        {activeTab === 'follow-up' && <FollowUpTracking project={project} />}
      </div>
    </div>
  );
}
