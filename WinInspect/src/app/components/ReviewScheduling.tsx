import { useState } from 'react';
import { Calendar, Clock, User, CheckCircle2, Video, FileText } from 'lucide-react';

interface ReviewSchedulingProps {
  project: any;
}

const reviewers = [
  {
    name: 'Sarah Chen',
    role: 'Senior Security Architect',
    expertise: ['Security', 'Architecture', 'Compliance', 'Node.js', 'AWS'],
    matchScore: 95,
    availability: 'High',
    focus: 'Security & Architecture',
  },
  {
    name: 'Michael Torres',
    role: 'Staff Engineer',
    expertise: ['Performance', 'PostgreSQL', 'Microservices', 'Data Architecture'],
    matchScore: 88,
    availability: 'Medium',
    focus: 'Performance & Data Architecture',
  },
];

const timeSlots = [
  { date: 'Thu, Dec 21', time: '2:00 PM EST', available: true, best: true, allAvailable: true },
  { date: 'Thu, Dec 21', time: '4:00 PM EST', available: true, best: false, allAvailable: false },
  { date: 'Fri, Dec 22', time: '10:00 AM EST', available: true, best: false, allAvailable: false },
  { date: 'Fri, Dec 22', time: '2:00 PM EST', available: true, best: false, allAvailable: true },
  { date: 'Mon, Dec 25', time: '10:00 AM EST', available: false, best: false, allAvailable: false },
  { date: 'Tue, Dec 26', time: '3:00 PM EST', available: true, best: false, allAvailable: true },
];

export default function ReviewScheduling({ project }: ReviewSchedulingProps) {
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200 p-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-slate-900 mb-2">Review Successfully Scheduled!</h2>
            <p className="text-slate-700 mb-8">
              Your TQA review meeting has been confirmed. Calendar invitations have been sent to all participants.
            </p>

            <div className="bg-white rounded-xl border border-green-200 p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Date & Time</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-indigo-600" />
                    <p className="font-semibold text-slate-900">{selectedSlot.date}</p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <p className="font-semibold text-slate-900">{selectedSlot.time}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Duration</p>
                  <p className="font-semibold text-slate-900">90 minutes</p>
                  <p className="text-sm text-slate-600 mt-2">Video Conference</p>
                  <a href="#" className="text-indigo-600 hover:underline text-sm">https://zoom.us/j/1234567890</a>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <p className="text-sm text-slate-600 mb-3">Reviewers</p>
                <div className="space-y-3">
                  {reviewers.map((reviewer) => (
                    <div key={reviewer.name} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-sm text-white">
                        {reviewer.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-slate-900">{reviewer.name}</p>
                        <p className="text-sm text-slate-600">{reviewer.role} • {reviewer.focus}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <h3 className="font-semibold text-slate-900">What Happens Next?</h3>
              <div className="flex items-start gap-3 text-left max-w-xl mx-auto">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">Calendar invitations sent to all participants</p>
              </div>
              <div className="flex items-start gap-3 text-left max-w-xl mx-auto">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">Reviewers will receive preparation materials 24 hours before meeting</p>
              </div>
              <div className="flex items-start gap-3 text-left max-w-xl mx-auto">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">You'll receive reminder emails at 24hr, 2hr, and 15min before</p>
              </div>
              <div className="flex items-start gap-3 text-left max-w-xl mx-auto">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">Review report will be generated within 1 hour after meeting</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg max-w-xl mx-auto">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-left">
                  <p className="font-semibold text-slate-900 mb-1">Countdown to Review</p>
                  <p className="text-2xl font-bold text-indigo-600">3 days, 4 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Auto-Assigned Reviewers */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E6F0FF' }}>
              <User className="w-5 h-5" style={{ color: '#003087' }} />
            </div>
            <div>
              <h3 className="text-slate-900">AI-Matched Reviewers</h3>
              <p className="text-slate-600 text-sm">Assigned based on expertise and availability</p>
            </div>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviewers.map((reviewer) => (
            <div key={reviewer.name} className="border border-slate-200 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <span className="text-xl">{reviewer.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-slate-900">{reviewer.name}</h4>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                      {reviewer.matchScore}% Match
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{reviewer.role}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Focus Areas</p>
                      <p className="text-sm text-slate-900">{reviewer.focus}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-1">Availability</p>
                      <p className="text-sm text-slate-900">{reviewer.availability}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-2">
                      {reviewer.expertise.map((skill) => (
                        <span key={skill} className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Select Time Slot */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E6F0FF' }}>
              <Calendar className="w-5 h-5" style={{ color: '#003087' }} />
            </div>
            <div>
              <h3 className="text-slate-900">Select Meeting Time</h3>
              <p className="text-slate-600 text-sm">Choose a time that works for all participants</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {timeSlots.map((slot, idx) => (
              <button
                key={idx}
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  !slot.available
                    ? 'bg-slate-50 border-slate-200 opacity-50 cursor-not-allowed'
                    : selectedSlot === slot
                    ? ''
                    : 'bg-white border-slate-200'
                }`}
                style={selectedSlot === slot ? { borderColor: '#003087', backgroundColor: '#E6F0FF' } : {}}
              >
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold text-slate-900">{slot.date}</p>
                    <p className="text-sm text-slate-600">{slot.time}</p>
                  </div>
                  {slot.best && slot.available && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                      Best
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {slot.available ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-slate-600">
                        {slot.allAvailable ? 'All available' : '1 optional attendee unavailable'}
                      </span>
                    </>
                  ) : (
                    <span className="text-slate-500">Not available</span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Meeting Details */}
      <div className="bg-blue-50 rounded-xl border border-blue-200 p-6">
        <h4 className="font-semibold text-slate-900 mb-4">Meeting Details</h4>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" style={{ color: '#003087' }} />
            <div>
              <p className="text-sm text-slate-600">Duration</p>
              <p className="font-medium text-slate-900">90 minutes</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Video className="w-5 h-5" style={{ color: '#003087' }} />
            <div>
              <p className="text-sm text-slate-600">Format</p>
              <p className="font-medium text-slate-900">Virtual Meeting (Zoom)</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <FileText className="w-5 h-5 mt-1" style={{ color: '#003087' }} />
            <div>
              <p className="text-sm text-slate-600 mb-2">Agenda</p>
              <div className="space-y-1 text-sm text-slate-700">
                <p>• Introduction & Project Overview (10 min)</p>
                <p>• Architecture Review (20 min)</p>
                <p>• Security Discussion - Critical Focus (25 min)</p>
                <p>• Performance & Scalability (15 min)</p>
                <p>• Testing & Quality (10 min)</p>
                <p>• Operations & Deployment (10 min)</p>
              </div>
            </div>
          </div>
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
          Request Different Reviewers
        </button>
        <button
          onClick={handleConfirm}
          disabled={!selectedSlot}
          className="px-6 py-3 text-white rounded-lg transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          style={{ backgroundColor: '#003087' }}
          onMouseEnter={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#002366')}
          onMouseLeave={(e) => !e.currentTarget.disabled && (e.currentTarget.style.backgroundColor = '#003087')}
        >
          Confirm & Schedule Review
        </button>
      </div>
    </div>
  );
}
