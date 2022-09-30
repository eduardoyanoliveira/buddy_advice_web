import React, { createContext, ReactNode } from 'react';
import usePersistedState from '../../hooks/usePersistedState';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

export const ThemeContext =  createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

interface Props {
  children: ReactNode
}


const  ThemeProvider: React.FC<Props> = ({children}) => {

  const [dark, setDark] = usePersistedState('is_dark', false);

  const toggleTheme = () => {
    setDark(!dark);
  };
  
  return (
    <ThemeContext.Provider
        value={{
          isDarkTheme: dark,
          toggleTheme,
        }}
    >
    <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
      {children}
    </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;