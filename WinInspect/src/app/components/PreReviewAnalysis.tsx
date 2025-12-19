import { CheckCircle2, AlertTriangle, XCircle, Clock, Sparkles, TrendingUp, Shield, Zap, Code } from 'lucide-react';

interface PreReviewAnalysisProps {
  projectId: string;
}

const checklistResults = [
  {
    category: 'Architecture & Design',
    icon: Code,
    score: 92,
    passed: 13,
    warning: 1,
    failed: 0,
    pending: 0,
    items: [
      { name: 'System architecture documented', status: 'pass', reason: 'Comprehensive diagrams uploaded' },
      { name: 'Scalability considerations', status: 'pass', reason: 'Auto-scaling configured' },
      { name: 'Single points of failure', status: 'warning', reason: 'Load balancer redundancy not documented' },
    ],
  },
  {
    category: 'Security',
    icon: Shield,
    score: 88,
    passed: 9,
    warning: 2,
    failed: 1,
    pending: 0,
    items: [
      { name: 'No critical vulnerabilities', status: 'pass', reason: '0 critical vulnerabilities detected' },
      { name: 'Authentication implemented', status: 'pass', reason: 'JWT-based auth with refresh tokens' },
      { name: 'Input validation', status: 'pass', reason: 'Joi schema validation on all endpoints' },
      { name: 'Penetration test current', status: 'warning', reason: 'Last test 6 months ago' },
      { name: 'Security training complete', status: 'fail', reason: 'Only 2/5 team members trained' },
    ],
  },
  {
    category: 'Performance',
    icon: Zap,
    score: 94,
    passed: 8,
    warning: 1,
    failed: 0,
    pending: 1,
    items: [
      { name: 'Performance SLA met', status: 'pass', reason: 'p95 latency 450ms < 500ms target' },
      { name: 'Load testing complete', status: 'pass', reason: 'Tested at 5x normal load' },
      { name: 'Caching strategy', status: 'pass', reason: 'Redis caching implemented' },
      { name: 'Database optimization', status: 'warning', reason: 'No index optimization documented' },
    ],
  },
];

const aiInsights = {
  strengths: [
    'Excellent test coverage (78% unit, 85% integration)',
    'Strong architecture documentation with comprehensive diagrams',
    'Performance exceeds SLA requirements under load',
    'Operational runbooks are detailed and clear',
    'Monitoring and alerting properly configured',
  ],
  risks: [
    {
      severity: 'high',
      title: 'Incomplete Security Training',
      description: 'Only 2 out of 5 team members have completed security training',
      impact: 'Increased risk of security vulnerabilities in future development',
      recommendation: 'Complete training for remaining 3 team members before release',
    },
    {
      severity: 'medium',
      title: 'Outdated Penetration Test',
      description: 'Last penetration test was conducted 6 months ago',
      impact: 'New vulnerabilities may not have been detected',
      recommendation: 'Schedule fresh penetration test within 30 days post-deployment',
    },
    {
      severity: 'medium',
      title: 'Untested Disaster Recovery',
      description: 'DR plan is documented but has never been tested',
      impact: 'Unknown recovery time in case of actual disaster',
      recommendation: 'Conduct DR drill before release',
    },
  ],
  recommendations: [
    'Reduce code duplication from 8.5% to below 10% target',
    'Document database index optimization strategy',
    'Add automated security scanning to CI/CD pipeline',
    'Schedule quarterly disaster recovery drills',
  ],
};

export default function PreReviewAnalysis({ projectId }: PreReviewAnalysisProps) {
  const readinessScore = 89;
  const totalItems = checklistResults.reduce((acc, cat) => acc + cat.passed + cat.warning + cat.failed + cat.pending, 0);
  const passedItems = checklistResults.reduce((acc, cat) => acc + cat.passed, 0);
  const warningItems = checklistResults.reduce((acc, cat) => acc + cat.warning, 0);
  const failedItems = checklistResults.reduce((acc, cat) => acc + cat.failed, 0);

  return (
    <div className="space-y-6">
      {/* Analysis Complete Banner */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-slate-900 mb-2">Pre-Review Analysis Complete</h2>
            <p className="text-slate-700 mb-4">
              AI has analyzed your project documents and generated a comprehensive readiness assessment.
            </p>
            <div className="flex items-center gap-6">
              <div className="bg-white rounded-lg border border-green-200 px-4 py-2">
                <p className="text-sm text-slate-600">Analysis Date</p>
                <p className="font-semibold text-slate-900">December 20, 2025</p>
              </div>
              <div className="bg-white rounded-lg border border-green-200 px-4 py-2">
                <p className="text-sm text-slate-600">Review Track</p>
                <p className="font-semibold text-slate-900">Standard Review</p>
              </div>
              <div className="bg-white rounded-lg border border-green-200 px-4 py-2">
                <p className="text-sm text-slate-600">Est. Completion</p>
                <p className="font-semibold text-slate-900">5-7 business days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Readiness Score */}
      <div className="bg-white rounded-xl border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full mb-4 relative" style={{ background: '#003087' }}>
            <div className="absolute inset-2 rounded-full bg-white" />
            <div className="relative">
              <p className="text-5xl font-bold" style={{ color: '#003087' }}>{readinessScore}</p>
              <p className="text-sm text-slate-600">/100</p>
            </div>
          </div>
          <h3 className="text-slate-900 mb-2">Readiness Score</h3>
          <p className="text-slate-600">Ready for Standard Review</p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {checklistResults.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.name} className="text-center p-4 bg-slate-50 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-3 border border-slate-200">
                  <Icon className="w-6 h-6" style={{ color: '#003087' }} />
                </div>
                <p className="text-sm text-slate-600 mb-1">{category.category}</p>
                <p className="text-2xl font-bold" style={{ color: '#003087' }}>{category.score}%</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Checklist Results */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-900 mb-1">Automated Checklist Results</h3>
              <p className="text-slate-600 text-sm">AI-powered analysis of your project requirements</p>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-slate-700">{passedItems} Passed</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span className="text-slate-700">{warningItems} Warning</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-600" />
                <span className="text-slate-700">{failedItems} Failed</span>
              </div>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-200">
          {checklistResults.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E6F0FF' }}>
                    <Icon className="w-5 h-5" style={{ color: '#003087' }} />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-slate-900">{category.category}</p>
                    <p className="text-sm text-slate-600">
                      {category.passed + category.warning + category.failed + category.pending} items assessed
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold" style={{ color: '#003087' }}>{category.score}%</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ml-13">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border ${
                        item.status === 'pass'
                          ? 'bg-green-50 border-green-200'
                          : item.status === 'warning'
                          ? 'bg-amber-50 border-amber-200'
                          : item.status === 'fail'
                          ? 'bg-red-50 border-red-200'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {item.status === 'pass' && <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />}
                        {item.status === 'warning' && <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />}
                        {item.status === 'fail' && <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />}
                        {item.status === 'pending' && <Clock className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />}
                        <div className="flex-1">
                          <p className="font-medium text-slate-900 text-sm mb-1">{item.name}</p>
                          <p className="text-xs text-slate-600">{item.reason}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AI Insights */}
      <div className="grid grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="text-slate-900">Strengths</h3>
          </div>
          <div className="space-y-2">
            {aiInsights.strengths.map((strength, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-sm text-slate-700">{strength}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-slate-900">Recommendations</h3>
          </div>
          <div className="space-y-2">
            {aiInsights.recommendations.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm text-slate-700">{rec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risks */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-slate-900">Identified Risks & Concerns</h3>
          <p className="text-slate-600 text-sm mt-1">Address these items before or during review</p>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.risks.map((risk, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${
                risk.severity === 'high'
                  ? 'bg-red-50 border-red-200'
                  : risk.severity === 'medium'
                  ? 'bg-amber-50 border-amber-200'
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <AlertTriangle
                  className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                    risk.severity === 'high'
                      ? 'text-red-600'
                      : risk.severity === 'medium'
                      ? 'text-amber-600'
                      : 'text-blue-600'
                  }`}
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <p className="font-semibold text-slate-900">{risk.title}</p>
                    <span
                      className={`px-2 py-0.5 rounded text-xs font-medium ${
                        risk.severity === 'high'
                          ? 'bg-red-100 text-red-700'
                          : risk.severity === 'medium'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {risk.severity.toUpperCase()} RISK
                    </span>
                  </div>
                  <p className="text-sm text-slate-700 mb-2">{risk.description}</p>
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-medium">Impact:</span> {risk.impact}
                  </p>
                  <div className="bg-white rounded-lg border border-slate-200 p-3">
                    <p className="text-xs font-medium text-slate-600 mb-1">RECOMMENDATION:</p>
                    <p className="text-sm text-slate-900">{risk.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
          Address Issues First
        </button>
        <button 
          className="px-6 py-3 text-white rounded-lg transition-all shadow-lg font-medium"
          style={{ backgroundColor: 'rgb(0, 48, 135)' }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#002366')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgb(0, 48, 135)')}
        >
          Proceed to Schedule Review →
        </button>
      </div>
    </div>
  );
}
