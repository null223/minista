import { ThemeProvider } from "styled-components"

const AppLayout = ({ children }) => {
  return <ThemeProvider><main>{children}</main></ThemeProvider>
}

export default AppLayout
