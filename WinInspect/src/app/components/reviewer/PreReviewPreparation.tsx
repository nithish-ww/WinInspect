import { Sparkles, CheckCircle2, AlertTriangle, XCircle, TrendingUp, Shield, Zap, Code, FileText, Clock } from 'lucide-react';

interface PreReviewPreparationProps {
  project: any;
}

const aiPreAnalysis = {
  summary: 'Project demonstrates strong technical foundation with comprehensive documentation. Performance optimization targets are well-defined. Minor security considerations require attention during review.',
  autoVerified: 42,
  manualReviewRequired: 8,
  failed: 3,
  total: 53,
};

const checklistCategories = [
  {
    name: 'Architecture & Design',
    icon: Code,
    score: 92,
    autoPass: 12,
    manualReview: 2,
    failed: 0,
    total: 14,
    keyFindings: [
      'Architecture diagrams comprehensive and up-to-date',
      'Microservices communication patterns well documented',
    ],
  },
  {
    name: 'Security & Compliance',
    icon: Shield,
    score: 85,
    autoPass: 9,
    manualReview: 2,
    failed: 1,
    total: 12,
    keyFindings: [
      'OWASP scan shows 0 critical vulnerabilities',
      'Authentication mechanism requires manual verification',
      'Missing: Latest penetration test report (>6 months old)',
    ],
  },
  {
    name: 'Performance & Scalability',
    icon: Zap,
    score: 94,
    autoPass: 9,
    manualReview: 1,
    failed: 0,
    total: 10,
    keyFindings: [
      'Load test results exceed SLA requirements (p95: 420ms < 500ms)',
      'Auto-scaling policies configured correctly',
    ],
  },
  {
    name: 'Testing & Quality',
    icon: CheckCircle2,
    score: 82,
    autoPass: 8,
    manualReview: 2,
    failed: 2,
    total: 12,
    keyFindings: [
      'Code coverage: 76.5% (meets 75% threshold)',
      'Missing: UAT sign-off documentation',
      'Integration test coverage needs manual verification',
    ],
  },
];

const riskFlags = [
  {
    severity: 'high',
    category: 'Security',
    title: 'Outdated Penetration Test',
    description: 'Last penetration test conducted 7 months ago. Current security posture unknown.',
    impact: 'Potential undetected vulnerabilities in production',
    recommendation: 'Schedule fresh penetration test before approval or document post-deployment requirement',
  },
  {
    severity: 'medium',
    category: 'Testing',
    title: 'Missing UAT Sign-off',
    description: 'No formal UAT sign-off documentation provided',
    impact: 'User acceptance not formally validated',
    recommendation: 'Obtain UAT sign-off from business stakeholders',
  },
  {
    severity: 'medium',
    category: 'Performance',
    title: 'Database Index Optimization',
    description: 'No evidence of database index optimization strategy',
    impact: 'Potential performance degradation at scale',
    recommendation: 'Document index optimization strategy or provide query performance analysis',
  },
];

const focusAreas = [
  {
    area: 'Security Review',
    priority: 'high',
    estimatedTime: '25 min',
    items: [
      'Verify authentication mechanism implementation',
      'Review authorization logic for edge cases',
      'Assess penetration test requirement',
    ],
  },
  {
    area: 'Performance Validation',
    priority: 'medium',
    estimatedTime: '15 min',
    items: [
      'Review load test methodology',
      'Verify caching strategy',
      'Assess database query optimization',
    ],
  },
  {
    area: 'Testing Coverage',
    priority: 'medium',
    estimatedTime: '15 min',
    items: [
      'Review integration test scenarios',
      'Verify UAT completion status',
      'Assess test automation coverage',
    ],
  },
];

export default function PreReviewPreparation({ project }: PreReviewPreparationProps) {
  return (
    <div className="space-y-6">
      {/* AI Pre-Analysis Summary */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 mb-2">AI Pre-Analysis Complete</h3>
            <p className="text-slate-700 mb-4">{aiPreAnalysis.summary}</p>
            
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg border border-indigo-200 p-4">
                <p className="text-sm text-slate-600 mb-1">Auto-Verified</p>
                <p className="text-2xl font-bold text-green-600">{aiPreAnalysis.autoVerified}</p>
                <p className="text-xs text-slate-500 mt-1">Passed checks</p>
              </div>
              <div className="bg-white rounded-lg border border-indigo-200 p-4">
                <p className="text-sm text-slate-600 mb-1">Manual Review</p>
                <p className="text-2xl font-bold text-blue-600">{aiPreAnalysis.manualReviewRequired}</p>
                <p className="text-xs text-slate-500 mt-1">Requires attention</p>
              </div>
              <div className="bg-white rounded-lg border border-indigo-200 p-4">
                <p className="text-sm text-slate-600 mb-1">Failed Items</p>
                <p className="text-2xl font-bold text-red-600">{aiPreAnalysis.failed}</p>
                <p className="text-xs text-slate-500 mt-1">Action required</p>
              </div>
              <div className="bg-white rounded-lg border border-indigo-200 p-4">
                <p className="text-sm text-slate-600 mb-1">Readiness</p>
                <p className="text-2xl font-bold text-indigo-600">{project.readinessScore}%</p>
                <p className="text-xs text-slate-500 mt-1">Overall score</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Overview by Category */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-slate-900 mb-1">Checklist Overview by Category</h3>
          <p className="text-slate-600 text-sm">AI-analyzed results across all quality dimensions</p>
        </div>

        <div className="divide-y divide-slate-200">
          {checklistCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{category.name}</h4>
                      <p className="text-sm text-slate-600">
                        {category.total} items • {category.autoPass} auto-verified • {category.manualReview} manual review
                        {category.failed > 0 && ` • ${category.failed} failed`}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-indigo-600">{category.score}%</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <p className="text-xs font-medium text-slate-600 mb-2">AI KEY FINDINGS:</p>
                  <ul className="space-y-1">
                    {category.keyFindings.map((finding, idx) => (
                      <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">•</span>
                        <span>{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Risk Flags */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600" />
            <div>
              <h3 className="text-slate-900">Risk Flags & Areas of Concern</h3>
              <p className="text-slate-600 text-sm">Items requiring special attention during review</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {riskFlags.map((risk, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${
                risk.severity === 'high'
                  ? 'bg-red-50 border-red-200'
                  : 'bg-amber-50 border-amber-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    risk.severity === 'high' ? 'text-red-600' : 'text-amber-600'
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold text-slate-900">{risk.title}</p>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        risk.severity === 'high'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {risk.severity.toUpperCase()} RISK
                    </span>
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                      {risk.category}
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mb-2">{risk.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white rounded-lg border border-slate-200 p-3">
                      <p className="text-xs font-medium text-slate-600 mb-1">IMPACT:</p>
                      <p className="text-sm text-slate-900">{risk.impact}</p>
                    </div>
                    <div className="bg-white rounded-lg border border-slate-200 p-3">
                      <p className="text-xs font-medium text-slate-600 mb-1">RECOMMENDATION:</p>
                      <p className="text-sm text-slate-900">{risk.recommendation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Focus Areas */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-indigo-600" />
            <div>
              <h3 className="text-slate-900">Suggested Focus Areas for Review</h3>
              <p className="text-slate-600 text-sm">AI-recommended priorities based on analysis</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {focusAreas.map((focus, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-slate-900">{focus.area}</h4>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        focus.priority === 'high'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {focus.priority.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Clock className="w-4 h-4" />
                    Estimated time: {focus.estimatedTime}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {focus.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Preparation Checklist */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h4 className="font-semibold text-slate-900 mb-4">Reviewer Preparation Checklist</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-50 transition-colors">
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
            <span className="text-sm text-slate-700">Review AI pre-analysis summary and key findings</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-50 transition-colors">
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
            <span className="text-sm text-slate-700">Review all high-risk items flagged by AI</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-50 transition-colors">
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
            <span className="text-sm text-slate-700">Note focus areas for detailed review</span>
          </label>
          <label className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200 cursor-pointer hover:bg-blue-50 transition-colors">
            <input type="checkbox" className="w-5 h-5 text-indigo-600 rounded" />
            <span className="text-sm text-slate-700">Prepare questions for engineer</span>
          </label>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
          Export Summary
        </button>
        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 font-medium">
          Start Document Review →
        </button>
      </div>
    </div>
  );
}
