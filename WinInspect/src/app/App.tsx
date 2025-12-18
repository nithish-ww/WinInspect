import { useState } from 'react';
import { Bell, Calendar, CheckCircle2, Clock, FileText, LayoutDashboard, Plus, Settings, User, Users, BarChart3, LogOut } from 'lucide-react';
import Dashboard from './components/Dashboard';
import NewProjectForm from './components/NewProjectForm';
import ProjectDetails from './components/ProjectDetails';
import ReviewerDashboard from './components/reviewer/ReviewerDashboard';
import ReviewerProjectView from './components/reviewer/ReviewerProjectView';
import ManagementDashboard from './components/management/ManagementDashboard';
import ManagementProjectView from './components/management/ManagementProjectView';
import AnalyticsDashboard from './components/management/AnalyticsDashboard';

export default function App() {
  const [userRole, setUserRole] = useState<'engineer' | 'reviewer' | 'management'>('engineer');
  const [currentView, setCurrentView] = useState<'dashboard' | 'new-project' | 'project-details' | 'analytics'>('dashboard');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Notifications data based on role
  const recentNotifications = userRole === 'reviewer' ? [
    {
      id: 1,
      type: 'new-assignment',
      title: 'New review assigned: Mobile App Performance Optimization',
      time: '2 hours ago',
      priority: 'high',
      isRead: false,
    },
    {
      id: 2,
      type: 'action-complete',
      title: 'Database Migration Tool - All action items completed',
      time: '5 hours ago',
      priority: 'medium',
      isRead: false,
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Reminder: User Authentication Service review in 1 day',
      time: '1 day ago',
      priority: 'medium',
      isRead: true,
    },
  ] : [
    {
      id: 1,
      type: 'review-approved',
      title: 'Payment Gateway v2.0 has been approved',
      time: '3 hours ago',
      priority: 'high',
      isRead: false,
    },
    {
      id: 2,
      type: 'review-scheduled',
      title: 'Review scheduled for Mobile App Performance Optimization',
      time: '1 day ago',
      priority: 'medium',
      isRead: true,
    },
  ];

  const handleViewProject = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentView('project-details');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedProjectId(null);
  };

  const handleRoleSwitch = (role: 'engineer' | 'reviewer' | 'management') => {
    setUserRole(role);
    setCurrentView('dashboard');
    setSelectedProjectId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button 
                onClick={handleBackToDashboard}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgb(0, 48, 135), rgb(0, 179, 194))' }}>
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-slate-900">TechSure</h1>
                  <p className="text-xs text-slate-500">TQA Review System</p>
                </div>
              </button>
              
              <nav className="hidden md:flex items-center gap-1">
                <button
                  onClick={handleBackToDashboard}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-colors ${
                    currentView === 'dashboard'
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </button>
                <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors">
                  <Calendar className="w-4 h-4" />
                  Reviews
                </button>
                <button className="px-4 py-2 rounded-lg flex items-center gap-2 text-slate-600 hover:bg-slate-50 transition-colors">
                  <FileText className="w-4 h-4" />
                  Reports
                </button>
              </nav>
            </div>

            <div className="flex items-center gap-3">
              {/* Role Switcher */}
              <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
                <button
                  onClick={() => handleRoleSwitch('engineer')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    userRole === 'engineer'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <User className="w-4 h-4" />
                  Engineer
                </button>
                <button
                  onClick={() => handleRoleSwitch('reviewer')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    userRole === 'reviewer'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  Reviewer
                </button>
                <button
                  onClick={() => handleRoleSwitch('management')}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                    userRole === 'management'
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <BarChart3 className="w-4 h-4" />
                  Management
                </button>
              </div>

              <div className="relative">
                <button 
                  onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                  className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  <Bell className="w-5 h-5" />
                  {recentNotifications.some(n => !n.isRead) && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>

                {/* Notification Dropdown */}
                {isNotificationOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsNotificationOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-96 bg-white rounded-xl border border-slate-200 shadow-xl z-50 max-h-[500px] overflow-hidden flex flex-col">
                      <div className="p-4 border-b border-slate-200">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bell className="w-5 h-5 text-slate-600" />
                            <h3 className="text-slate-900 font-semibold">Notifications</h3>
                          </div>
                          <button 
                            className="text-sm font-medium hover:underline"
                            style={{ color: '#003087' }}
                          >
                            Mark all as read
                          </button>
                        </div>
                      </div>
                      <div className="divide-y divide-slate-200 overflow-y-auto">
                        {recentNotifications.map((notif) => (
                          <div
                            key={notif.id}
                            className={`p-4 hover:bg-slate-50 transition-colors cursor-pointer ${
                              !notif.isRead ? 'bg-blue-50/50' : ''
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              {!notif.isRead && (
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                              )}
                              <div className="flex-1">
                                <p className={`text-sm ${!notif.isRead ? 'font-medium text-slate-900' : 'text-slate-700'}`}>
                                  {notif.title}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">{notif.time}</p>
                              </div>
                              {notif.priority === 'high' && (
                                <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs font-medium">
                                  HIGH
                                </span>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              
              <div className="relative pl-3 border-l border-slate-200">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center gap-3 hover:bg-slate-50 rounded-lg p-2 transition-colors"
                >
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="hidden lg:block text-left">
                    <p className="text-sm font-medium text-slate-900">
                      {userRole === 'engineer' ? 'John Engineer' : userRole === 'reviewer' ? 'Sarah Chen' : 'Michael Davis'}
                    </p>
                    <p className="text-xs text-slate-500">
                      {userRole === 'engineer' ? 'Engineer' : userRole === 'reviewer' ? 'Senior Reviewer' : 'Product Owner'}
                    </p>
                  </div>
                </button>

                {/* User Menu Dropdown */}
                {isUserMenuOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl border border-slate-200 shadow-xl z-50 overflow-hidden">
                      {/* User Info Section */}
                      <div className="p-6 bg-gradient-to-br from-slate-50 to-white">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-8 h-8 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {userRole === 'engineer' ? 'John Engineer' : userRole === 'reviewer' ? 'Sarah Chen' : 'Michael Davis'}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {userRole === 'engineer' ? 'John.Engineer@WinWire.com' : userRole === 'reviewer' ? 'Sarah.Chen@WinWire.com' : 'Michael.Davis@WinWire.com'}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Sign Out Option */}
                      <div className="border-t border-slate-200">
                        <button 
                          className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-slate-50 transition-colors"
                          onClick={() => {
                            setIsUserMenuOpen(false);
                            // Add sign out logic here
                            console.log('Sign out clicked');
                          }}
                        >
                          <LogOut className="w-5 h-5 text-slate-600" />
                          <span className="text-sm font-medium text-slate-900">Sign out</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto px-6 py-8">
        {userRole === 'engineer' ? (
          <>
            {currentView === 'dashboard' && (
              <Dashboard
                onNewProject={() => setCurrentView('new-project')}
                onViewProject={handleViewProject}
              />
            )}
            
            {currentView === 'new-project' && (
              <NewProjectForm onBack={handleBackToDashboard} />
            )}

            {currentView === 'project-details' && selectedProjectId && (
              <ProjectDetails
                projectId={selectedProjectId}
                onBack={handleBackToDashboard}
              />
            )}
          </>
        ) : userRole === 'reviewer' ? (
          <>
            {currentView === 'dashboard' && (
              <ReviewerDashboard onViewProject={handleViewProject} />
            )}

            {currentView === 'project-details' && selectedProjectId && (
              <ReviewerProjectView
                projectId={selectedProjectId}
                onBack={handleBackToDashboard}
              />
            )}
          </>
        ) : (
          <>
            {currentView === 'dashboard' && (
              <ManagementDashboard
                onViewProject={handleViewProject}
                onViewAnalytics={() => setCurrentView('analytics')}
              />
            )}

            {currentView === 'project-details' && selectedProjectId && (
              <ManagementProjectView
                projectId={selectedProjectId}
                onBack={handleBackToDashboard}
              />
            )}

            {currentView === 'analytics' && (
              <AnalyticsDashboard onBack={handleBackToDashboard} />
            )}
          </>
        )}
      </main>
    </div>
  );
}