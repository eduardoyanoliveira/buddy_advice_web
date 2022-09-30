import { Input } from './components/Inputs/Input/styles';
import ThemeProvider from './styles/themeProvider';
import Global from './styles/global';
import Button from './components/Buttons/Button';
import { ButtonColors } from './components/Buttons/Button/ButtonColors';

function App() {
  return (
    <>
      <Global/>
      <ThemeProvider>
        <Input/>
        <Button text='test' backgroundColor={ButtonColors.primaryGradient}/>
      </ThemeProvider>
    </>
  );
};

export default App;
