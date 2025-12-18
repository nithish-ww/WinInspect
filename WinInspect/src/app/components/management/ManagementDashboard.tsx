import { TrendingUp, AlertTriangle, CheckCircle2, Clock, BarChart3, Search, Sparkles, ArrowRight } from 'lucide-react';

interface ManagementDashboardProps {
  onViewProject: (projectId: string) => void;
  onViewAnalytics: () => void;
}

const allProjects = [
  {
    id: 'TQA-2025-1236',
    name: 'User Authentication Service',
    engineer: 'Jane Smith',
    reviewer: 'Sarah Chen',
    priority: 'critical',
    riskLevel: 'high',
    progress: 40,
    daysRemaining: 1,
    slaStatus: 'at-risk',
    blockers: 2,
    aiScore: 78,
  },
  {
    id: 'TQA-2025-1235',
    name: 'Mobile App Performance Optimization',
    engineer: 'John Engineer',
    reviewer: 'Sarah Chen',
    priority: 'high',
    riskLevel: 'medium',
    progress: 65,
    daysRemaining: 3,
    slaStatus: 'on-track',
    blockers: 0,
    aiScore: 89,
  },
  {
    id: 'TQA-2025-1237',
    name: 'Data Analytics Dashboard',
    engineer: 'Mike Johnson',
    reviewer: 'David Lee',
    priority: 'medium',
    riskLevel: 'low',
    progress: 85,
    daysRemaining: 6,
    slaStatus: 'on-track',
    blockers: 0,
    aiScore: 92,
  },
];

export default function ManagementDashboard({ onViewProject, onViewAnalytics }: ManagementDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-slate-900 mb-1">Management Overview</h1>
          <p className="text-slate-500">Real-time insights across all TQA reviews</p>
        </div>
        <button
          onClick={onViewAnalytics}
          className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2 font-medium shadow-md"
        >
          <BarChart3 className="w-5 h-5" />
          View Analytics
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-blue-100 text-sm mb-1">Active Reviews</p>
          <p className="text-4xl font-bold">3</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <AlertTriangle className="w-8 h-8 opacity-80" />
          </div>
          <p className="text-amber-100 text-sm mb-1">At Risk</p>
          <p className="text-4xl font-bold">1</p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle2 className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-green-100 text-sm mb-1">This Month</p>
          <p className="text-4xl font-bold">12</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-purple-100 text-sm mb-1">Avg Time</p>
          <p className="text-4xl font-bold">5.2<span className="text-xl ml-1">days</span></p>
        </div>
      </div>

      {/* Critical Alert */}
      <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-9 h-9" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-2xl font-bold">AI Alert: SLA Risk Detected</h3>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  CRITICAL
                </span>
              </div>
              <p className="text-red-50 text-lg mb-6 max-w-3xl">
                <strong>User Authentication Service</strong> has 1 day until deadline. AI predicts 85% probability of SLA breach without intervention.
              </p>
              <button
                onClick={() => onViewProject('TQA-2025-1236')}
                className="px-8 py-3 bg-white text-red-600 rounded-xl hover:bg-red-50 transition-all font-semibold shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                Intervene Now
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
          <h4 className="text-slate-900 font-semibold mb-4">Status</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">In Progress</span>
              <span className="text-xl font-bold text-blue-600">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Pending Actions</span>
              <span className="text-xl font-bold text-amber-600">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Completed</span>
              <span className="text-xl font-bold text-green-600">12</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all">
          <h4 className="text-slate-900 font-semibold mb-4">Compliance</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-600">SLA Rate</span>
              <span className="text-xl font-bold text-green-600">94%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">High Risk</span>
              <span className="text-xl font-bold text-red-600">1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-600">Overdue</span>
              <span className="text-xl font-bold text-slate-900">0</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 p-6 shadow-sm hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            <h4 className="text-slate-900 font-semibold">AI Insights</h4>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-slate-700">• 1 project at SLA risk</p>
            <p className="text-slate-700">• 2 reviews completing this week</p>
            <p className="text-slate-700">• Sarah Chen: 3 active reviews</p>
          </div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-slate-900 font-semibold mb-1">Active Projects</h2>
              <p className="text-slate-500 text-sm">Click any project for detailed insights</p>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {allProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onViewProject(project.id)}
              className="p-6 hover:bg-gradient-to-r hover:from-indigo-50/50 hover:to-purple-50/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {project.name}
                    </h3>
                    {project.priority === 'critical' && (
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                        CRITICAL
                      </span>
                    )}
                    {project.priority === 'high' && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold">
                        HIGH
                      </span>
                    )}
                    {project.slaStatus === 'at-risk' && (
                      <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold animate-pulse">
                        AT RISK
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-slate-600 mb-4">
                    <span className="font-medium">{project.id}</span>
                    <span>{project.engineer}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {project.daysRemaining}d left
                    </span>
                    {project.blockers > 0 && (
                      <span className="flex items-center gap-1 text-red-600 font-medium">
                        <AlertTriangle className="w-4 h-4" />
                        {project.blockers} blocker{project.blockers > 1 ? 's' : ''}
                      </span>
                    )}
                  </div>

                  {/* Progress */}
                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-slate-600">Progress</span>
                        <span className="text-sm font-semibold text-slate-900">{project.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            project.progress >= 75 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                            project.progress >= 50 ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                            'bg-gradient-to-r from-red-500 to-orange-500'
                          }`}
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    {/* AI Score */}
                    <div className="text-center px-6 py-2 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
                      <p className="text-xs text-slate-600 mb-1">AI Score</p>
                      <p className={`text-2xl font-bold ${
                        project.aiScore >= 90 ? 'text-green-600' :
                        project.aiScore >= 75 ? 'text-blue-600' : 'text-amber-600'
                      }`}>
                        {project.aiScore}
                      </p>
                    </div>

                    {/* Risk Badge */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl">
                      <div className={`w-3 h-3 rounded-full ${
                        project.riskLevel === 'high' ? 'bg-red-500' :
                        project.riskLevel === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                      }`} />
                      <span className={`text-sm font-semibold ${
                        project.riskLevel === 'high' ? 'text-red-600' :
                        project.riskLevel === 'medium' ? 'text-amber-600' : 'text-green-600'
                      }`}>
                        {project.riskLevel.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>

                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
