import { useState } from 'react';
import { Plus, AlertTriangle, Upload, X } from 'lucide-react';

interface ManualFindingsProps {
  project: any;
}

const existingFindings = [
  {
    id: 1,
    checklistItem: 'Authentication mechanism implementation',
    severity: 'high',
    category: 'Security',
    finding: 'Rate limiting not implemented on authentication endpoints',
    impact: 'Potential for brute force attacks on login endpoint',
    recommendation: 'Implement rate limiting (5 attempts per minute per IP) on /api/auth/login and /api/auth/refresh endpoints',
    evidence: ['screenshot-auth-endpoint.png'],
  },
  {
    id: 2,
    checklistItem: 'Database optimization strategy',
    severity: 'medium',
    category: 'Performance',
    finding: 'Missing indexes on frequently queried columns',
    impact: 'Query performance may degrade as data volume grows',
    recommendation: 'Add composite index on users(email, status) and transactions(user_id, created_at)',
    evidence: [],
  },
];

export default function ManualFindings({ project }: ManualFindingsProps) {
  const [findings, setFindings] = useState(existingFindings);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newFinding, setNewFinding] = useState({
    checklistItem: '',
    severity: 'medium',
    category: '',
    finding: '',
    impact: '',
    recommendation: '',
  });

  const handleAddFinding = () => {
    setFindings([...findings, { ...newFinding, id: findings.length + 1, evidence: [] }]);
    setNewFinding({
      checklistItem: '',
      severity: 'medium',
      category: '',
      finding: '',
      impact: '',
      recommendation: '',
    });
    setShowAddForm(false);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-700 border-red-200';
      case 'high':
        return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'medium':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-6">
        <h4 className="font-semibold text-slate-900 mb-2">Manual Findings Entry</h4>
        <p className="text-slate-700 text-sm">
          Document your manual findings based on document review. For each finding, specify severity,
          impact, and remediation guidance. These will be included in the final review report.
        </p>
      </div>

      {/* Summary */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-4">Findings Summary</h3>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-sm text-slate-600 mb-1">Critical</p>
            <p className="text-2xl font-bold text-red-600">
              {findings.filter(f => f.severity === 'critical').length}
            </p>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-sm text-slate-600 mb-1">High</p>
            <p className="text-2xl font-bold text-orange-600">
              {findings.filter(f => f.severity === 'high').length}
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-sm text-slate-600 mb-1">Medium</p>
            <p className="text-2xl font-bold text-amber-600">
              {findings.filter(f => f.severity === 'medium').length}
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-slate-600 mb-1">Low</p>
            <p className="text-2xl font-bold text-blue-600">
              {findings.filter(f => f.severity === 'low').length}
            </p>
          </div>
        </div>
      </div>

      {/* Add New Finding Button */}
      {!showAddForm && (
        <button
          onClick={() => setShowAddForm(true)}
          className="w-full p-6 border-2 border-dashed border-slate-300 rounded-xl hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center justify-center gap-3 text-slate-600 hover:text-indigo-600"
        >
          <Plus className="w-5 h-5" />
          <span className="font-medium">Add New Finding</span>
        </button>
      )}

      {/* Add Finding Form */}
      {showAddForm && (
        <div className="bg-white rounded-xl border-2 border-indigo-300 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-slate-900">New Manual Finding</h3>
            <button
              onClick={() => setShowAddForm(false)}
              className="p-2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Related Checklist Item *
              </label>
              <input
                type="text"
                value={newFinding.checklistItem}
                onChange={(e) => setNewFinding({ ...newFinding, checklistItem: e.target.value })}
                placeholder="e.g., Authentication mechanism implementation"
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Severity Level *
                </label>
                <select
                  value={newFinding.severity}
                  onChange={(e) => setNewFinding({ ...newFinding, severity: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Category *
                </label>
                <select
                  value={newFinding.category}
                  onChange={(e) => setNewFinding({ ...newFinding, category: e.target.value })}
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="">Select category</option>
                  <option value="Security">Security</option>
                  <option value="Performance">Performance</option>
                  <option value="Architecture">Architecture</option>
                  <option value="Testing">Testing</option>
                  <option value="Operations">Operations</option>
                  <option value="Code Quality">Code Quality</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Finding Description *
              </label>
              <textarea
                value={newFinding.finding}
                onChange={(e) => setNewFinding({ ...newFinding, finding: e.target.value })}
                placeholder="Describe what you found..."
                rows={3}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Impact *
              </label>
              <textarea
                value={newFinding.impact}
                onChange={(e) => setNewFinding({ ...newFinding, impact: e.target.value })}
                placeholder="What is the potential impact?"
                rows={2}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Recommendation *
              </label>
              <textarea
                value={newFinding.recommendation}
                onChange={(e) => setNewFinding({ ...newFinding, recommendation: e.target.value })}
                placeholder="What should be done to address this?"
                rows={2}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Supporting Evidence
              </label>
              <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer">
                <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <p className="text-sm text-slate-600">
                  Drop files here or click to upload
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Screenshots, logs, or documents
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <button
                onClick={() => setShowAddForm(false)}
                className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddFinding}
                disabled={!newFinding.checklistItem || !newFinding.category || !newFinding.finding}
                className="flex-1 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Finding
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Existing Findings */}
      <div className="space-y-4">
        {findings.map((finding) => (
          <div key={finding.id} className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(finding.severity)}`}>
                    {finding.severity.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                    {finding.category}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-2">{finding.checklistItem}</p>
              </div>
              <button className="p-2 text-slate-400 hover:text-red-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-medium text-slate-600 mb-1">FINDING:</p>
                <p className="text-sm text-slate-900">{finding.finding}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-medium text-slate-600 mb-1">IMPACT:</p>
                  <p className="text-sm text-slate-900">{finding.impact}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-xs font-medium text-slate-600 mb-1">RECOMMENDATION:</p>
                  <p className="text-sm text-slate-900">{finding.recommendation}</p>
                </div>
              </div>

              {finding.evidence.length > 0 && (
                <div>
                  <p className="text-xs font-medium text-slate-600 mb-2">EVIDENCE:</p>
                  <div className="flex flex-wrap gap-2">
                    {finding.evidence.map((file, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded text-sm">
                        <AlertTriangle className="w-4 h-4 text-slate-600" />
                        {file}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4">
        <button 
          className="px-6 py-3 bg-white rounded-lg border-2 transition-colors font-medium"
          style={{ borderColor: '#003087', color: '#003087' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f0f9ff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
          }}
        >
          Save Draft
        </button>
        <button 
          className="px-6 py-3 text-white rounded-lg transition-all shadow-lg font-medium"
          style={{ backgroundColor: 'rgb(0, 48, 135)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#002366')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(0, 48, 135)')}
        >
          Continue to Review Meeting →
        </button>
      </div>
    </div>
  );
}
