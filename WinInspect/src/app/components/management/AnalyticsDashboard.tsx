import { ArrowLeft, TrendingUp, TrendingDown, Download, Users, Clock, AlertTriangle, CheckCircle2, Sparkles, BarChart3 } from 'lucide-react';

interface AnalyticsDashboardProps {
  onBack: () => void;
}

export default function AnalyticsDashboard({ onBack }: AnalyticsDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors mb-4 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Dashboard
          </button>
          <h1 className="text-slate-900 mb-1">Analytics & Reporting</h1>
          <p className="text-slate-500">Comprehensive metrics and insights</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
            <option>Last Year</option>
          </select>
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all flex items-center gap-2 font-semibold shadow-md">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <CheckCircle2 className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-green-100 text-sm mb-1">This Month</p>
          <p className="text-4xl font-bold mb-1">12</p>
          <p className="text-green-100 text-sm">+20% vs last month</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <Clock className="w-8 h-8 opacity-80" />
            <TrendingDown className="w-5 h-5" />
          </div>
          <p className="text-blue-100 text-sm mb-1">Avg Duration</p>
          <p className="text-4xl font-bold mb-1">5.2<span className="text-xl ml-1">d</span></p>
          <p className="text-blue-100 text-sm">-12% improvement</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-8 h-8 opacity-80" />
            <TrendingUp className="w-5 h-5" />
          </div>
          <p className="text-purple-100 text-sm mb-1">SLA Compliance</p>
          <p className="text-4xl font-bold mb-1">94<span className="text-xl">%</span></p>
          <p className="text-purple-100 text-sm">47 of 50 met</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center justify-between mb-4">
            <Sparkles className="w-8 h-8 opacity-80" />
          </div>
          <p className="text-amber-100 text-sm mb-1">AI Readiness</p>
          <p className="text-4xl font-bold mb-1">86</p>
          <p className="text-amber-100 text-sm">Average score</p>
        </div>
      </div>

      {/* TechSure Impact */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="relative">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
              <TrendingUp className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold">TechSure Implementation Impact</h3>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <p className="text-green-100 mb-2">Before TechSure</p>
              <p className="text-4xl font-bold mb-1">8.5</p>
              <p className="text-sm text-green-100">days average</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <p className="text-green-100 mb-2">After TechSure</p>
              <p className="text-4xl font-bold mb-1">5.2</p>
              <p className="text-sm text-green-100">days average</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-green-600">
              <p className="text-green-700 mb-2">Time Savings</p>
              <p className="text-4xl font-bold mb-1">39%</p>
              <div className="flex items-center gap-1 text-sm">
                <TrendingDown className="w-4 h-4" />
                Faster reviews
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        {/* Monthly Trend */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
            <h3 className="text-slate-900 font-semibold">Monthly Trend</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { month: 'Jul', reviews: 8, progress: 53 },
                { month: 'Aug', reviews: 10, progress: 67 },
                { month: 'Sep', reviews: 9, progress: 60 },
                { month: 'Oct', reviews: 11, progress: 73 },
                { month: 'Nov', reviews: 10, progress: 67 },
                { month: 'Dec', reviews: 12, progress: 80 },
              ].map((month) => (
                <div key={month.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-slate-900">{month.month}</span>
                    <span className="text-sm text-slate-600">{month.reviews} reviews</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all"
                      style={{ width: `${month.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Types */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
            <h3 className="text-slate-900 font-semibold">Project Type Distribution</h3>
          </div>
          <div className="p-6 space-y-3">
            {[
              { type: 'New Feature', count: 18, color: 'from-blue-500 to-indigo-500' },
              { type: 'Enhancement', count: 12, color: 'from-green-500 to-emerald-500' },
              { type: 'Architecture', count: 7, color: 'from-purple-500 to-pink-500' },
              { type: 'Bug Fix', count: 8, color: 'from-amber-500 to-orange-500' },
              { type: 'Tool', count: 5, color: 'from-cyan-500 to-blue-500' },
            ].map((type) => (
              <div key={type.type} className="flex items-center gap-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-900 mb-1">{type.type}</p>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${type.color} h-2 rounded-full`}
                      style={{ width: `${(type.count / 18) * 100}%` }}
                    />
                  </div>
                </div>
                <span className="text-lg font-bold text-slate-900 w-8 text-right">{type.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Common Issues & Risk */}
      <div className="grid grid-cols-2 gap-6">
        {/* Common Issues */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
            <h3 className="text-slate-900 font-semibold">Common Issues</h3>
          </div>
          <div className="p-6 space-y-3">
            {[
              { issue: 'Missing UAT sign-off', count: 8, trend: 'stable' },
              { issue: 'Incomplete security scans', count: 6, trend: 'down' },
              { issue: 'Insufficient test coverage', count: 5, trend: 'up' },
              { issue: 'Missing performance benchmarks', count: 4, trend: 'down' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-medium text-slate-900 flex-1">{item.issue}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold">
                      {item.count}
                    </span>
                    {item.trend === 'up' && <TrendingUp className="w-4 h-4 text-red-600" />}
                    {item.trend === 'down' && <TrendingDown className="w-4 h-4 text-green-600" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Risk Distribution */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
            <h3 className="text-slate-900 font-semibold">Risk Distribution</h3>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-red-600">High Risk</span>
                <span className="text-sm text-slate-600">5 projects (10%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-red-500 to-rose-500 h-3 rounded-full" style={{ width: '10%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-amber-600">Medium Risk</span>
                <span className="text-sm text-slate-600">20 projects (40%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-3 rounded-full" style={{ width: '40%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-green-600">Low Risk</span>
                <span className="text-sm text-slate-600">25 projects (50%)</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full" style={{ width: '50%' }} />
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
              <div className="flex items-start gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-900 mb-1">AI Insight</p>
                  <p className="text-sm text-slate-700">
                    50% low risk indicates strong quality standards across engineering teams.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-slate-600" />
            <h3 className="text-slate-900 font-semibold">Team Performance</h3>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: 'Sarah Chen', active: 3, completed: 18, efficiency: 'high', color: 'from-green-500 to-emerald-500' },
              { name: 'David Lee', active: 2, completed: 15, efficiency: 'high', color: 'from-blue-500 to-indigo-500' },
              { name: 'Emily Zhang', active: 1, completed: 12, efficiency: 'medium', color: 'from-purple-500 to-pink-500' },
              { name: 'Michael Brown', active: 0, completed: 5, efficiency: 'high', color: 'from-amber-500 to-orange-500' },
            ].map((reviewer) => (
              <div key={reviewer.name} className="p-5 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-xl hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-slate-900">{reviewer.name}</p>
                  <div className={`w-3 h-3 rounded-full ${
                    reviewer.efficiency === 'high' ? 'bg-green-500' : 'bg-amber-500'
                  }`} />
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Active</span>
                    <span className="font-bold text-blue-600">{reviewer.active}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Completed</span>
                    <span className="font-bold text-slate-900">{reviewer.completed}</span>
                  </div>
                  <div className="pt-2 border-t border-slate-200">
                    <div className="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                      <div className={`bg-gradient-to-r ${reviewer.color} h-1.5 rounded-full`} style={{ width: '75%' }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quality Findings */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
          <h3 className="text-slate-900 font-semibold">Quality Findings Breakdown</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="p-6 bg-gradient-to-br from-red-50 to-rose-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700 mb-2">Critical</p>
              <p className="text-4xl font-bold text-red-600">23</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl">
              <p className="text-sm text-orange-700 mb-2">High</p>
              <p className="text-4xl font-bold text-orange-600">45</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200 rounded-xl">
              <p className="text-sm text-amber-700 mb-2">Medium</p>
              <p className="text-4xl font-bold text-amber-600">78</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
              <p className="text-sm text-blue-700 mb-2">Low</p>
              <p className="text-4xl font-bold text-blue-600">34</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-indigo-200 bg-white/50">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <h3 className="text-slate-900 font-semibold">AI Process Improvements</h3>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-indigo-200 p-5 hover:shadow-md transition-all">
              <span className="px-2 py-1 bg-red-100 text-red-700 rounded-lg text-xs font-semibold inline-block mb-3">
                HIGH IMPACT
              </span>
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Standardize UAT Documentation
              </p>
              <p className="text-xs text-slate-600">
                8 projects flagged for missing UAT sign-off
              </p>
            </div>
            <div className="bg-white rounded-xl border border-indigo-200 p-5 hover:shadow-md transition-all">
              <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded-lg text-xs font-semibold inline-block mb-3">
                MEDIUM IMPACT
              </span>
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Automate Security Scanning
              </p>
              <p className="text-xs text-slate-600">
                Average 2-day delay waiting for scans
              </p>
            </div>
            <div className="bg-white rounded-xl border border-indigo-200 p-5 hover:shadow-md transition-all">
              <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-lg text-xs font-semibold inline-block mb-3">
                LOW IMPACT
              </span>
              <p className="text-sm font-semibold text-slate-900 mb-2">
                Increase Test Coverage Threshold
              </p>
              <p className="text-xs text-slate-600">
                Current 75% threshold met by all
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
          <h3 className="text-slate-900 font-semibold">Compliance & Audit Readiness</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-sm font-medium text-slate-700">Complete Documentation</span>
                <span className="text-xl font-bold text-green-600">96%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-sm font-medium text-slate-700">Audit Trail Coverage</span>
                <span className="text-xl font-bold text-green-600">100%</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
                <span className="text-sm font-medium text-slate-700">Interventions Logged</span>
                <span className="text-xl font-bold text-green-600">All</span>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl text-white flex flex-col items-center justify-center">
              <p className="text-blue-100 mb-3">Audit Readiness Score</p>
              <p className="text-6xl font-bold mb-3">A+</p>
              <p className="text-sm text-blue-100 text-center">
                Ready for regulatory audit
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
