import { useState } from 'react';
import { CheckCircle2, Clock, Upload, AlertCircle, Calendar, User, FileText } from 'lucide-react';

interface ActionItemsTrackerProps {
  projectId: string;
}

const actionItems = [
  {
    id: 'ACTION-2025-1234-001',
    title: 'Complete security training for remaining team members',
    priority: 'critical',
    status: 'done',
    owner: 'Engineering Team',
    deadline: 'Dec 28, 2025',
    completedDate: 'Dec 20, 2025',
    description: 'Ensure all 5 team members complete mandatory security training',
    evidence: 'Training certificates uploaded',
    relatedChecklist: 'Security training complete',
  },
  {
    id: 'ACTION-2025-1234-002',
    title: 'Document and test database rollback procedure',
    priority: 'critical',
    status: 'in-review',
    owner: 'Database Team',
    deadline: 'Dec 23, 2025',
    completedDate: 'Dec 20, 2025',
    description: 'Create comprehensive rollback documentation and conduct test',
    evidence: 'Rollback procedure doc + test results uploaded',
    reviewer: 'Michael Torres',
    relatedChecklist: 'Database migration rollback',
  },
  {
    id: 'ACTION-2025-1234-003',
    title: 'Conduct disaster recovery drill',
    priority: 'critical',
    status: 'open',
    owner: 'QA Team',
    deadline: 'Dec 28, 2025',
    daysRemaining: 8,
    description: 'Execute DR drill to validate recovery procedures',
    relatedChecklist: 'Disaster recovery plan tested',
  },
  {
    id: 'ACTION-2025-1234-004',
    title: 'Reduce code duplication to <10%',
    priority: 'high',
    status: 'done',
    owner: 'Development Team',
    deadline: 'Dec 22, 2025',
    completedDate: 'Dec 19, 2025',
    description: 'Refactor codebase to reduce duplication from 12% to below 10%',
    evidence: 'Updated SonarQube report showing 8.5%',
    relatedChecklist: 'Code quality standards',
  },
  {
    id: 'ACTION-2025-1234-005',
    title: 'Update API documentation',
    priority: 'high',
    status: 'done',
    owner: 'Development Team',
    deadline: 'Dec 21, 2025',
    completedDate: 'Dec 19, 2025',
    description: 'Complete API documentation with examples and error codes',
    evidence: 'Swagger/OpenAPI spec updated',
    relatedChecklist: 'API documentation complete',
  },
  {
    id: 'ACTION-2025-1234-006',
    title: 'Schedule penetration test',
    priority: 'medium',
    status: 'scheduled',
    owner: 'Security Team',
    deadline: 'Jan 30, 2026',
    daysRemaining: 37,
    description: 'Schedule and conduct penetration test within 30 days post-deployment',
    scheduledDate: 'Jan 15, 2026',
    relatedChecklist: 'Penetration test current',
  },
];

export default function ActionItemsTracker({ projectId }: ActionItemsTrackerProps) {
  const [filter, setFilter] = useState<'all' | 'critical' | 'high' | 'medium'>('all');

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'high':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'medium':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'in-review':
        return <Clock className="w-5 h-5 text-blue-600" />;
      case 'scheduled':
        return <Calendar className="w-5 h-5 text-indigo-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-amber-600" />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'done':
        return 'Done';
      case 'in-review':
        return 'In Review';
      case 'scheduled':
        return 'Scheduled';
      default:
        return 'Open';
    }
  };

  const filteredItems = filter === 'all' 
    ? actionItems 
    : actionItems.filter(item => item.priority === filter);

  const criticalCount = actionItems.filter(i => i.priority === 'critical').length;
  const completedCount = actionItems.filter(i => i.status === 'done').length;
  const progressPercentage = Math.round((completedCount / actionItems.length) * 100);

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-slate-900 mb-1">Action Items Progress</h3>
            <p className="text-slate-600 text-sm">Track and complete all review action items</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-indigo-600">{progressPercentage}%</p>
            <p className="text-sm text-slate-600">{completedCount}/{actionItems.length} completed</p>
          </div>
        </div>

        <div className="w-full bg-slate-200 rounded-full h-3 mb-6">
          <div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-sm text-slate-600 mb-1">Critical</p>
            <p className="text-2xl font-bold text-red-600">
              {actionItems.filter(i => i.priority === 'critical' && i.status !== 'done').length}
            </p>
            <p className="text-xs text-slate-500 mt-1">Must complete</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <p className="text-sm text-slate-600 mb-1">High Priority</p>
            <p className="text-2xl font-bold text-amber-600">
              {actionItems.filter(i => i.priority === 'high' && i.status !== 'done').length}
            </p>
            <p className="text-xs text-slate-500 mt-1">Recommended</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-slate-600 mb-1">In Review</p>
            <p className="text-2xl font-bold text-blue-600">
              {actionItems.filter(i => i.status === 'in-review').length}
            </p>
            <p className="text-xs text-slate-500 mt-1">Pending approval</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-sm text-slate-600 mb-1">Completed</p>
            <p className="text-2xl font-bold text-green-600">{completedCount}</p>
            <p className="text-xs text-slate-500 mt-1">Approved</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'all'
                ? 'bg-indigo-100 text-indigo-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All ({actionItems.length})
          </button>
          <button
            onClick={() => setFilter('critical')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'critical'
                ? 'bg-red-100 text-red-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Critical ({actionItems.filter(i => i.priority === 'critical').length})
          </button>
          <button
            onClick={() => setFilter('high')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'high'
                ? 'bg-amber-100 text-amber-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            High ({actionItems.filter(i => i.priority === 'high').length})
          </button>
          <button
            onClick={() => setFilter('medium')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === 'medium'
                ? 'bg-blue-100 text-blue-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            Medium ({actionItems.filter(i => i.priority === 'medium').length})
          </button>
        </div>
      </div>

      {/* Action Items List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl border-2 transition-all ${
              item.status === 'done'
                ? 'border-green-200 bg-green-50/50'
                : item.priority === 'critical'
                ? 'border-red-200'
                : 'border-slate-200'
            }`}
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  {getStatusIcon(item.status)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                          {item.priority.toUpperCase()}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'done'
                            ? 'bg-green-100 text-green-700'
                            : item.status === 'in-review'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {getStatusLabel(item.status)}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mb-3">{item.description}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {item.owner}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          Deadline: {item.deadline}
                        </div>
                        {item.daysRemaining !== undefined && (
                          <span className={`px-2 py-1 rounded text-xs font-medium ${
                            item.daysRemaining <= 3
                              ? 'bg-red-100 text-red-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {item.daysRemaining} days remaining
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Status-specific content */}
                  {item.status === 'done' && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 mb-1">Completed</p>
                          <p className="text-sm text-slate-700 mb-2">
                            Completed on {item.completedDate}
                          </p>
                          {item.evidence && (
                            <div className="flex items-center gap-2 text-sm text-slate-600">
                              <FileText className="w-4 h-4" />
                              Evidence: {item.evidence}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {item.status === 'in-review' && (
                    <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-medium text-slate-900 mb-1">Under Review</p>
                            <p className="text-sm text-slate-700 mb-2">
                              Submitted on {item.completedDate} • Reviewer: {item.reviewer}
                            </p>
                            {item.evidence && (
                              <div className="flex items-center gap-2 text-sm text-slate-600">
                                <FileText className="w-4 h-4" />
                                Evidence: {item.evidence}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.status === 'scheduled' && (
                    <div className="mt-4 p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 mb-1">Scheduled</p>
                          <p className="text-sm text-slate-700">
                            Scheduled for {item.scheduledDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.status === 'open' && (
                    <div className="mt-4">
                      <label className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer">
                        <Upload className="w-4 h-4 text-slate-600" />
                        <span className="text-sm text-slate-600 font-medium">Upload evidence of completion</span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">Ready to proceed?</h4>
            <p className="text-sm text-slate-600">
              {actionItems.filter(i => i.priority === 'critical' && i.status !== 'done').length === 0
                ? 'All critical items completed! You can request re-review.'
                : `Complete ${actionItems.filter(i => i.priority === 'critical' && i.status !== 'done').length} critical item(s) before requesting re-review.`}
            </p>
          </div>
          <button
            disabled={actionItems.filter(i => i.priority === 'critical' && i.status !== 'done').length > 0}
            className="px-6 py-3 text-white rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            style={{ backgroundColor: 'rgb(0, 48, 135)' }}
            onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#002366')}
            onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'rgb(0, 48, 135)')}
          >
            Request Re-Review
          </button>
        </div>
      </div>
    </div>
  );
}
