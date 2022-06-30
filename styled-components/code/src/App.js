import  Header from './components/Header';
import  Layout from './components/Layout';

import { StyledThemeProvider } from './context/ThemeProvider';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <StyledThemeProvider >
      <GlobalStyle/>
      <Header />
      <Layout />
    </StyledThemeProvider>
  );
}

export default App;
