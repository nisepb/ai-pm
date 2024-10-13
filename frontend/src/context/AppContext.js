import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [stage, setStage] = useState('landing');
  const [executiveSummary, setExecutiveSummary] = useState(null);

  return (
    <AppContext.Provider
      value={{
        stage,
        setStage,
        executiveSummary,
        setExecutiveSummary,
      }}
    >
      {children} {/* Make sure no BrowserRouter or Router is here */}
    </AppContext.Provider>
  );
};
