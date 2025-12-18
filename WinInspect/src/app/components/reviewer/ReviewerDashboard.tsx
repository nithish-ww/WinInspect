import { AlertCircle, Bell, Calendar, CheckCircle2, Clock, FileText, AlertTriangle, LayoutDashboard, User, Briefcase } from 'lucide-react';

interface ReviewerDashboardProps {
  onViewProject: (projectId: string) => void;
}

const assignedReviews = [
  {
    id: 'TQA-2025-1235',
    name: 'Mobile App Performance Optimization',
    engineer: 'John Engineer',
    type: 'Enhancement',
    status: 'preparation',
    priority: 'high',
    assignedDate: 'Dec 20, 2025',
    dueDate: 'Dec 26, 2025',
    readinessScore: 89,
    daysUntil: 3,
    aiStatus: 'Pre-analysis complete',
    itemsToReview: 45,
    riskLevel: 'medium',
    isNew: true,
  },
  {
    id: 'TQA-2025-1236',
    name: 'User Authentication Service',
    engineer: 'Jane Smith',
    type: 'New Feature',
    status: 'in-review',
    priority: 'critical',
    assignedDate: 'Dec 19, 2025',
    reviewDate: 'Dec 21, 2025',
    readinessScore: 78,
    aiStatus: '3 critical findings',
    itemsToReview: 52,
    riskLevel: 'high',
    pendingActions: 3,
  },
  {
    id: 'TQA-2025-1237',
    name: 'Data Analytics Dashboard',
    engineer: 'Mike Johnson',
    type: 'New Feature',
    status: 'awaiting-docs',
    priority: 'medium',
    assignedDate: 'Dec 22, 2025',
    dueDate: 'Dec 29, 2025',
    readinessScore: 65,
    aiStatus: 'Incomplete documents',
    itemsToReview: 38,
    riskLevel: 'medium',
  },
];

const followUps = [
  {
    id: 'TQA-2025-1230',
    name: 'API Gateway Redesign',
    type: 'Enhancement',
    engineer: 'Alex Chen',
    actionItems: 5,
    completed: 3,
    dueDate: 'Dec 24, 2025',
    status: 'in-progress',
  },
  {
    id: 'TQA-2025-1231',
    name: 'Database Migration Tool',
    type: 'New Feature',
    engineer: 'Sam Wilson',
    actionItems: 2,
    completed: 2,
    completedDate: 'Dec 20, 2025',
    status: 'ready-for-re-review',
  },
];

const recentNotifications = [
  {
    id: 1,
    type: 'new-assignment',
    title: 'New review assigned: Mobile App Performance Optimization',
    time: '2 hours ago',
    priority: 'high',
    isRead: false,
  },
  {
    id: 2,
    type: 'action-complete',
    title: 'Database Migration Tool - All action items completed',
    time: '5 hours ago',
    priority: 'medium',
    isRead: false,
  },
  {
    id: 3,
    type: 'reminder',
    title: 'Reminder: User Authentication Service review in 1 day',
    time: '1 day ago',
    priority: 'medium',
    isRead: true,
  },
];

export default function ReviewerDashboard({ onViewProject }: ReviewerDashboardProps) {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'preparation':
        return 'Preparation';
      case 'in-review':
        return 'In Review';
      case 'awaiting-docs':
        return 'Awaiting Docs';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'preparation':
        return 'bg-blue-100 text-blue-700';
      case 'in-review':
        return 'bg-purple-100 text-purple-700';
      case 'awaiting-docs':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900 mb-2">Welcome back, Sarah</h1>
          <p className="text-slate-600">Manage your assigned reviews and track follow-ups</p>
        </div>
      </div>

      {/* New Assignment Alert */}
      <div className="rounded-xl p-6" style={{ background: 'linear-gradient(to right, #003087, #00b3c2)' }}>
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <Bell className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-white font-semibold">New Review Assignment</h3>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium">
                  HIGH PRIORITY
                </span>
              </div>
              <p className="text-white/90">
                <strong>Mobile App Performance Optimization</strong> has been assigned to you for review.
                AI pre-analysis is complete with a readiness score of 89/100.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => onViewProject('TQA-2025-1235')}
              className="px-6 py-2 bg-white rounded-lg transition-colors font-medium whitespace-nowrap"
              style={{ color: '#003087' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0f9ff'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
            >
              Start Review Preparation
            </button>
            <button 
              className="px-6 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg transition-colors font-medium border border-white/30 whitespace-nowrap"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
            >
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-slate-900 font-bold text-2xl mb-1">{assignedReviews.length}</p>
              <p className="text-slate-600 text-sm">Assigned Reviews</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-slate-900 font-bold text-2xl mb-1">
                {assignedReviews.filter(r => r.status === 'in-review').length}
              </p>
              <p className="text-slate-600 text-sm">In Progress</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-slate-900 font-bold text-2xl mb-1">{followUps.length}</p>
              <p className="text-slate-600 text-sm">Follow-ups</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1 text-right">
              <p className="text-slate-900 font-bold text-2xl mb-1">18</p>
              <p className="text-slate-600 text-sm">This Month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Assigned Reviews */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-slate-900 mb-1">Assigned Reviews</h2>
            <p className="text-slate-600 text-sm">Projects waiting for your review</p>
          </div>
          <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white">
            <option>All Reviews</option>
            <option>Preparation</option>
            <option>In Review</option>
            <option>Awaiting Docs</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer group"
              onClick={() => onViewProject(review.id)}
            >
              {/* Icon and Project Name - Horizontal */}
              <div className="flex items-start gap-3 mb-6">
                <div className="rounded-xl flex items-center justify-center flex-shrink-0 p-3" style={{ backgroundColor: '#E6F0FF' }}>
                  <LayoutDashboard className="w-8 h-8" style={{ color: '#003087' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold transition-colors mb-2" style={{ color: '#003087' }}>
                    {review.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {review.isNew && (
                      <span className="inline-block px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-medium">
                        NEW
                      </span>
                    )}
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                      {getStatusLabel(review.status)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Details - ID, Type, Engineer */}
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" style={{ color: 'rgb(0, 48, 135)' }} />
                  <span>{review.id}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" style={{ color: 'rgb(0, 48, 135)' }} />
                  <span>{review.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" style={{ color: 'rgb(0, 48, 135)' }} />
                  <span>{review.engineer}</span>
                </div>
              </div>

              {/* Risk Level, AI Status, Items to Review - in one line */}
              <div className="flex items-center gap-3 text-sm text-slate-600 mb-4">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${
                    review.riskLevel === 'high' ? 'bg-red-500' :
                    review.riskLevel === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`} />
                  <span>
                    Risk: <span className="font-medium">{review.riskLevel}</span>
                  </span>
                </div>
                <span className="text-blue-600 font-medium">{review.aiStatus}</span>
                <span>{review.itemsToReview} items to review</span>
              </div>

              {review.pendingActions && (
                <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-sm mb-6">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-700 font-medium text-xs">
                    {review.pendingActions} action items pending
                  </span>
                </div>
              )}

              {/* Footer with Priority and Readiness Score */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(review.priority)}`}>
                  {review.priority.toUpperCase()} PRIORITY
                </span>
                <div className="text-right">
                  <p className="text-xs text-slate-500 mb-0.5">AI Score</p>
                  <p className={`text-xl font-bold ${
                    review.readinessScore >= 90 ? 'text-green-600' :
                    review.readinessScore >= 75 ? 'text-blue-600' :
                    review.readinessScore >= 60 ? 'text-amber-600' : 'text-red-600'
                  }`}>
                    {review.readinessScore}
                    <span className="text-xs text-slate-400">/100</span>
                  </p>
                </div>
              </div>

              {review.daysUntil && (
                <div className="mt-4 flex items-center gap-2 px-3 py-1.5 bg-orange-50 border border-orange-200 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-orange-600" />
                  <span className="text-orange-700 font-medium text-xs">
                    Review in {review.daysUntil} days
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Follow-ups */}
      <div>
        <div className="mb-6">
          <h2 className="text-slate-900 mb-1">Follow-up Tracking</h2>
          <p className="text-slate-600 text-sm">Monitor action item completion</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {followUps.map((followUp) => (
            <div
              key={followUp.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer group"
              onClick={() => onViewProject(followUp.id)}
            >
              {/* Icon and Project Name - Horizontal */}
              <div className="flex items-start gap-3 mb-6">
                <div className="rounded-xl flex items-center justify-center flex-shrink-0 p-3" style={{ backgroundColor: '#E6F0FF' }}>
                  <LayoutDashboard className="w-8 h-8" style={{ color: '#003087' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold transition-colors mb-2" style={{ color: '#003087' }}>
                    {followUp.name}
                  </h3>
                  {followUp.status === 'ready-for-re-review' && (
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      Ready for Re-review
                    </span>
                  )}
                </div>
              </div>

              {/* Project Details - ID & Engineer */}
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" style={{ color: 'rgb(0, 48, 135)' }} />
                  <span>{followUp.id}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" style={{ color: 'rgb(0, 48, 135)' }} />
                  <span>{followUp.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4" style={{ color: 'rgb(0, 48, 135)' }} />
                  <span>{followUp.engineer}</span>
                </div>
              </div>

              {/* Due Date or Completed Date */}
              {followUp.status === 'in-progress' && followUp.dueDate && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg text-sm mb-4">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-blue-700 font-medium">Due: {followUp.dueDate}</span>
                </div>
              )}
              
              {followUp.completedDate && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-lg text-sm mb-4">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span className="text-green-700 font-medium">Completed: {followUp.completedDate}</span>
                </div>
              )}

              {/* Action Items Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600">Action Items Progress</span>
                  <span className="font-medium text-slate-900">
                    {followUp.completed}/{followUp.actionItems}
                  </span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${
                      followUp.completed === followUp.actionItems
                        ? 'bg-green-600'
                        : 'bg-blue-600'
                    }`}
                    style={{ width: `${(followUp.completed / followUp.actionItems) * 100}%` }}
                  />
                </div>
              </div>

              {/* Re-review Button */}
              {followUp.status === 'ready-for-re-review' && (
                <button 
                  className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewProject(followUp.id);
                  }}
                >
                  Start Re-review
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
