import { useState } from 'react';
import { Bell, Calendar, CheckCircle2, Clock, FileText, LayoutDashboard, Plus, Settings, User, Users, BarChart3 } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-slate-900">TechSure</h1>
                  <p className="text-xs text-slate-500">TQA Review System</p>
                </div>
              </div>
              
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

              <button className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-3 pl-3 border-l border-slate-200">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="hidden lg:block">
                  <p className="text-sm font-medium text-slate-900">
                    {userRole === 'engineer' ? 'John Engineer' : userRole === 'reviewer' ? 'Sarah Chen' : 'Michael Davis'}
                  </p>
                  <p className="text-xs text-slate-500">
                    {userRole === 'engineer' ? 'Engineer' : userRole === 'reviewer' ? 'Senior Reviewer' : 'Product Owner'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
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