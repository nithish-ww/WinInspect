import { useState } from 'react';
import { Upload, FileText, CheckCircle2, AlertTriangle, XCircle, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';

interface DocumentUploadProps {
  projectId: string;
}

const documentCategories = [
  {
    name: 'Architecture & Design',
    required: 4,
    uploaded: 4,
    items: [
      { name: 'System Architecture Diagram', uploaded: true, fileName: 'architecture-v2.pdf', analysis: 'Comprehensive cloud architecture identified. AWS services well documented.' },
      { name: 'High-Level Design Document', uploaded: true, fileName: 'design-doc.pdf', analysis: 'Clear component interactions. Microservices pattern detected.' },
      { name: 'Component Interaction Diagrams', uploaded: true, fileName: 'components.png', analysis: 'API gateway and service mesh properly defined.' },
      { name: 'Data Flow Diagrams', uploaded: true, fileName: 'dataflow.pdf', analysis: 'Data pipeline clearly mapped from ingestion to storage.' },
    ],
  },
  {
    name: 'Code Quality',
    required: 3,
    uploaded: 2,
    items: [
      { name: 'Code Coverage Report', uploaded: true, fileName: 'coverage-report.html', analysis: 'Code coverage: 78.3% - Meets 75% threshold. Unit tests: 245 passing.' },
      { name: 'Static Analysis Results', uploaded: true, fileName: 'sonarqube.json', analysis: 'Technical debt: 2.1%, Code duplication: 8.5% - Within acceptable range.' },
      { name: 'Dependency Vulnerability Scan', uploaded: false, analysis: null },
    ],
  },
  {
    name: 'Security',
    required: 5,
    uploaded: 5,
    items: [
      { name: 'OWASP ZAP Scan Results', uploaded: true, fileName: 'owasp-scan.pdf', analysis: '0 critical vulnerabilities detected after remediation.' },
      { name: 'Penetration Test Report', uploaded: true, fileName: 'pentest-results.pdf', analysis: 'All high-priority vulnerabilities resolved. Medium items documented.' },
      { name: 'Security Review Findings', uploaded: true, fileName: 'security-review.pdf', analysis: 'Authentication using JWT. Input validation implemented.' },
      { name: 'Threat Modeling Document', uploaded: true, fileName: 'threat-model.pdf', analysis: 'STRIDE methodology applied. 12 threats identified and mitigated.' },
      { name: 'Dependency Vulnerability Scan', uploaded: true, fileName: 'snyk-report.pdf', analysis: '3 low-severity vulnerabilities. No critical issues.' },
    ],
  },
  {
    name: 'Performance',
    required: 3,
    uploaded: 3,
    items: [
      { name: 'Load Test Reports', uploaded: true, fileName: 'jmeter-results.pdf', analysis: 'p95 latency: 450ms under 5x normal load. Meets <500ms SLA.' },
      { name: 'Stress Test Results', uploaded: true, fileName: 'stress-test.pdf', analysis: 'System stable up to 10,000 concurrent users.' },
      { name: 'Performance Baselines', uploaded: true, fileName: 'baseline-metrics.xlsx', analysis: 'CPU: 45% avg, Memory: 62% avg under normal load.' },
    ],
  },
  {
    name: 'Testing',
    required: 5,
    uploaded: 4,
    items: [
      { name: 'Test Strategy Document', uploaded: true, fileName: 'test-strategy.pdf', analysis: 'Comprehensive strategy covering unit, integration, and E2E tests.' },
      { name: 'Unit Test Results', uploaded: true, fileName: 'unit-test-results.xml', analysis: '245 tests passing, 0 failures. 78.3% coverage.' },
      { name: 'Integration Test Results', uploaded: true, fileName: 'integration-tests.xml', analysis: '89 integration tests passing. API contracts validated.' },
      { name: 'UAT Sign-off', uploaded: false, analysis: null },
      { name: 'Test Automation Coverage', uploaded: true, fileName: 'automation-report.pdf', analysis: '85% of test cases automated. CI/CD pipeline integrated.' },
    ],
  },
  {
    name: 'Operations',
    required: 5,
    uploaded: 5,
    items: [
      { name: 'Deployment Runbook', uploaded: true, fileName: 'deployment-guide.pdf', analysis: 'Blue-green deployment strategy. Rollback procedures included.' },
      { name: 'Rollback Procedures', uploaded: true, fileName: 'rollback-plan.pdf', analysis: 'Documented and tested rollback for database and application.' },
      { name: 'Monitoring Setup', uploaded: true, fileName: 'monitoring-config.yaml', analysis: 'Datadog dashboards and alerts configured for key metrics.' },
      { name: 'Disaster Recovery Plan', uploaded: true, fileName: 'dr-plan.pdf', analysis: 'DR plan documented. RTO: 4 hours, RPO: 1 hour.' },
      { name: 'SLA Definitions', uploaded: true, fileName: 'sla-doc.pdf', analysis: 'Availability: 99.9%, Response time: <500ms p95.' },
    ],
  },
];

export default function DocumentUpload({ projectId }: DocumentUploadProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Architecture & Design');
  const [dragActive, setDragActive] = useState(false);

  const totalRequired = documentCategories.reduce((acc, cat) => acc + cat.required, 0);
  const totalUploaded = documentCategories.reduce((acc, cat) => acc + cat.uploaded, 0);
  const completionPercentage = Math.round((totalUploaded / totalRequired) * 100);

  return (
    <div className="space-y-6">
      {/* Upload Progress */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-slate-900 mb-1">Document Upload Status</h3>
            <p className="text-slate-600 text-sm">Upload all required documents for AI analysis</p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold text-indigo-600">{completionPercentage}%</p>
            <p className="text-sm text-slate-600">{totalUploaded}/{totalRequired} documents</p>
          </div>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-3 rounded-full transition-all"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 mb-2">AI Insights from Uploaded Documents</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">Code coverage at 78.3% - meets minimum threshold of 75%</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">Performance tests show p95 latency of 450ms (target: &lt;500ms)</p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">All critical security vulnerabilities have been resolved</p>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">Missing: Dependency vulnerability scan and UAT sign-off</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Document Categories */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-slate-900">Upload Documents by Category</h3>
          <p className="text-slate-600 text-sm mt-1">Drag and drop files or click to browse</p>
        </div>

        <div className="divide-y divide-slate-200">
          {documentCategories.map((category) => {
            const isExpanded = expandedCategory === category.name;
            const isComplete = category.uploaded === category.required;
            const hasUploads = category.uploaded > 0;

            return (
              <div key={category.name}>
                <button
                  onClick={() => setExpandedCategory(isExpanded ? null : category.name)}
                  className="w-full p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isComplete ? 'bg-green-100' : hasUploads ? 'bg-blue-100' : 'bg-slate-100'
                    }`}>
                      {isComplete ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : hasUploads ? (
                        <FileText className="w-6 h-6 text-blue-600" />
                      ) : (
                        <Upload className="w-6 h-6 text-slate-400" />
                      )}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-slate-900">{category.name}</p>
                      <p className="text-sm text-slate-600">
                        {category.uploaded}/{category.required} documents uploaded
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {isComplete ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Complete
                      </span>
                    ) : hasUploads ? (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        Partial
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                        Missing
                      </span>
                    )}
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 space-y-3 bg-slate-50">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className={`p-4 rounded-lg border transition-all ${
                          item.uploaded
                            ? 'bg-white border-green-200'
                            : 'bg-white border-slate-200 border-dashed'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-start gap-3 flex-1">
                            {item.uploaded ? (
                              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <p className="font-medium text-slate-900 mb-1">{item.name}</p>
                              {item.uploaded && (
                                <>
                                  <p className="text-sm text-slate-600 mb-2">
                                    <FileText className="w-4 h-4 inline mr-1" />
                                    {item.fileName}
                                  </p>
                                  {item.analysis && (
                                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3">
                                      <div className="flex items-start gap-2">
                                        <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                                        <p className="text-sm text-slate-700">{item.analysis}</p>
                                      </div>
                                    </div>
                                  )}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                        {!item.uploaded && (
                          <label className="mt-3 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dashed border-slate-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer">
                            <Upload className="w-4 h-4 text-slate-600" />
                            <span className="text-sm text-slate-600">Click to upload or drag and drop</span>
                            <input type="file" className="hidden" />
                          </label>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
          Save Progress
        </button>
        <button
          disabled={completionPercentage < 80}
          className="flex-1 px-6 py-3 text-white rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          style={{ backgroundColor: 'rgb(0, 48, 135)' }}
          onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#002366')}
          onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = 'rgb(0, 48, 135)')}
        >
          Submit for Pre-Review Analysis →
        </button>
      </div>
    </div>
  );
}
