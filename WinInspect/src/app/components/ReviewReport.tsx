import { CheckCircle2, Download, FileText, Award, Shield, Zap, Code, Calendar, User, ExternalLink } from 'lucide-react';

interface ReviewReportProps {
  project: any;
}

export default function ReviewReport({ project }: ReviewReportProps) {
  const checklistSummary = {
    approved: 50,
    conditional: 0,
    notApproved: 0,
    total: 50,
  };

  const categoryScores = [
    { name: 'Architecture & Design', score: 100, items: '14/14' },
    { name: 'Security & Compliance', score: 100, items: '12/12' },
    { name: 'Performance', score: 100, items: '10/10' },
    { name: 'Testing', score: 100, items: '12/12' },
    { name: 'Operations', score: 100, items: '12/12' },
  ];

  return (
    <div className="space-y-6">
      {/* Approval Banner */}
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border-2 border-green-300 p-8">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 bg-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-600/30">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <div className="flex-1">
            <h1 className="text-slate-900 mb-2">🎉 Approved for Release!</h1>
            <p className="text-slate-700 text-lg mb-6">
              Congratulations! Your project has successfully completed TQA review and is cleared for production deployment.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-green-200 p-4">
                <p className="text-slate-600 text-sm mb-1">Approval Date</p>
                <p className="font-semibold text-slate-900">{project.approvalDate}</p>
              </div>
              <div className="bg-white rounded-lg border border-green-200 p-4">
                <p className="text-slate-600 text-sm mb-1">Final Score</p>
                <p className="text-3xl font-bold text-green-600">{project.readinessScore}/100</p>
              </div>
              <div className="bg-white rounded-lg border border-green-200 p-4">
                <p className="text-slate-600 text-sm mb-1">Total Duration</p>
                <p className="font-semibold text-slate-900">5 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate */}
      <div className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden">
        <div className="p-6 text-white" style={{ background: 'linear-gradient(to right, rgb(0, 48, 135), rgb(0, 179, 194))' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-white mb-1">Certificate of Compliance</h2>
                <p className="text-sm" style={{ color: '#B3E5EC' }}>Technology Quality Assurance Review</p>
              </div>
            </div>
            <button 
              className="px-6 py-3 bg-white rounded-lg transition-colors font-medium flex items-center gap-2"
              style={{ color: '#003087' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f0f9ff')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ffffff')}
            >
              <Download className="w-5 h-5" />
              Download Certificate
            </button>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-3xl mx-auto border-4 rounded-lg p-8 bg-white" style={{ borderColor: '#003087' }}>
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: '#003087' }}>
                <CheckCircle2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-slate-900 mb-2">Certificate of Compliance</h3>
              <p className="text-slate-600">Technology Quality Assurance Review</p>
            </div>

            <div className="border-t-2 border-b-2 border-slate-200 py-6 mb-6">
              <p className="text-slate-700 text-center mb-4">
                This certifies that the following project has successfully completed comprehensive
                Technology Quality Assurance review and is approved for production release:
              </p>
              <div className="bg-indigo-50 rounded-lg p-6 text-center">
                <p className="text-2xl font-bold text-slate-900 mb-2">{project.name}</p>
                <p className="text-slate-600">Review ID: TQA-2025-1234</p>
                <p className="text-slate-600">Approval Date: {project.approvalDate}</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="font-semibold text-slate-900 mb-3">Release Readiness Score: {project.readinessScore}/100 ⭐⭐⭐⭐⭐</p>
              <p className="text-sm text-slate-700 mb-4">
                This project has been rigorously evaluated against comprehensive quality standards including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Architecture & Design Excellence
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Security & Compliance Requirements
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Performance & Scalability Standards
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Testing & Quality Assurance Practices
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Operational Readiness & Support
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <p className="text-sm font-semibold text-slate-900 mb-3">Approved by:</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {project.reviewers.map((reviewer: string) => (
                  <div key={reviewer} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm relative reviewer-tooltip">
                      {reviewer.split(' ').map(n => n[0]).join('')}
                      {/* Tooltip */}
                      <div className="absolute bottom-full mb-2 hidden bg-black text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10 pointer-events-none reviewer-tooltip-content">
                        {reviewer}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 text-sm">{reviewer}</p>
                      <p className="text-xs text-slate-600">Senior Reviewer</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-slate-600">
                <div>
                  <p>Certificate Number: CERT-2025-1234</p>
                  <p>Issued: {project.approvalDate}</p>
                </div>
                <div className="text-right">
                  <p>Valid for deployment:</p>
                  <p>December 2025 - March 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Results */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-slate-900 mb-1">Final Checklist Status</h3>
              <p className="text-slate-600 text-sm">All requirements satisfied</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-green-600">{checklistSummary.approved}/{checklistSummary.total}</p>
              <p className="text-sm text-slate-600">Items Approved</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {categoryScores.map((category) => (
              <div key={category.name} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <div>
                      <p className="font-semibold text-slate-900">{category.name}</p>
                      <p className="text-sm text-slate-600">{category.items} items approved</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">{category.score}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-4">Download Release Package</h3>
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 border-2 border-slate-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-indigo-600" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-slate-900">Certificate of Compliance</p>
              <p className="text-sm text-slate-600">Official approval certificate (PDF)</p>
            </div>
            <Download className="w-5 h-5 text-slate-400" />
          </button>

          <button className="p-4 border-2 border-slate-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-slate-900">Final Approval Report</p>
              <p className="text-sm text-slate-600">Comprehensive review report (PDF)</p>
            </div>
            <Download className="w-5 h-5 text-slate-400" />
          </button>

          <button className="p-4 border-2 border-slate-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-slate-900">Release Readiness Sign-Off</p>
              <p className="text-sm text-slate-600">Deployment authorization (PDF)</p>
            </div>
            <Download className="w-5 h-5 text-slate-400" />
          </button>

          <button className="p-4 border-2 border-slate-200 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-left flex-1">
              <p className="font-semibold text-slate-900">Complete Review Package</p>
              <p className="text-sm text-slate-600">All documents (ZIP)</p>
            </div>
            <Download className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </div>

      {/* Post-Deployment Requirements */}
      <div className="bg-amber-50 rounded-xl border border-amber-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 mb-2">Post-Deployment Requirements</h3>
            <p className="text-slate-700 mb-4">
              Complete within 30 days of deployment to maintain compliance:
            </p>
            <div className="bg-white rounded-lg border border-amber-200 p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Conduct Penetration Test</p>
                    <p className="text-sm text-slate-700 mb-2">
                      Schedule and complete penetration test within 30 days post-deployment
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span>Deadline: January 30, 2026</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                        37 days remaining
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Statistics */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-slate-900 mb-4">Review Statistics</h3>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Total Duration</p>
            <p className="text-2xl font-bold text-slate-900">5 days</p>
            <p className="text-xs text-green-600 mt-1">Below average</p>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Action Items</p>
            <p className="text-2xl font-bold text-slate-900">8</p>
            <p className="text-xs text-slate-500 mt-1">All completed</p>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Documents</p>
            <p className="text-2xl font-bold text-slate-900">24</p>
            <p className="text-xs text-slate-500 mt-1">Uploaded</p>
          </div>
          <div className="text-center p-4 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-600 mb-1">Improvement</p>
            <p className="text-2xl font-bold text-green-600">+18</p>
            <p className="text-xs text-slate-500 mt-1">Points (78 → 96)</p>
          </div>
        </div>
      </div>

      {/* Reviewer Comments */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <h3 className="text-slate-900">Reviewer Comments</h3>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                SC
              </div>
              <div>
                <p className="font-semibold text-slate-900">Sarah Chen</p>
                <p className="text-sm text-slate-600">Senior Security Architect</p>
              </div>
            </div>
            <p className="text-slate-700 bg-slate-50 p-4 rounded-lg">
              "Excellent remediation work on security vulnerabilities. The team demonstrated strong security
              awareness and implemented robust authentication and authorization mechanisms. Strong security
              posture achieved."
            </p>
          </div>

          <div className="border border-slate-200 rounded-lg p-4">
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm">
                MT
              </div>
              <div>
                <p className="font-semibold text-slate-900">Michael Torres</p>
                <p className="text-sm text-slate-600">Staff Engineer</p>
              </div>
            </div>
            <p className="text-slate-700 bg-slate-50 p-4 rounded-lg">
              "Performance optimization is outstanding. Load testing results exceeded expectations, and the
              system is well-prepared for production scale. Caching and database optimization strategies are
              solid."
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 p-6">
        <h3 className="text-slate-900 mb-4">Next Steps</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: '#003087' }}>
              1
            </div>
            <p className="text-slate-700">Download and share approval certificate with deployment team</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: '#003087' }}>
              2
            </div>
            <p className="text-slate-700">Proceed with deployment planning and execution</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: '#003087' }}>
              3
            </div>
            <p className="text-slate-700">Schedule penetration test within 30 days post-deployment</p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-0.5" style={{ backgroundColor: '#003087' }}>
              4
            </div>
            <p className="text-slate-700">Monitor system in production and submit metrics if required</p>
          </div>
        </div>
      </div>
    </div>
  );
}
