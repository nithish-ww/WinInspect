import { Calendar, CheckCircle2, Clock, FileText, LayoutDashboard, Plus, Tag, TrendingUp } from 'lucide-react';

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
          className="px-6 py-3 text-white rounded-lg transition-all shadow-lg flex items-center gap-2"
          style={{ backgroundColor: '#003087' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#002366'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#003087'}
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
        <div className="rounded-xl p-4" style={{ background: 'linear-gradient(to right, #003087, #00b3c2)' }}>
          {upcomingReviews.map((review) => (
            <div key={review.id} className="flex items-center justify-between text-white">
              {/* Left: Icon, Project & Date */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{review.project}</h4>
                  <p className="text-indigo-100 text-sm">{review.date} at {review.time}</p>
                </div>
              </div>

              {/* Right: Reviewers & Button */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {review.reviewers.map((reviewer, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 bg-white rounded-full border-2 border-indigo-500 flex items-center justify-center text-xs text-indigo-600 font-semibold relative reviewer-tooltip"
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
                  <span className="text-white text-sm font-medium">{review.reviewers.length} reviewer{review.reviewers.length !== 1 ? 's' : ''}</span>
                </div>
                <button
                  onClick={() => onViewProject(review.id)}
                  className="px-4 py-2 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors text-sm font-semibold"
                >
                  Prepare →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Projects List */}
      <div>
        <div className="flex items-center justify-between mb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-xl hover:border-slate-300 transition-all cursor-pointer group"
              onClick={() => onViewProject(project.id)}
            >
              {/* Icon and Project Name - Horizontal */}
              <div className="flex items-start gap-3 mb-6">
                <div className="rounded-xl flex items-center justify-center flex-shrink-0 p-3" style={{ backgroundColor: '#E6F0FF' }}>
                  <LayoutDashboard className="w-8 h-8" style={{ color: '#003087' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 transition-colors mb-2" style={{ color: '#003087' }}>
                    {project.name}
                  </h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    project.status === 'Review Scheduled' ? 'bg-blue-100 text-blue-700' :
                    project.status === 'Action Items Pending' ? 'bg-amber-100 text-amber-700' :
                    'bg-slate-100 text-slate-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Details - ID, Type, Submitted */}
              <div className="flex items-center gap-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" style={{ color: '#003087' }} />
                  <span>{project.id}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Tag className="w-4 h-4" style={{ color: '#003087' }} />
                  <span>{project.type}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" style={{ color: '#003087' }} />
                  <span>Submitted: {project.submittedDate}</span>
                </div>
              </div>

              {/* Footer with Avatars and Stats */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                {/* Reviewers Avatars */}
                <div className="flex items-center gap-2">
                  {project.reviewers.length > 0 ? (
                    <>
                      <div className="flex -space-x-3">
                        {project.reviewers.slice(0, 2).map((reviewer, idx) => (
                          <div
                            key={idx}
                            className={`w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs text-white font-semibold relative reviewer-tooltip ${
                              idx === 0 
                                ? 'bg-blue-500' 
                                : 'bg-cyan-400'
                            }`}
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
                      <span className="text-sm text-slate-600 font-medium ml-1">
                        {project.reviewers.length} reviewer{project.reviewers.length !== 1 ? 's' : ''}
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="flex -space-x-3">
                        <div className="w-9 h-9 bg-slate-200 rounded-full border-2 border-white"></div>
                        <div className="w-9 h-9 bg-slate-300 rounded-full border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-slate-400 font-medium ml-1">
                        No reviewers
                      </span>
                    </>
                  )}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-3 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{project.actionItems || 3}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.reviewers.length > 0 ? project.reviewers.length * 4 : 12}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
