import { Outlet } from "react-router-dom"
import {Header} from "./components/Header"
import { useContext } from "react"
import { ThemeContext } from "./services/ThemeContext"

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "dark" ? "dark-class" : "light-class"}`}>
      <Header />
      <Outlet />
    </div>
  )
}
export default App
