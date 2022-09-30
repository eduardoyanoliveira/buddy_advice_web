import ThemeProvider from '../styles/themeProvider';
import Global from '../styles/global';
import { Router } from '../router';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../components/NavMenu';

function App() {
  return (
    <BrowserRouter>
      <Global/>
      <ThemeProvider>
        <NavMenu/>
        <Router/>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
