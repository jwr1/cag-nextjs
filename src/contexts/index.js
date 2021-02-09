import { HeaderThemeProvider } from './headerTheme';

export default function ContextsProvider({ children }) {
  return <HeaderThemeProvider>{children}</HeaderThemeProvider>;
}
