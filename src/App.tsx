import ThemeProvider from './styles/themeProvider';
import Global from './styles/global';
import UserRegisterPage from './pages/User/Register';

function App() {
  return (
    <>
      <Global/>
      <ThemeProvider>
        <UserRegisterPage/>
      </ThemeProvider>
    </>
  );
};

export default App;
