import { AlertCircle, Calendar, CheckCircle2, Clock, FileText, Plus, TrendingUp } from 'lucide-react';

interface DashboardProps {
  onNewProject: () => void;
  onViewProject: (projectId: string) => void;
}

const projects = [
  {
    id: 'TQA-2025-1234',
    name: 'Payment Gateway v2.0',
    type: 'Major Release',
    status: 'Approved',
    readinessScore: 96,
    submittedDate: 'Dec 18, 2025',
    approvalDate: 'Dec 23, 2025',
    reviewers: ['Sarah Chen', 'Michael Torres'],
  },
  {
    id: 'TQA-2025-1235',
    name: 'Mobile App Performance Optimization',
    type: 'Enhancement',
    status: 'Review Scheduled',
    readinessScore: 89,
    submittedDate: 'Dec 20, 2025',
    reviewDate: 'Dec 26, 2025',
    reviewers: ['David Kim'],
  },
  {
    id: 'TQA-2025-1236',
    name: 'User Authentication Service',
    type: 'New Feature',
    status: 'Action Items Pending',
    readinessScore: 78,
    submittedDate: 'Dec 19, 2025',
    reviewDate: 'Dec 21, 2025',
    actionItems: 3,
    reviewers: ['Sarah Chen'],
  },
  {
    id: 'TQA-2025-1237',
    name: 'Data Analytics Dashboard',
    type: 'New Feature',
    status: 'Document Upload',
    readinessScore: 65,
    submittedDate: 'Dec 22, 2025',
    reviewers: [],
  },
];

const upcomingReviews = [
  {
    id: 'TQA-2025-1235',
    project: 'Mobile App Performance Optimization',
    date: 'Dec 26, 2025',
    time: '2:00 PM EST',
    reviewers: ['David Kim'],
    daysUntil: 3,
  },
];

export default function Dashboard({ onNewProject, onViewProject }: DashboardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'Review Scheduled':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Action Items Pending':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Document Upload':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 75) return 'text-blue-600';
    if (score >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900 mb-2">Welcome back, John</h1>
          <p className="text-slate-600">Manage your TQA reviews and track project progress</p>
        </div>
        <button
          onClick={onNewProject}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Request New TQA Review
        </button>
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
          <p className="text-slate-600 text-sm mb-1">Total Projects</p>
          <p className="text-slate-900 font-bold text-2xl">12</p>
          <p className="text-green-600 text-xs mt-2">+2 this month</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Approved</p>
          <p className="text-slate-900 font-bold text-2xl">8</p>
          <p className="text-slate-500 text-xs mt-2">67% approval rate</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">In Progress</p>
          <p className="text-slate-900 font-bold text-2xl">3</p>
          <p className="text-slate-500 text-xs mt-2">Active reviews</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Avg. Review Time</p>
          <p className="text-slate-900 font-bold text-2xl">5.2d</p>
          <p className="text-green-600 text-xs mt-2">-0.8 days vs last month</p>
        </div>
      </div>

      {/* Upcoming Reviews */}
      {upcomingReviews.length > 0 && (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Upcoming Review</h3>
              <p className="text-slate-600 text-sm">Your next scheduled review meeting</p>
            </div>
          </div>

          {upcomingReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg border border-indigo-200 p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{review.project}</h4>
                  <p className="text-slate-600 text-sm">{review.id}</p>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                  {review.daysUntil} days
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  {review.date} at {review.time}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {review.reviewers.map((reviewer, idx) => (
                      <div
                        key={idx}
                        className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-xs text-white"
                      >
                        {reviewer.split(' ').map(n => n[0]).join('')}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-600 text-sm">{review.reviewers.join(', ')}</span>
                </div>
              </div>
              <button
                onClick={() => onViewProject(review.id)}
                className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
              >
                Prepare for Review
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Projects List */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-slate-900 mb-1">Your Projects</h2>
              <p className="text-slate-600 text-sm">Track and manage all TQA review requests</p>
            </div>
            <div className="flex items-center gap-2">
              <select className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-700 bg-white">
                <option>All Projects</option>
                <option>Approved</option>
                <option>In Progress</option>
                <option>Pending</option>
              </select>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 hover:bg-slate-50 transition-colors cursor-pointer"
              onClick={() => onViewProject(project.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-slate-900">{project.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <FileText className="w-4 h-4" />
                      {project.id}
                    </span>
                    <span>{project.type}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Submitted: {project.submittedDate}
                    </span>
                  </div>
                </div>
                <div className="text-right ml-6">
                  <p className="text-xs text-slate-500 mb-1">Readiness Score</p>
                  <p className={`text-2xl font-bold ${getScoreColor(project.readinessScore)}`}>
                    {project.readinessScore}
                    <span className="text-sm text-slate-400">/100</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {project.reviewers.length > 0 && (
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {project.reviewers.slice(0, 3).map((reviewer, idx) => (
                          <div
                            key={idx}
                            className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full border-2 border-white flex items-center justify-center text-xs text-white"
                          >
                            {reviewer.split(' ').map(n => n[0]).join('')}
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">
                        {project.reviewers.length === 1
                          ? project.reviewers[0]
                          : `${project.reviewers.length} reviewers`}
                      </span>
                    </div>
                  )}
                  {project.actionItems && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                      <AlertCircle className="w-3 h-3" />
                      {project.actionItems} action items
                    </div>
                  )}
                </div>
                <button className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors text-sm font-medium">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
