import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('schedule');

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <i className="fas fa-compass text-white"></i>
              </div>
              <span className="text-xl font-bold text-gray-900">Campus Compass</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => setActiveTab('schedule')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium cursor-pointer ${
                activeTab === 'schedule' 
                  ? 'border-b-2 border-blue-500 text-gray-900' 
                  : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="far fa-calendar-alt mr-2"></i>
              Schedule
            </button>
            <button 
              onClick={() => setActiveTab('budget')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium cursor-pointer ${
                activeTab === 'budget' 
                  ? 'border-b-2 border-blue-500 text-gray-900' 
                  : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="far fa-credit-card mr-2"></i>
              Budget
            </button>
            <button 
              onClick={() => setActiveTab('study')}
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium cursor-pointer ${
                activeTab === 'study' 
                  ? 'border-b-2 border-blue-500 text-gray-900' 
                  : 'border-b-2 border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className="far fa-book-open mr-2"></i>
              Study
            </button>
          </div>

          {/* User Menu */}
          <div className="flex items-center">
            <div className="relative ml-3">
              <div>
                <button 
                  type="button" 
                  className="bg-gray-100 rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white font-medium">MB</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button 
              type="button" 
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => {
                setActiveTab('schedule');
                setIsMenuOpen(false);
              }}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'schedule' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="far fa-calendar-alt mr-2"></i>
              Schedule
            </button>
            <button 
              onClick={() => {
                setActiveTab('budget');
                setIsMenuOpen(false);
              }}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'budget' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="far fa-credit-card mr-2"></i>
              Budget
            </button>
            <button 
              onClick={() => {
                setActiveTab('study');
                setIsMenuOpen(false);
              }}
              className={`w-full text-left block px-3 py-2 rounded-md text-base font-medium ${
                activeTab === 'study' 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <i className="far fa-book-open mr-2"></i>
              Study
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;