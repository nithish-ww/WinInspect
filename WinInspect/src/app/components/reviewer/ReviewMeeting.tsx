import { useState } from 'react';
import { Video, Calendar, Clock, User, CheckCircle2, XCircle, AlertTriangle, Plus, Mic } from 'lucide-react';

interface ReviewMeetingProps {
  project: any;
}

const checklistItems = [
  { id: 1, category: 'Architecture', item: 'System architecture diagram', status: 'pending', notes: '' },
  { id: 2, category: 'Security', item: 'Authentication mechanism', status: 'pending', notes: '' },
  { id: 3, category: 'Performance', item: 'Load test results', status: 'pending', notes: '' },
  { id: 4, category: 'Testing', item: 'UAT sign-off', status: 'pending', notes: '' },
];

export default function ReviewMeeting({ project }: ReviewMeetingProps) {
  const [items, setItems] = useState(checklistItems);
  const [currentItem, setCurrentItem] = useState(0);
  const [meetingNotes, setMeetingNotes] = useState('');
  const [actionItems, setActionItems] = useState<any[]>([]);
  const [showAddAction, setShowAddAction] = useState(false);

  const updateItemStatus = (id: number, status: 'pass' | 'fail' | 'needs-work') => {
    setItems(items.map(item => item.id === id ? { ...item, status } : item));
  };

  const handleAddAction = (action: any) => {
    setActionItems([...actionItems, { ...action, id: actionItems.length + 1 }]);
    setShowAddAction(false);
  };

  return (
    <div className="space-y-6">
      {/* Meeting Info */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-200 p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-slate-900 mb-2">Review Meeting</h3>
            <div className="flex items-center gap-6 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Dec 26, 2025
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                2:00 PM EST • 90 min
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                John Engineer
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2">
            <Video className="w-4 h-4" />
            Join Meeting
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Checklist */}
        <div className="col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-slate-900">Live Checklist Review</h3>
              <p className="text-sm text-slate-600 mt-1">Mark items in real-time during the meeting</p>
            </div>

            <div className="p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="border border-slate-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-900">{item.item}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <button
                      onClick={() => updateItemStatus(item.id, 'pass')}
                      className={`flex-1 px-3 py-2 rounded-lg border-2 transition-all ${
                        item.status === 'pass'
                          ? 'bg-green-50 border-green-500 text-green-700'
                          : 'border-slate-200 text-slate-600 hover:border-green-300'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => updateItemStatus(item.id, 'needs-work')}
                      className={`flex-1 px-3 py-2 rounded-lg border-2 transition-all ${
                        item.status === 'needs-work'
                          ? 'bg-amber-50 border-amber-500 text-amber-700'
                          : 'border-slate-200 text-slate-600 hover:border-amber-300'
                      }`}
                    >
                      <AlertTriangle className="w-4 h-4 mx-auto" />
                    </button>
                    <button
                      onClick={() => updateItemStatus(item.id, 'fail')}
                      className={`flex-1 px-3 py-2 rounded-lg border-2 transition-all ${
                        item.status === 'fail'
                          ? 'bg-red-50 border-red-500 text-red-700'
                          : 'border-slate-200 text-slate-600 hover:border-red-300'
                      }`}
                    >
                      <XCircle className="w-4 h-4 mx-auto" />
                    </button>
                  </div>

                  <textarea
                    placeholder="Discussion notes..."
                    value={item.notes}
                    onChange={(e) => setItems(items.map(i => i.id === item.id ? { ...i, notes: e.target.value } : i))}
                    rows={2}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Meeting Notes */}
          <div className="bg-white rounded-xl border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-900">Meeting Notes</h3>
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Mic className="w-4 h-4" />
              </button>
            </div>
            <textarea
              value={meetingNotes}
              onChange={(e) => setMeetingNotes(e.target.value)}
              placeholder="Record key discussion points, decisions, and observations..."
              rows={8}
              className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 resize-none"
            />
          </div>
        </div>

        {/* Action Items */}
        <div className="col-span-1">
          <div className="bg-white rounded-xl border border-slate-200 sticky top-6">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-slate-900">Action Items</h3>
              <p className="text-xs text-slate-600 mt-1">{actionItems.length} items</p>
            </div>

            <div className="p-4">
              <button
                onClick={() => setShowAddAction(true)}
                className="w-full p-3 border-2 border-dashed border-slate-300 rounded-lg hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center justify-center gap-2 text-slate-600 hover:text-indigo-600 text-sm"
              >
                <Plus className="w-4 h-4" />
                Add Action Item
              </button>
            </div>

            {showAddAction && (
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Action item title..."
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                  <select className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm">
                    <option>Critical</option>
                    <option>High</option>
                    <option>Medium</option>
                  </select>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowAddAction(false)}
                      className="flex-1 px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleAddAction({ title: 'New action', priority: 'high' })}
                      className="flex-1 px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="divide-y divide-slate-200 max-h-96 overflow-y-auto">
              {actionItems.map((action) => (
                <div key={action.id} className="p-4">
                  <p className="text-sm font-medium text-slate-900 mb-1">{action.title}</p>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-0.5 bg-orange-100 text-orange-700 rounded">
                      {action.priority}
                    </span>
                  </div>
                </div>
              ))}
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
          End Meeting & Generate Report →
        </button>
      </div>
    </div>
  );
}
