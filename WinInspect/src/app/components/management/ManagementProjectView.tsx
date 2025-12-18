import { useState } from 'react';
import { ArrowLeft, AlertTriangle, TrendingDown, Clock, UserPlus, Send, MessageSquare, Calendar, Sparkles, Target, Zap } from 'lucide-react';

interface ManagementProjectViewProps {
  projectId: string;
  onBack: () => void;
}

export default function ManagementProjectView({ projectId, onBack }: ManagementProjectViewProps) {
  const [showIntervention, setShowIntervention] = useState(false);
  const [interventionType, setInterventionType] = useState<string>('');

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Dashboard
      </button>

      {/* Project Header */}
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl border border-slate-200 p-8 shadow-lg">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h1 className="text-slate-900">User Authentication Service</h1>
              <span className="px-4 py-1.5 bg-red-500 text-white rounded-full text-sm font-semibold shadow-sm">
                CRITICAL
              </span>
              <span className="px-4 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-semibold border-2 border-red-500 animate-pulse">
                SLA AT RISK
              </span>
            </div>
            <div className="flex items-center gap-6 text-slate-600">
              <span className="font-medium">TQA-2025-1236</span>
              <span>Jane Smith</span>
              <span className="flex items-center gap-1.5 text-red-600 font-medium">
                <Clock className="w-4 h-4" />
                1 day remaining
              </span>
            </div>
          </div>
          <div className="text-center px-8 py-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-300">
            <p className="text-sm text-amber-700 mb-1">AI Readiness</p>
            <p className="text-5xl font-bold text-amber-600">78</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700">Overall Progress</span>
            <span className="text-sm font-bold text-slate-900">10/25 items • 40%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full" style={{ width: '40%' }} />
          </div>
        </div>
      </div>

      {/* AI Prediction */}
      <div className="bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48"></div>
        <div className="relative">
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-11 h-11" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">AI Completion Prediction</h3>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5">
                  <p className="text-red-100 text-sm mb-1">Predicted Date</p>
                  <p className="text-2xl font-bold">Dec 27</p>
                  <div className="flex items-center gap-1 text-sm mt-2">
                    <TrendingDown className="w-4 h-4" />
                    3 days delayed
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5">
                  <p className="text-red-100 text-sm mb-1">Confidence</p>
                  <p className="text-2xl font-bold">85%</p>
                  <p className="text-sm text-red-100 mt-2">High certainty</p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5">
                  <p className="text-red-100 text-sm mb-1">Breach Risk</p>
                  <p className="text-2xl font-bold">HIGH</p>
                  <p className="text-sm text-red-100 mt-2">Act now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2 space-y-6">
          {/* Risk Analysis */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
              <h3 className="text-slate-900 font-semibold">Risk Analysis</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="p-5 bg-gradient-to-br from-red-50 to-rose-50 rounded-xl border border-red-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-slate-900">Schedule Risk</h4>
                      <span className="px-2 py-0.5 bg-red-500 text-white rounded-full text-xs font-semibold">
                        CRITICAL
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">
                      3 action items pending with 1 day to deadline
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-red-200">
                      <p className="text-xs font-semibold text-slate-600 mb-1">IMPACT</p>
                      <p className="text-sm text-slate-900">SLA breach likely without intervention</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl border border-orange-200">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-semibold text-slate-900">Security Scan</h4>
                      <span className="px-2 py-0.5 bg-orange-500 text-white rounded-full text-xs font-semibold">
                        HIGH
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-3">
                      Security scan not yet completed
                    </p>
                    <div className="bg-white rounded-lg p-3 border border-orange-200">
                      <p className="text-xs font-semibold text-slate-600 mb-1">IMPACT</p>
                      <p className="text-sm text-slate-900">Cannot approve without security clearance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-indigo-200 bg-white/50">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-indigo-600" />
                <h3 className="text-slate-900 font-semibold">AI Recommendations</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {/* Recommendation 1 */}
              <div className="bg-white rounded-xl border border-indigo-200 p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-semibold inline-block mb-3">
                      IMMEDIATE
                    </span>
                    <h4 className="font-semibold text-slate-900 mb-3">
                      Escalate security scan to InfoSec team
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-slate-50 rounded-lg">
                        <p className="text-xs text-slate-600 mb-1">RATIONALE</p>
                        <p className="text-sm text-slate-900">2-day typical turnaround</p>
                      </div>
                      <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <p className="text-xs text-slate-600 mb-1">IMPACT</p>
                        <p className="text-sm text-green-700 font-medium">Save 1-2 days</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setInterventionType('escalate');
                    setShowIntervention(true);
                  }}
                  className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                >
                  Take Action
                </button>
              </div>

              {/* Recommendation 2 */}
              <div className="bg-white rounded-xl border border-indigo-200 p-5">
                <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold inline-block mb-3">
                  HIGH PRIORITY
                </span>
                <h4 className="font-semibold text-slate-900 mb-3">
                  Assign additional reviewer for parallel UAT verification
                </h4>
                <button
                  onClick={() => {
                    setInterventionType('reassign-reviewer');
                    setShowIntervention(true);
                  }}
                  className="w-full px-4 py-3 bg-white border-2 border-indigo-300 text-indigo-600 rounded-xl hover:bg-indigo-50 transition-all font-semibold"
                >
                  Add Reviewer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-1 space-y-6">
          {/* Blockers */}
          <div className="bg-white rounded-2xl border border-red-200 shadow-sm overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-red-50 to-rose-50 border-b border-red-200">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-red-600" />
                <h4 className="font-semibold text-slate-900">Blockers</h4>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-slate-900 font-medium mb-2">Security scan pending</p>
                <button className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  Escalate →
                </button>
              </div>
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-slate-900 font-medium mb-2">UAT sign-off missing</p>
                <button className="text-xs text-indigo-600 hover:text-indigo-700 font-semibold">
                  Escalate →
                </button>
              </div>
            </div>
          </div>

          {/* Intervention Controls */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
              <h4 className="font-semibold text-slate-900">Quick Actions</h4>
            </div>
            <div className="p-4 space-y-2">
              <button
                onClick={() => {
                  setInterventionType('reassign-reviewer');
                  setShowIntervention(true);
                }}
                className="w-full p-4 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 rounded-xl transition-all flex items-center gap-3 border border-blue-200 group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <UserPlus className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-slate-900">Add Reviewer</p>
                  <p className="text-xs text-slate-600">Assign resources</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setInterventionType('escalate');
                  setShowIntervention(true);
                }}
                className="w-full p-4 bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 rounded-xl transition-all flex items-center gap-3 border border-orange-200 group"
              >
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-slate-900">Escalate</p>
                  <p className="text-xs text-slate-600">Notify leadership</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setInterventionType('adjust-timeline');
                  setShowIntervention(true);
                }}
                className="w-full p-4 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-xl transition-all flex items-center gap-3 border border-purple-200 group"
              >
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-slate-900">Adjust Timeline</p>
                  <p className="text-xs text-slate-600">Extend deadline</p>
                </div>
              </button>

              <button
                onClick={() => {
                  setInterventionType('add-comment');
                  setShowIntervention(true);
                }}
                className="w-full p-4 bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-xl transition-all flex items-center gap-3 border border-green-200 group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-slate-900">Add Note</p>
                  <p className="text-xs text-slate-600">Provide guidance</p>
                </div>
              </button>
            </div>
          </div>

          {/* Activity */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 bg-gradient-to-r from-slate-50 to-white border-b border-slate-200">
              <h4 className="font-semibold text-slate-900">Recent Activity</h4>
            </div>
            <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-900">Added manual finding</p>
                  <p className="text-xs text-slate-500">Dec 23, 2pm • Sarah Chen</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-900">Uploaded security scan request</p>
                  <p className="text-xs text-slate-500">Dec 22, 4pm • Jane Smith</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-900">AI pre-analysis completed</p>
                  <p className="text-xs text-slate-500">Dec 19, 3pm • System</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Intervention Modal */}
      {showIntervention && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
            <h3 className="text-slate-900 font-semibold text-xl mb-6">
              {interventionType === 'reassign-reviewer' && 'Add Additional Reviewer'}
              {interventionType === 'escalate' && 'Escalate to Leadership'}
              {interventionType === 'adjust-timeline' && 'Adjust Project Timeline'}
              {interventionType === 'add-comment' && 'Add Management Guidance'}
            </h3>

            <div className="space-y-4">
              {interventionType === 'reassign-reviewer' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Select Reviewer
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>David Lee - 1 active review</option>
                      <option>Emily Zhang - 2 active reviews</option>
                      <option>Michael Brown - Available</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Reason
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Explain why additional reviewer is needed..."
                    />
                  </div>
                </>
              )}

              {interventionType === 'adjust-timeline' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      New Deadline
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Justification (logged for audit)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Provide business justification..."
                    />
                  </div>
                </>
              )}

              {interventionType === 'add-comment' && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Management Guidance
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="Provide guidance to reviewer and engineer..."
                  />
                </div>
              )}

              {interventionType === 'escalate' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Escalate To
                    </label>
                    <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500">
                      <option>VP Engineering</option>
                      <option>CTO</option>
                      <option>Director of Security</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Details
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      placeholder="Describe the issue requiring escalation..."
                    />
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => setShowIntervention(false)}
                className="px-6 py-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-colors font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowIntervention(false)}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold"
              >
                Confirm & Log Intervention
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
