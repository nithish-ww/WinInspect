import { Sparkles, FileText, Download, Edit, Send, CheckCircle2, AlertTriangle } from 'lucide-react';

interface ReportGenerationProps {
  project: any;
}

const reportSections = {
  executiveSummary: `The Mobile App Performance Optimization project has undergone comprehensive technical review. The project demonstrates strong technical foundation with well-documented architecture and successful performance testing. Two high-priority items require attention before production release: implementation of rate limiting on authentication endpoints and obtaining formal UAT sign-off.

Overall Assessment: CONDITIONALLY APPROVED
Readiness Score: 89/100`,

  findings: [
    {
      severity: 'high',
      category: 'Security',
      title: 'Rate limiting not implemented on authentication endpoints',
      description: 'The authentication endpoints (/api/auth/login and /api/auth/refresh) do not have rate limiting configured, creating potential vulnerability to brute force attacks.',
      impact: 'Attackers could attempt unlimited authentication attempts, potentially compromising user accounts.',
      recommendation: 'Implement rate limiting (5 attempts per minute per IP address) on all authentication endpoints before production deployment.',
    },
    {
      severity: 'medium',
      category: 'Testing',
      title: 'UAT sign-off documentation missing',
      description: 'No formal User Acceptance Testing sign-off documentation was provided.',
      impact: 'Business stakeholder acceptance is not formally documented.',
      recommendation: 'Obtain UAT sign-off from business stakeholders and upload documentation.',
    },
  ],

  riskAssessment: `Primary Risk: Security vulnerability due to missing rate limiting (HIGH)
Secondary Risk: Incomplete business validation (MEDIUM)

Mitigation: Address both items before production release or document as post-deployment requirements with specific timelines.`,

  actionItems: [
    {
      title: 'Implement rate limiting on authentication endpoints',
      owner: 'Engineering Team',
      priority: 'critical',
      deadline: 'Dec 28, 2025',
    },
    {
      title: 'Obtain UAT sign-off documentation',
      owner: 'Product Team',
      priority: 'high',
      deadline: 'Dec 29, 2025',
    },
    {
      title: 'Add database indexes on high-traffic queries',
      owner: 'Database Team',
      priority: 'medium',
      deadline: 'Jan 5, 2026',
    },
  ],

  recommendations: [
    'Schedule fresh penetration test within 30 days post-deployment',
    'Document database index optimization strategy',
    'Add security scanning to CI/CD pipeline',
    'Implement automated load testing as part of deployment process',
  ],
};

export default function ReportGeneration({ project }: ReportGenerationProps) {
  return (
    <div className="space-y-6">
      {/* AI Generation Status */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 mb-2">AI Report Generation Complete</h3>
            <p className="text-slate-700 mb-4">
              AI has compiled all findings, manual observations, meeting notes, and action items into a
              structured review report. Review and edit as needed before finalizing.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-green-200 p-3">
                <p className="text-xs text-slate-600 mb-1">Sections Generated</p>
                <p className="text-xl font-bold text-slate-900">6</p>
              </div>
              <div className="bg-white rounded-lg border border-green-200 p-3">
                <p className="text-xs text-slate-600 mb-1">Findings Documented</p>
                <p className="text-xl font-bold text-slate-900">8</p>
              </div>
              <div className="bg-white rounded-lg border border-green-200 p-3">
                <p className="text-xs text-slate-600 mb-1">Action Items</p>
                <p className="text-xl font-bold text-slate-900">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Preview */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-slate-900 mb-1">Review Report Preview</h2>
              <p className="text-slate-600 text-sm">Edit any section before finalizing</p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="text-center pb-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Technology Quality Assurance Review Report
            </h1>
            <p className="text-lg text-slate-700 mb-4">{project.name}</p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
              <span>Review ID: {project.id}</span>
              <span>•</span>
              <span>Date: December 26, 2025</span>
              <span>•</span>
              <span>Reviewer: Sarah Chen</span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Executive Summary</h3>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-700 whitespace-pre-line">{reportSections.executiveSummary}</p>
            </div>
          </div>

          {/* Detailed Findings */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Detailed Findings</h3>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-4">
              {reportSections.findings.map((finding, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-lg border ${
                    finding.severity === 'high'
                      ? 'bg-orange-50 border-orange-200'
                      : 'bg-amber-50 border-amber-200'
                  }`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <AlertTriangle
                      className={`w-5 h-5 mt-0.5 ${
                        finding.severity === 'high' ? 'text-orange-600' : 'text-amber-600'
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            finding.severity === 'high'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {finding.severity.toUpperCase()}
                        </span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {finding.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-slate-900 mb-2">{finding.title}</h4>
                      <p className="text-sm text-slate-700 mb-3">{finding.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white rounded-lg p-3 border border-slate-200">
                          <p className="text-xs font-medium text-slate-600 mb-1">IMPACT:</p>
                          <p className="text-sm text-slate-900">{finding.impact}</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 border border-slate-200">
                          <p className="text-xs font-medium text-slate-600 mb-1">RECOMMENDATION:</p>
                          <p className="text-sm text-slate-900">{finding.recommendation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Assessment */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Risk Assessment</h3>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <p className="text-slate-700 whitespace-pre-line">{reportSections.riskAssessment}</p>
            </div>
          </div>

          {/* Action Items */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Action Items with Owners & Deadlines</h3>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3">
              {reportSections.actionItems.map((action, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-slate-900">{action.title}</p>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          action.priority === 'critical'
                            ? 'bg-red-100 text-red-700'
                            : action.priority === 'high'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}
                      >
                        {action.priority.toUpperCase()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>Owner: {action.owner}</span>
                      <span>•</span>
                      <span>Deadline: {action.deadline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Recommendations</h3>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <ul className="space-y-2">
                {reportSections.recommendations.map((rec, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">•</span>
                    <span className="text-slate-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Signature */}
          <div className="border-t border-slate-200 pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-600 mb-1">Reviewed by:</p>
                <p className="font-semibold text-slate-900">Sarah Chen, Senior Reviewer</p>
                <p className="text-sm text-slate-600">Date: December 26, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium flex items-center gap-2">
          <Edit className="w-4 h-4" />
          Edit Report
        </button>
        <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export PDF
        </button>
        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 font-medium flex items-center justify-center gap-2">
          <Send className="w-4 h-4" />
          Finalize & Send Report
        </button>
      </div>
    </div>
  );
}
