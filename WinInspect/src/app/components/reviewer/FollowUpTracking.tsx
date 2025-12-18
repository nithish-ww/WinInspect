import { CheckCircle2, Clock, AlertTriangle, Upload, Bell, Send } from 'lucide-react';

interface FollowUpTrackingProps {
  project: any;
}

const actionItems = [
  {
    id: 'ACTION-001',
    title: 'Implement rate limiting on authentication endpoints',
    owner: 'Engineering Team',
    priority: 'critical',
    deadline: 'Dec 28, 2025',
    status: 'completed',
    completedDate: 'Dec 27, 2025',
    evidence: ['rate-limiting-config.yaml', 'updated-auth-service.js'],
    reviewerNotes: 'Implementation verified. Rate limiting set to 5 attempts/min per IP as recommended.',
  },
  {
    id: 'ACTION-002',
    title: 'Obtain UAT sign-off documentation',
    owner: 'Product Team',
    priority: 'high',
    deadline: 'Dec 29, 2025',
    status: 'in-progress',
    lastUpdate: 'Dec 26, 2025',
    progress: 75,
    engineerComment: 'UAT testing completed. Waiting for final sign-off from Product Manager.',
  },
  {
    id: 'ACTION-003',
    title: 'Add database indexes on high-traffic queries',
    owner: 'Database Team',
    priority: 'medium',
    deadline: 'Jan 5, 2026',
    status: 'open',
    daysRemaining: 10,
  },
];

export default function FollowUpTracking({ project }: FollowUpTrackingProps) {
  const completedCount = actionItems.filter(a => a.status === 'completed').length;
  const totalCount = actionItems.length;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in-progress':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'open':
        return 'bg-slate-100 text-slate-700 border-slate-200';
      case 'overdue':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-700';
      case 'high':
        return 'bg-orange-100 text-orange-700';
      case 'medium':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-slate-900 mb-1">Action Items Progress</h3>
            <p className="text-slate-600 text-sm">Track completion and verify engineer fixes</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-indigo-600">{progressPercentage}%</p>
            <p className="text-sm text-slate-600">{completedCount}/{totalCount} completed</p>
          </div>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
          <div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-slate-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-green-600">
              {actionItems.filter(a => a.status === 'completed').length}
            </p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-slate-600 mb-1">In Progress</p>
            <p className="text-2xl font-bold text-blue-600">
              {actionItems.filter(a => a.status === 'in-progress').length}
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-600 mb-1">Open</p>
            <p className="text-2xl font-bold text-slate-600">
              {actionItems.filter(a => a.status === 'open').length}
            </p>
          </div>
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-sm text-slate-600 mb-1">Overdue</p>
            <p className="text-2xl font-bold text-red-600">
              {actionItems.filter(a => a.status === 'overdue').length}
            </p>
          </div>
        </div>
      </div>

      {/* Automated Reminders */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <div className="flex items-start gap-3">
          <Bell className="w-5 h-5 text-blue-600 mt-0.5" />
          <div className="flex-1">
            <h4 className="font-semibold text-slate-900 mb-1">Automated Reminder System</h4>
            <p className="text-slate-700 text-sm mb-3">
              System automatically sends reminders to engineers based on status and deadlines:
            </p>
            <div className="space-y-1 text-sm text-slate-700">
              <p>• Daily reminders for items due within 3 days</p>
              <p>• Immediate notification when items become overdue</p>
              <p>• Weekly summary for all pending items</p>
              <p>• Notification to reviewer when items are marked ready for re-review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="space-y-4">
        {actionItems.map((action) => (
          <div
            key={action.id}
            className={`bg-white rounded-xl border-2 transition-all ${
              action.status === 'completed'
                ? 'border-green-200'
                : action.status === 'in-progress'
                ? 'border-blue-200'
                : 'border-slate-200'
            }`}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(action.status)}`}>
                      {action.status.toUpperCase().replace('-', ' ')}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(action.priority)}`}>
                      {action.priority.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-500">{action.id}</span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{action.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>Owner: {action.owner}</span>
                    <span>•</span>
                    <span>Deadline: {action.deadline}</span>
                    {action.daysRemaining !== undefined && (
                      <>
                        <span>•</span>
                        <span className={action.daysRemaining <= 3 ? 'text-red-600 font-medium' : ''}>
                          {action.daysRemaining} days remaining
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Status-specific Content */}
              {action.status === 'completed' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 mb-1">
                        Completed on {action.completedDate}
                      </p>
                      {action.evidence && (
                        <div className="mb-3">
                          <p className="text-xs font-medium text-slate-600 mb-2">Evidence Uploaded:</p>
                          <div className="flex flex-wrap gap-2">
                            {action.evidence.map((file, idx) => (
                              <div key={idx} className="flex items-center gap-2 px-3 py-1 bg-white border border-green-200 rounded text-xs">
                                <Upload className="w-3 h-3 text-green-600" />
                                {file}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {action.reviewerNotes && (
                        <div className="bg-white rounded-lg border border-green-200 p-3">
                          <p className="text-xs font-medium text-slate-600 mb-1">Reviewer Verification:</p>
                          <p className="text-sm text-slate-900">{action.reviewerNotes}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      Approve & Close
                    </button>
                    <button className="px-4 py-2 bg-white text-slate-700 border border-green-200 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
                      Request Changes
                    </button>
                  </div>
                </div>
              )}

              {action.status === 'in-progress' && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 mb-2">In Progress</p>
                      {action.progress !== undefined && (
                        <div className="mb-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-slate-600">Progress</span>
                            <span className="font-medium text-slate-900">{action.progress}%</span>
                          </div>
                          <div className="w-full bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full transition-all"
                              style={{ width: `${action.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                      {action.engineerComment && (
                        <div className="bg-white rounded-lg border border-blue-200 p-3">
                          <p className="text-xs font-medium text-slate-600 mb-1">Engineer Update:</p>
                          <p className="text-sm text-slate-900">{action.engineerComment}</p>
                          <p className="text-xs text-slate-500 mt-1">Last updated: {action.lastUpdate}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {action.status === 'open' && (
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-slate-700">
                        Waiting for engineer to start work on this item.
                      </p>
                      <button className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Reminder
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Re-review Decision */}
      {completedCount === totalCount && (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-slate-900 mb-2">All Action Items Completed!</h3>
              <p className="text-slate-700 mb-4">
                All action items have been addressed by the engineering team. Review the evidence and
                verify fixes before granting final approval.
              </p>
              <div className="flex items-center gap-3">
                <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                  Grant Final Approval
                </button>
                <button className="px-6 py-3 bg-white text-slate-700 border border-green-200 rounded-lg hover:bg-slate-50 transition-colors font-medium">
                  Request Additional Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
          Export Status Report
        </button>
        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 font-medium">
          Send Status Update to Engineer
        </button>
      </div>
    </div>
  );
}
