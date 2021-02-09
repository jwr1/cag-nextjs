import { createContext, useState } from 'react';

const headerThemeContext = createContext();

export default headerThemeContext;

export function HeaderThemeProvider({ children }) {
  const headerThemeState = useState('light');

  return (
    <headerThemeContext.Provider value={headerThemeState}>
      {children}
    </headerThemeContext.Provider>
  );
}
