import { ThemeProvider } from 'styled-components';
import theme from '../themes/default';
import GlobalStyles from '../themes/global';

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
