import ThemeProvider from './styles/themeProvider';
import Global from './styles/global';

import LoginPage from './pages/User/Login';

function App() {
  return (
    <>
      <Global/>
      <ThemeProvider>
        <LoginPage/>
      </ThemeProvider>
    </>
  );
};

export default App;
