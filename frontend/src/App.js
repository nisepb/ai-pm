import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import IdeaInput from './components/IdeaInput';
import ExecutiveSummary from './components/ExecutiveSummary';
import BackgroundPattern from './components/BackgroundPattern';
import { AppProvider } from './context/AppContext';
import ProgressStepper from './components/ProgressStepper';
import AuthForm from './components/AuthForm';
import Dashboard from './components/Dashboard';
import BuildPrototype from './components/BuildPrototype'; // Import the component for the /build route


function App() {
  return (
    <AppProvider>
      <Router>
        <div
          style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <BackgroundPattern />
          <Header />
          <ProgressStepper />
          
          {/* Main content area - flex grows to fill available space */}
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/input" element={<IdeaInput />} />
              <Route path="/summary" element={<ExecutiveSummary />} />
              <Route path="/auth" element={<AuthForm />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/build" element={<BuildPrototype />} /> 
            </Routes>
          </main>

          {/* Ensure footer stays at the bottom */}
          <Footer style={{ marginTop: 'auto' }} />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
