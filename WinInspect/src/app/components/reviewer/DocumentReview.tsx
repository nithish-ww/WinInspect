import { useState } from 'react';
import { FileText, Sparkles, CheckCircle2, AlertTriangle, Eye, ExternalLink, Code, ChevronRight } from 'lucide-react';

interface DocumentReviewProps {
  project: any;
}

const checklistItems = [
  {
    id: 'arch-001',
    category: 'Architecture & Design',
    item: 'System architecture diagram provided',
    status: 'pass',
    aiVerified: true,
    documents: [
      {
        name: 'architecture-v2.pdf',
        relevant: true,
        aiInsights: 'Comprehensive microservices architecture. Identifies 12 services with clear boundaries. Uses AWS ECS for container orchestration.',
        highlights: [
          'API Gateway pattern implemented',
          'Event-driven communication via SQS/SNS',
          'Separate read/write databases (CQRS pattern)',
        ],
      },
    ],
  },
  {
    id: 'sec-001',
    category: 'Security',
    item: 'Authentication mechanism implemented and documented',
    status: 'manual-review',
    aiVerified: false,
    documents: [
      {
        name: 'auth-design.pdf',
        relevant: true,
        aiInsights: 'JWT-based authentication with refresh tokens. Access token expiry: 15 minutes. Refresh token expiry: 7 days.',
        highlights: [
          'JWT signing using RS256 algorithm',
          'Token rotation on refresh',
          'Secure HTTP-only cookies for token storage',
        ],
        codeSnippets: [
          {
            file: 'auth-service/middleware/authenticate.js',
            lines: '45-78',
            code: `async function authenticateToken(req, res, next) {
  const token = req.cookies.accessToken;
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_PUBLIC_KEY, {
      algorithms: ['RS256']
    });
    
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' });
    }
    return res.status(403).json({ error: 'Invalid token' });
  }
}`,
            aiAnnotation: 'Try-catch handling detected. Token verification uses RS256. Error handling covers expiry and invalid tokens.',
          },
        ],
        concerns: [
          'Rate limiting on authentication endpoints not documented',
          'Password reset flow security needs verification',
        ],
      },
    ],
  },
  {
    id: 'perf-001',
    category: 'Performance',
    item: 'Load test results meet SLA requirements',
    status: 'pass',
    aiVerified: true,
    documents: [
      {
        name: 'load-test-results.pdf',
        relevant: true,
        aiInsights: 'Load tested at 5x normal traffic (5,000 concurrent users). All SLA targets met or exceeded.',
        highlights: [
          'p50 latency: 180ms (target: <300ms)',
          'p95 latency: 420ms (target: <500ms)',
          'p99 latency: 680ms (target: <1000ms)',
          '0 errors at peak load',
        ],
        metrics: {
          throughput: '2,400 req/s',
          errorRate: '0.02%',
          cpuUtilization: '62% avg',
          memoryUtilization: '58% avg',
        },
      },
    ],
  },
  {
    id: 'test-001',
    category: 'Testing',
    item: 'UAT sign-off obtained from business stakeholders',
    status: 'fail',
    aiVerified: true,
    documents: [],
    aiInsights: 'No UAT sign-off documentation found. This is a required item for production release.',
  },
];

export default function DocumentReview({ project }: DocumentReviewProps) {
  const [selectedItem, setSelectedItem] = useState(checklistItems[0]);
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'manual-review':
        return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      case 'fail':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pass':
        return 'AI Verified - Pass';
      case 'manual-review':
        return 'Requires Manual Review';
      case 'fail':
        return 'Failed - Action Required';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'manual-review':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'fail':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Instructions */}
      <div className="bg-indigo-50 rounded-xl border border-indigo-200 p-6">
        <div className="flex items-start gap-3">
          <Eye className="w-5 h-5 text-indigo-600 mt-0.5" />
          <div>
            <h4 className="font-semibold text-slate-900 mb-1">Document Review Instructions</h4>
            <p className="text-slate-700 text-sm">
              Click on checklist items to review associated documents. AI has automatically highlighted relevant
              sections and provided contextual insights. Add your manual findings and verification notes.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Checklist Items Sidebar */}
        <div className="col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 sticky top-6">
            <div className="p-4 border-b border-slate-200">
              <h3 className="font-semibold text-slate-900">Checklist Items</h3>
              <p className="text-xs text-slate-600 mt-1">{checklistItems.length} items</p>
            </div>
            <div className="divide-y divide-slate-200 max-h-[600px] overflow-y-auto">
              {checklistItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`w-full p-4 text-left hover:bg-slate-50 transition-colors ${
                    selectedItem.id === item.id ? 'bg-indigo-50 border-l-4 border-indigo-600' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {getStatusIcon(item.status)}
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-slate-500 mb-1">{item.category}</p>
                      <p className="text-sm text-slate-900 leading-snug">{item.item}</p>
                      <div className="flex items-center gap-2 mt-2">
                        {item.aiVerified && (
                          <span className="flex items-center gap-1 text-xs text-indigo-600">
                            <Sparkles className="w-3 h-3" />
                            AI
                          </span>
                        )}
                        <span className="text-xs text-slate-500">
                          {item.documents.length} doc{item.documents.length !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Document Viewer */}
        <div className="col-span-2 space-y-4">
          {/* Selected Item Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-start gap-4 mb-4">
              {getStatusIcon(selectedItem.status)}
              <div className="flex-1">
                <p className="text-sm text-slate-600 mb-1">{selectedItem.category}</p>
                <h3 className="text-slate-900 mb-2">{selectedItem.item}</h3>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(selectedItem.status)}`}>
                  {getStatusLabel(selectedItem.status)}
                </span>
              </div>
            </div>

            {selectedItem.aiInsights && selectedItem.documents.length === 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-1">AI Analysis:</p>
                    <p className="text-sm text-slate-700">{selectedItem.aiInsights}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Documents */}
          {selectedItem.documents.map((doc, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{doc.name}</h4>
                      <p className="text-sm text-slate-600">Relevant document</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    Open Document
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* AI Insights */}
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-900 mb-1">AI Analysis Summary:</p>
                      <p className="text-sm text-slate-700">{doc.aiInsights}</p>
                    </div>
                  </div>
                </div>

                {/* Key Highlights */}
                {doc.highlights && (
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-2">AI-Extracted Key Points:</p>
                    <div className="space-y-2">
                      {doc.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-700">{highlight}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Metrics */}
                {doc.metrics && (
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-2">Performance Metrics:</p>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(doc.metrics).map(([key, value]) => (
                        <div key={key} className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                          <p className="text-xs text-slate-600 mb-1">
                            {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                          </p>
                          <p className="text-sm font-semibold text-slate-900">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Code Snippets */}
                {doc.codeSnippets && (
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-2">Relevant Code:</p>
                    {doc.codeSnippets.map((snippet, sIdx) => (
                      <div key={sIdx} className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 px-4 py-2 border-b border-slate-200">
                          <div className="flex items-center gap-2 text-sm">
                            <Code className="w-4 h-4 text-slate-600" />
                            <span className="text-slate-700 font-mono">{snippet.file}</span>
                            <span className="text-slate-500">Lines {snippet.lines}</span>
                          </div>
                        </div>
                        <pre className="p-4 bg-slate-900 text-slate-100 text-xs overflow-x-auto">
                          <code>{snippet.code}</code>
                        </pre>
                        <div className="bg-indigo-50 border-t border-indigo-200 p-3">
                          <div className="flex items-start gap-2">
                            <Sparkles className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                            <p className="text-xs text-slate-700">
                              <span className="font-medium">AI Annotation:</span> {snippet.aiAnnotation}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Concerns */}
                {doc.concerns && (
                  <div>
                    <p className="text-sm font-medium text-slate-900 mb-2">Items Requiring Manual Verification:</p>
                    <div className="space-y-2">
                      {doc.concerns.map((concern, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <p className="text-sm text-slate-700">{concern}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Reviewer Notes */}
                <div className="border-t border-slate-200 pt-4">
                  <label className="block text-sm font-medium text-slate-900 mb-2">
                    Reviewer Notes & Verification:
                  </label>
                  <textarea
                    placeholder="Add your findings, verification notes, or concerns..."
                    rows={3}
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent text-sm"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Manual Review Actions */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <h4 className="font-semibold text-slate-900 mb-4">Manual Review Decision</h4>
            <div className="grid grid-cols-3 gap-3">
              <button className="p-4 border-2 border-green-200 rounded-lg hover:bg-green-50 transition-all flex flex-col items-center gap-2">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
                <span className="text-sm font-medium text-slate-900">Approve</span>
              </button>
              <button className="p-4 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-all flex flex-col items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-amber-600" />
                <span className="text-sm font-medium text-slate-900">Needs Work</span>
              </button>
              <button className="p-4 border-2 border-red-200 rounded-lg hover:bg-red-50 transition-all flex flex-col items-center gap-2">
                <AlertTriangle className="w-8 h-8 text-red-600" />
                <span className="text-sm font-medium text-slate-900">Reject</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors font-medium">
          Save Progress
        </button>
        <button className="flex-1 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 font-medium">
          Continue to Manual Findings →
        </button>
      </div>
    </div>
  );
}
