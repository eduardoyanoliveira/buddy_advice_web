import ThemeProvider from '../styles/themeProvider';
import Global from '../styles/global';
import { Router } from '../router';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../components/NavMenu';
import { AppTemplate } from './styles';
import AppHeader from '../components/AppHeader';

function App() {
  return (
    <BrowserRouter>
      <Global/>
      <ThemeProvider>
        {
          localStorage.getItem('@token') && (
            <AppHeader/>
          )
        }
        <AppTemplate isLogged={!!localStorage.getItem('@token')}>
          <Router/>
        </AppTemplate>
        {
          localStorage.getItem('@token') && (
            <NavMenu/>
          )
        }
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
