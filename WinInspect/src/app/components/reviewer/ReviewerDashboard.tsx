import { AlertCircle, Bell, Calendar, CheckCircle2, Clock, FileText, TrendingUp, AlertTriangle, XCircle } from 'lucide-react';

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
    engineer: 'Alex Chen',
    actionItems: 5,
    completed: 3,
    dueDate: 'Dec 24, 2025',
    status: 'in-progress',
  },
  {
    id: 'TQA-2025-1231',
    name: 'Database Migration Tool',
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
      <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border-2 border-orange-300 p-6 animate-pulse">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Bell className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-slate-900">New Review Assignment</h3>
              <span className="px-3 py-1 bg-orange-600 text-white rounded-full text-xs font-medium">
                HIGH PRIORITY
              </span>
            </div>
            <p className="text-slate-700 mb-4">
              <strong>Mobile App Performance Optimization</strong> has been assigned to you for review.
              AI pre-analysis is complete with a readiness score of 89/100.
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => onViewProject('TQA-2025-1235')}
                className="px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Start Review Preparation
              </button>
              <button className="px-6 py-2 bg-white text-slate-700 rounded-lg hover:bg-slate-50 border border-orange-200 transition-colors font-medium">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-slate-600 text-sm mb-1">Assigned Reviews</p>
          <p className="text-slate-900 font-bold text-2xl">{assignedReviews.length}</p>
          <p className="text-orange-600 text-xs mt-2">1 new assignment</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">In Progress</p>
          <p className="text-slate-900 font-bold text-2xl">
            {assignedReviews.filter(r => r.status === 'in-review').length}
          </p>
          <p className="text-slate-500 text-xs mt-2">Active reviews</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Follow-ups</p>
          <p className="text-slate-900 font-bold text-2xl">{followUps.length}</p>
          <p className="text-green-600 text-xs mt-2">1 ready for re-review</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">This Month</p>
          <p className="text-slate-900 font-bold text-2xl">18</p>
          <p className="text-green-600 text-xs mt-2">+3 vs last month</p>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-slate-600" />
              <h3 className="text-slate-900">Recent Notifications</h3>
            </div>
            <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">
              Mark all as read
            </button>
          </div>
        </div>
        <div className="divide-y divide-slate-200">
          {recentNotifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 hover:bg-slate-50 transition-colors ${
                !notif.isRead ? 'bg-blue-50/50' : ''
              }`}
            >
              <div className="flex items-start gap-3">
                {!notif.isRead && (
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`text-sm ${!notif.isRead ? 'font-medium text-slate-900' : 'text-slate-700'}`}>
                    {notif.title}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                </div>
                {notif.priority === 'high' && (
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                    HIGH
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Assigned Reviews */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
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
        </div>

        <div className="divide-y divide-slate-200">
          {assignedReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => onViewProject(review.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-900">{review.name}</h3>
                    {review.isNew && (
                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-medium">
                        NEW
                      </span>
                    )}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(review.priority)}`}>
                      {review.priority.toUpperCase()}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(review.status)}`}>
                      {getStatusLabel(review.status)}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-slate-600 mb-3">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {review.id}
                    </span>
                    <span>{review.type}</span>
                    <span>Engineer: {review.engineer}</span>
                    {review.daysUntil && (
                      <span className="flex items-center gap-1 text-orange-600 font-medium">
                        <Clock className="w-4 h-4" />
                        {review.daysUntil} days until review
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        review.riskLevel === 'high' ? 'bg-red-500' :
                        review.riskLevel === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                      }`} />
                      <span className="text-slate-600">
                        Risk: <span className="font-medium">{review.riskLevel}</span>
                      </span>
                    </div>
                    <span className="text-slate-600">{review.itemsToReview} items to review</span>
                    <span className="text-blue-600">{review.aiStatus}</span>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-xs text-slate-500 mb-1">AI Readiness Score</p>
                  <p className={`text-2xl font-bold ${
                    review.readinessScore >= 90 ? 'text-green-600' :
                    review.readinessScore >= 75 ? 'text-blue-600' :
                    review.readinessScore >= 60 ? 'text-amber-600' : 'text-red-600'
                  }`}>
                    {review.readinessScore}
                    <span className="text-sm text-slate-400">/100</span>
                  </p>
                </div>
              </div>

              {review.pendingActions && (
                <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-200 rounded-lg text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-700 font-medium">
                    {review.pendingActions} action items pending from engineer
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Follow-ups */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-slate-900 mb-1">Follow-up Tracking</h2>
          <p className="text-slate-600 text-sm">Monitor action item completion</p>
        </div>

        <div className="divide-y divide-slate-200">
          {followUps.map((followUp) => (
            <div
              key={followUp.id}
              className="p-6 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => onViewProject(followUp.id)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-900">{followUp.name}</h3>
                    {followUp.status === 'ready-for-re-review' && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Ready for Re-review
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>{followUp.id}</span>
                    <span>Engineer: {followUp.engineer}</span>
                    {followUp.status === 'in-progress' && (
                      <span>Due: {followUp.dueDate}</span>
                    )}
                    {followUp.completedDate && (
                      <span className="text-green-600">Completed: {followUp.completedDate}</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1">
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
                {followUp.status === 'ready-for-re-review' && (
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                    Start Re-review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
